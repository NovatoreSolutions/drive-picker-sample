angular.module('DropboxPickerConfig', ['dropbox-picker'])

    .config(['DropBoxSettingsProvider', function(DropBoxSettingsProvider) {

        // Configure the options
        DropBoxSettingsProvider.configure({
            linkType: 'direct',//dropbox link type
            multiselect: true,//dropbox multiselect
            extensions: ['.pdf', '.doc', '.docx','.png','.jpg'],//dropbox file extensions

        });
    }])