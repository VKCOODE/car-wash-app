import React, { useState } from 'react';
import { Alert, Image, ImageBackground, SafeAreaView, StatusBar, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import styles from './EnterUserdetailStyle';
import Button from '../../Common/Button';
import { colors, Images } from '../../../theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import BoldText from '../../Common/BoldText';
import Regulartext from '../../Common/Regulartext';
import { Actions } from 'react-native-router-flux';
import Header from '../../Common/Header';
import Inputlablel from '../../Common/Inputlablel';




const EnterUserdetail = (props: any) => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const goTonext = () => {
      Actions.Dashboard()
  }

  return (
    <SafeAreaView style={styles.mainContainor}>
      <StatusBar backgroundColor={'#fff'} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <Header onPress={() => Actions.pop()} />
        <View style={styles.mainview}>

          <View style={styles.rowtext}>
            <BoldText style={styles.hellotxt}>Hello,</BoldText>
            <BoldText style={{ fontSize: 32 }}>nice to</BoldText>
          </View>
          <BoldText style={{ fontSize: 32 }}>meet you</BoldText>
          <View style={{ paddingVertical: 7 }}>
              <Regulartext>Fill out the details to start find car wash service around you</Regulartext>
            </View>
         
          <View style={{marginTop:20}}>
            <View style={styles.inputview}>
              <Inputlablel placeholder={'First Name'} />
            </View>

            <View style={styles.inputview}>
              <Inputlablel placeholder={'Last Name'} />
            </View>

            <View style={styles.inputview}>
              <Inputlablel placeholder={'Email Address*'} />
            </View>

            <View style={styles.inputview}>
              <Inputlablel placeholder={'Phone Number'} />
            </View>
          </View>

          <View style={styles.inputview}>
            <Button style={{ width: '100%', marginTop: 50, }} title="Confirm" onPress={() => goTonext()} />
          </View>
        </View>
      </KeyboardAwareScrollView>

    </SafeAreaView>
  );
};

export default EnterUserdetail;
