import React, { useState } from 'react';
import { Alert, Image, SafeAreaView, StatusBar, View, } from 'react-native';
import styles from './VerifyPhoneNumberStyle';
import Button from '../../Common/Button';
import { colors, Images } from '../../../theme';
import { Value } from 'react-native-reanimated';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import BoldText from '../../Common/BoldText';
import Regulartext from '../../Common/Regulartext';
import { Actions } from 'react-native-router-flux';
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import Header from '../../Common/Header';

const VerifyPhoneNumber = (props: any) => {
  const [password, setPassword] = useState('');
  const goTonext = () => {
    Actions.EnterUserdetail()
  }

  return (
    <SafeAreaView style={styles.mainStyle}>
      <StatusBar backgroundColor={'#fff'} barStyle='dark-content' />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <Header onPress={() => Actions.pop()} />
        <View style={styles.viewContainor}>
          <View style={styles.washerIconView}>
            <Image source={Images.cwficon} style={styles.washericon} />
          </View>
          <View>
            <BoldText style={styles.verifyText}>Verifying</BoldText>
            <BoldText>your</BoldText>
            <BoldText>number</BoldText>
          </View>
          <View style={styles.textView}>
            <Regulartext>We will send your verification code to {'\n'}+91-{props.number ? props.number :'7018134403'}</Regulartext>
          </View>
          <View style={styles.inputView}>
            <SmoothPinCodeInput
              codeLength={4}
              cellStyle={{
                borderBottomWidth: 2,
                borderColor: colors.gerytext, marginLeft: 10,
              }}
              cellStyleFocused={{
                borderColor: colors.gerytext, marginHorizontal: 5,
              }}
              value={password}
              onTextChange={(text: string) => setPassword(text)}
            />
            <Button style={styles.verifyBtn} title="Verify" onPress={() => goTonext()} />
          </View>
          <View style={styles.rowText}>
            <Regulartext style={styles.textStyle}>Resend code</Regulartext>
            <Regulartext style={styles.textStyle}>1.20 min left</Regulartext>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default VerifyPhoneNumber;
