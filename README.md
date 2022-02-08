# Unity Technical Assessment
The code for this project resides here

# Setup for Local Database
1. Install docker (skip if already installed)
2. Run `docker run --name some-mongo -p 27017:27017 -d mongo:latest`. This will start a local mongo instance available at `localhost:27017` that the local server will automatically access.
3. If you want to access the DB values yourself without going through the server, you can download `MongoDB Compass` locally and connect to `mongodb://localhost:27017`

# Setup For Local Server
1. Clone this repository with `git clone https://github.com/basilmahmood/UnityTechnicalAssessment.git`
2. Install [node.js](https://nodejs.org/en/) on your local machine (skip if already done)
3. Install the node packages by running `npm install` (inside the `server` folder)
5. Run `npm start` in your command line (inside the `server` folder) to run the server

# Building for deployment
1. Run `npm run build` inside the `server` folder
2. Run `docker build -t unity-assessment-basil ./`
3. You can deploy this container to wherever you want, to run it locally you can do `docker run -p 3000:3000 unity-assessment-basil`
