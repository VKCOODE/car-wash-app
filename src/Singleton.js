import AsyncStorage from '@react-native-community/async-storage';
import * as constants from './Constants';
import { Alert, Platform, Share } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';






export default class Singleton {
  static myInstance = null;
 
  accessToken = '';


  static getInstance() {
    if (Singleton.myInstance == null) {
      Singleton.myInstance = new Singleton();
    }
    return this.myInstance;
  }

  async saveToken(token) {
    Singleton.getInstance().accessToken = token;
    await this.saveData(constants.ACCESS_TOKEN, token);
  }
 

 
  static showAlert(msg) {
    Alert.alert(
      constants.APP_NAME,
      msg.toString(),
      [{ text: 'OK', onPress: () => { } }],
      { cancelable: false },
    );
  }

  saveData(key, value) {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(key, value)
        .then(response => {
          resolve(value);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getData(key) {
    // console.log('get-data-key',key);
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key)
        .then(response => {
          // console.log('getdata---',response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  clearStorage() {
    return new Promise((resolve, reject) => {
      AsyncStorage.clear()
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  
  iosImgUri(paramName, imagePath) {
    if (Platform.OS == 'ios') {
      imagePath = imagePath.replace('file:///', '').replace('file://', '');
      imagePath = decodeURI(imagePath);
    }
    let data = {
      name: paramName,
      data: RNFetchBlob.wrap(imagePath),
      filename: `img${new Date().getTime()}.jpg`,
      type: 'image/jpg',
    }
    return data;
  }
}