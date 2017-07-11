# Novatore Angular Picker

Novatore Angular Picker is a web application built on MEAN (MongoDB, Express, Angular, Node). Picker implementation includes Google Drive, Microsoft OneDrive and Dropbox. 

## Installation

1. Clone/Download the repository
2. Install npm modules `npm install`
3. Install bower dependencies `bower install`
4. Start up the server `node server.js`
5. View in browser at http://localhost:6005

## Note

Google Drive, Microsoft OneDrive and Dropbox are seperate modules in their own files in `public/js` directory, which are included as dependencies in `app.js`. Methods for picker are implemented in `MainCtrl.js`.

## Instructions For Pickers Configuration

1. Create apps from developer console of each Microsoft OneDrive, Google Drive and Dropbox
2. Get keys for each of the apps created in step 1
3. Set URL and callback URL for each of the apps to make them work this application

