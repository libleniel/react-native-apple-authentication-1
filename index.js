import React from 'react';
import { NativeModules, Platform } from 'react-native';

const RCTAppleAuthentication = NativeModules.ReactNativeAppleAuthentication;

export const ReactNativeAppleAuthentication = {
  requestAppleAuthentication: async function(callBack) {
    if(Platform.OS === 'ios') {
      await RCTAppleAuthentication.requestAsync({
          requestedScopes: [RCTAppleAuthentication.Scope.FULL_NAME, RCTAppleAuthentication.Scope.EMAIL],
        }).then((response) => {
            callBack(response) //Display response
        }, (error) => {
          callBack(error) //Display error
        });
    } else {
      return null
    }
  },
  isFeatureActive: function() {
    const majorVersionIOS = parseInt(Platform.Version, 10);

    if (majorVersionIOS >= 13) {
      return true;
    }
    
    return false;
  }
}
