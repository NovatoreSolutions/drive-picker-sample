angular.module('GooglePickerConfig', ['lk-google-picker'])

    .config(['lkGoogleSettingsProvider', function (lkGoogleSettingsProvider) {

        // Configure the API credentials here
        lkGoogleSettingsProvider.configure({
            apiKey   : 'NMzcBzU8MbxKvaiaD5MCt_YG',
            clientId : '262607963425-u11pgu6dc6nievh0892lm15c9srp20sq.apps.googleusercontent.com',
            scopes   : ['https://www.googleapis.com/auth/drive']
        });
    }]);