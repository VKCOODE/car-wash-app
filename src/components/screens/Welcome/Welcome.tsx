import React, { useState } from 'react';
import {  Image,  SafeAreaView,  TextInput, Text, View, TouchableOpacity,   } from 'react-native';
import styles from './WelcomeStyle';
import Button from '../../Common/Button';
import { colors, Images } from '../../../theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import BoldText from '../../Common/BoldText';
import Regulartext from '../../Common/Regulartext';
import { Actions } from 'react-native-router-flux';


const Welcome = () => {
  const [phoneNumber, setphoneNumber] = useState('');
  const goTonext = () => {
    Actions.VerifyPhoneNumber({ number: phoneNumber })
  }
  return (
    <SafeAreaView style={styles.mainContainor}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
      
        <View style={styles.viewcontainor}>
          <View style={styles.imageRowheader}>
            <Image source={Images.cwficon} style={styles.cwFicon} />
            <Image source={Images.star} style={styles.staricon} />
            <Image source={Images.star} style={styles.Icon2} />
          </View>

          <View style={styles.toptextRow}>
            <BoldText>Let's</BoldText>
            <BoldText style={styles.textStyle1}> start</BoldText>
          </View>

          <BoldText>with</BoldText>
          <BoldText>your phone</BoldText>
          <BoldText>number</BoldText>
         
          <View style={{ paddingVertical: 10 }}>
            <Regulartext>We will send you verification code</Regulartext>
          </View>

          <View style={styles.inputcontainor}>
            <TouchableOpacity style={styles.codeView}>
              <TouchableOpacity style={styles.codeTextView}>
                <Text style={styles.codeText}>+91</Text>
              </TouchableOpacity>
              <View style={styles.input}>
                <TextInput
                  maxLength={10}
                  keyboardType='phone-pad'
                  value={phoneNumber}
                  onChangeText={(text) => setphoneNumber(text)}
                  style={{ paddingLeft: 13, height: '100%', }}
                  placeholder='Enter phone number'
                  placeholderTextColor={colors.inputBorder} />
              </View>
            </TouchableOpacity>

            <Button style={{ width: '100%', }} title="Get OTP" onPress={() => goTonext()} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
