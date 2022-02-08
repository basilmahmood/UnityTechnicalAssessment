using System;
using System.Collections;
using UnityEngine;
using UnityEngine.Replay;
using UnityEngine.Networking;

namespace Unity.Metacast.Demo
{
    /// <summary>
    ///     Populate UIBrowser with test json data
    /// </summary>
    public class TestListings : MonoBehaviour
    {
        /// <summary>
        ///     Start is called on the frame when a script is enabled just
        ///     before any of the Update methods are called the first time.
        /// </summary>
        private void Start()
        {
            // Since we are only testing this, I hardcoded to the localhost url. If this was actually being deployed,
            // this would be an environment variable that would differ in prod vs local
            StartCoroutine(GetRequest("http://localhost:3000/api/gameListings"));
        }

        IEnumerator GetRequest(string uri)
        {
            using (UnityWebRequest webRequest = UnityWebRequest.Get(uri))
            {
                // Request and wait for the desired page.
                yield return webRequest.SendWebRequest();
                Debug.Log(webRequest.downloadHandler.text);

                switch (webRequest.result)
                {
                    case UnityWebRequest.Result.ConnectionError:
                    case UnityWebRequest.Result.DataProcessingError:
                        Debug.LogError("Error: " + webRequest.error);
                        break;
                    case UnityWebRequest.Result.ProtocolError:
                        Debug.LogError("HTTP Error: " + webRequest.error);
                        break;
                    case UnityWebRequest.Result.Success:
                        UIBrowser.instance.Init(webRequest.downloadHandler.text);
                        break;
                }
            }
        }
    }
}