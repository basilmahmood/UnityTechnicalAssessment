# Unity Technical Assessment
The code for this project resides here

# Setup for Database
You will need to have a mongodb instance setup prior. The setup is fairly easy if you are using Mongo Atlass (the cloud version), just follow the instructions on the mongo website. You can also alternatively setup a local instance, althought it is a bit longer process.

# Setup For Local Server
1. Clone this repository with `git clone https://github.com/basilmahmood/UnityTechnicalAssessment.git`
2. Install [node.js](https://nodejs.org/en/) on your local machine (skip if already done)
3. Install the node packages by running `npm install` (inside the `server` folder)
4. Setup your local environment variables by creating a file called `.env` (inside the `server` folder). The following variables are needed to connect to the database (their names are self explanitory):
  - DB_HOST
  - DB_NAME
  - DB_USER
  - DB_PASS
5. Run `npm start` in your command line (inside the `server` folder) to run the server

# Building for deployment
1. Run `npm run build` inside the `server` folder
2. Run `docker build -t unity-assessment-basil ./`
3. You can deploy this container to wherever you want, to run it locally you can do `docker run -p 3000:3000 --env-file .env unity-assessment-basil`
