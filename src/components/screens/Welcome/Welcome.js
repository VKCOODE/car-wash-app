import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './WelcomeStyle';
import {Wrap} from '../../common/Wrap';

const Welcome = () => {
  return (
    // <Wrap style screenStyle={styles.screenStyle} bottomStyle>
      <SafeAreaView style={{flex:1, backgroundColor:'grey', alignItems:'center', justifyContent:'center'}}>
      <Text style={styles.textStyle}>CWF</Text>
      </SafeAreaView>
    // </Wrap>
  );
};

export default Welcome;
