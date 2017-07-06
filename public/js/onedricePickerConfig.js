angular.module('OnedrivePickerConfig', ['one-drive-picker'])


    .config(['OneDriveSettingsProvider', function (OneDriveSettingsProvider) {

        // Configure the options
        OneDriveSettingsProvider.configure({
            clientId: '0d907644-f03e-456a-895c-441599064b25', // One Drive Id 32 chars
            action: 'download', // "share | download | query
            openInNewWindow: true,
            multiSelect: true,//one drive multiselect
        });
    }])