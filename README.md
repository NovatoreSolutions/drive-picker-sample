# Novatore MEAN Stack Single Page Application Starter + Angular Picker Sample Project

This is a repo for a starter application for a Single Page MEAN Stack application as well as we implemented Angular Google Drive Picker
 , OneDrive Picker and Dropbox picker so that we can use it future in case of need.

## Installation
1. Download the repository
2. Install npm modules: `npm install`
3. Install bower dependencies `bower install`
4. Start up the server: `node server.js`
5. View in browser at http://localhost:6005


## HELP Related to Code.
We have Seperate Configuration module files for google,dropbox & oneDrive in Public/js folder. Include it as our dependencies in
 app.js. Methods for picker "cancel/open/file-picker" is implemented in "MainCtrl.js". and other links for picker libraries are included
 in index.js. Use the same links.

## Important Points
1. Make Apps for Microsoft OneDrive, Enable Google Drive APi and App for Dropbox.
2. Use your own keys in links (if any.)
3. Use your own app keys in configuration file.
4. Set URL and callback URL accurately in Apps to make these pickers  work accurately.


Use this starter kit to build any MEAN stack application (with google,OneDrive & dropbox picker)you like.

If you have any questions or requests, email us at farrukhhashmi65@gmail.com or farrukh.hashmi@novatoresols.com and we'll keep updating this to make it perfect.

Thanks