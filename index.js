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
  }
}
