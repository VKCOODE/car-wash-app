import React, { useEffect, useState } from 'react';
import { Alert, Image, ImageBackground, SafeAreaView, StatusBar, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView, Dimensions, ViewBase, FlatList, Platform, ScrollView, Modal, Pressable, Linking } from 'react-native';
import styles from './MyBookingsDetailsStyle';
import Button from '../../Common/Button';
import { colors, Images } from '../../../theme';
import BoldText from '../../Common/BoldText';
import Regulartext from '../../Common/Regulartext';
import { Actions } from 'react-native-router-flux';
import Inputlablel from '../../Common/Inputlablel';
import HomeHeader from '../../Common/HomeHeader';
import SelectDropdown from 'react-native-select-dropdown'
import { TabIcon } from '../../Common/TabIcon';
import RoundHeader from '../../Common/RoundHeader';
const countries = ["Suzuki, Alto", "Suzuki, Alto-K10", "Suzuki, waganor", "Suzuki, Alto-LXI", "Suzuki, celerio", "Suzuki, Alto", "Suzuki, Alto-K10", "Suzuki, waganor", "Suzuki, Alto-LXI", "Suzuki, celerio",]

const sections = [
  { title: 'Washing', image: Images.wash },
  { title: 'Polish', image: Images.polish },
  { title: 'Wax', image: Images.wax },
  { title: 'Vaccume Cleaning', image: Images.vacume },
  { title: 'Dry Clean', image: Images.dryclean },
  { title: 'Interior cleaning', image: Images.interior },
]
const tabData = [{ title: "Current" }, { title: "Order History" }];

const MyBookingsDetails = (props: any) => {
  const [cancelModal, setcancelModal] = useState(false);
  ;
  const [tabstatus, setTabSatus] = useState('Current');
  const [selectedItem, setselectedItem] = useState(props.selectedItem);

  const callNumber = () => {
    

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+917018134403}';
    }
    else {
      phoneNumber = 'telprompt:${+1234567890}';
    }

    Linking.openURL(phoneNumber);
  
};


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor={colors.primaryBlue} barStyle='light-content' />
      <RoundHeader title="Booking Details" />
      {/* ///////////////////////////GO BACK///////////////////////// */}

      <ScrollView style={{ flex: 1, width: '100%', }}>

        <View style={{ flex: 1, width: '100%', }}>


          <View style={{ width: '100%', alignItems: 'center', }}>

            <View style={{ marginTop: 25, height: 122, width: '90%', alignItems: 'center', justifyContent: 'center', borderEndColor: 15 }}>
              <ImageBackground source={Images.booking} style={{ alignSelf: 'center', height: 122, width: '100%', }} ></ImageBackground>
              <View style={{ height: 100, position: 'absolute', width: '90%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <BoldText style={{ fontSize: 16, color: '#fff' }}>{' A1 Wash Service'}</BoldText>
                    <BoldText style={{ fontSize: 16, color: '#fff' }}>Phase 3B2, Mohali, India</BoldText>
                  </View>
                  <TouchableOpacity onPress={()=>callNumber()} style={{ height: 35, width: 35, borderRadius: 50, backgroundColor: '#fff', alignItems: "center", justifyContent: 'center' }}>
                    <Image source={Images.phone} style={{ height: 20, width: 20 }} />
                  </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={{ color: '#fff', fontWeight: '700' }}>{"DATE & TIME"}</Text>
                  <Text style={{ color: '#fff' }}>{'July 22, 2023 at 02:00 PM'}</Text>
                </View>

              </View>
            </View>
            <View style={{ marginTop: 10, borderBottomWidth: 0.3, borderColor: colors.inputBorder, opacity: 1, height: 50, width: '100%' }}>
              <View style={{ height: '100%', width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                <Image source={Images.bookingconfirm} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
                <BoldText style={{ fontSize: 20, marginLeft: 20, }}>Your Booking is Confirm</BoldText>
              </View>
            </View>
          </View>
          {/* ////////////////////////////////SERVIE DETAIL///////////////////////////////////////////////// */}
          <View style={{ marginTop: 20, marginHorizontal: 5, width: '100%', }}>
            <Text style={{ fontSize: 16, marginLeft: 20, fontWeight: '700', color: 'black' }}>Your Services</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10, }}>
              <Text style={{ fontSize: 12, color: 'black' }}>Clean, Wax,  </Text>
              <Text style={{ fontSize: 12, fontWeight: '700', color: 'black' }}>$ 50</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10, }}>
              <Text style={{ fontSize: 12, color: 'black' }}>Washing, Dry </Text>
              <Text style={{ fontSize: 12, fontWeight: '700', color: 'black' }}>$ 50</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10, }}>
              <Text style={{ fontSize: 12, color: 'black' }}>Washing, Dry </Text>
              <Text style={{ fontSize: 12, fontWeight: '700', color: 'black' }}>$ 50</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10, }}>
              <Text style={{ fontSize: 12, color: 'black' }}>Interior</Text>
              <Text style={{ fontSize: 12, fontWeight: '700', color: 'black' }}>$ 50</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10, }}>
              <Text style={{ fontSize: 12, color: 'black' }}>Cleaning </Text>
              <Text style={{ fontSize: 12, fontWeight: '700', color: 'black' }}>$ 50</Text>
            </View>

            {/* //////////////////////////////////TOTAL//////////////////////////////////////////////// */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10 }}>
              <Text style={{ fontSize: 13, color: colors.primaryBlue }}>Item Total </Text>
              <Text style={{ fontSize: 13, fontWeight: '700', color: 'black' }}>$ 250</Text>
            </View>

            {/* ////////////////////////////////GST////////////////////////////// */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 0, }}>
              <Text style={{ fontSize: 12, color: 'grey' }}>GST</Text>
              <Text style={{ fontSize: 12, fontWeight: '400', color: 'grey' }}>$ 50</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 3, }}>
              <Text style={{ fontSize: 12, color: 'grey' }}>Taxes</Text>
              <Text style={{ fontSize: 12, fontWeight: '400', color: 'grey' }}>$ 50</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 3, }}>
              <Text style={{ fontSize: 12, color: 'grey' }}>Service Charges </Text>
              <Text style={{ fontSize: 12, fontWeight: '400', color: 'grey' }}>$ 50</Text>
            </View>

            <View style={{ borderBottomWidth: 0.3,  backgroundColor: 'grey', width: '101%', height: 1, marginTop: 15, alignSelf:'center' ,marginRight:7}}></View>


            {/* ////////////////////////////////////////order detail///////////////////////////////////////////////// */}
            <Text style={{ fontSize: 16, marginHorizontal: 20, marginTop: 10, fontWeight: '700', color: 'black' }}>Order Details</Text>
            <Text style={{ fontSize: 12, marginHorizontal: 20, marginTop: 5, fontWeight: '500', color: 'black' }}>ORDER NUMBER</Text>
            <Text style={{ fontSize: 12, marginHorizontal: 20, marginTop: 3, fontWeight: '500', color: 'black' }}>569332580</Text>
            <Text style={{ fontSize: 12, marginHorizontal: 20, marginTop: 15, fontWeight: '500', color: 'black' }}>PHONE NUMBER</Text>
            <Text style={{ fontSize: 12, marginHorizontal: 20, marginTop: 3, fontWeight: '500', color: 'black' }}>9646207080</Text>

            <Text style={{ fontSize: 12, marginHorizontal: 20, marginTop: 15, fontWeight: '500', color: 'black' }}>ADDRESS</Text>
            <Text style={{ fontSize: 12, marginHorizontal: 20, marginTop: 3, fontWeight: '500', color: 'black' }}>Phase 3B2, Mohali, India</Text>

            <View style={{ marginVertical: 30, flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', width: '90%', marginHorizontal: 20 }}>
              <Button onPress={() => setcancelModal(true)} title='Reschedule' style={{ width: '50%', }} />
              <Button onPress={() =>Actions.Profile() } title='Cancel' style={{ width: '50%', marginLeft: 20, backgroundColor: 'red', }} />
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal
        transparent={true}
        animationType='fade'
        visible={cancelModal}
        onRequestClose={() => setcancelModal(false)}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', alignItems: "flex-end", justifyContent: "flex-end" }}>
          <View style={{ height: Dimensions.get('screen').height / 1.8, width: "100%", backgroundColor: '#fff', borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>

              <View style={{ marginTop: 40, }}>
                <Image source={Images.Ellipse} style={{ height: 73, width: 73, resizeMode:'contain' }} />
                <Image source={Images.Group} style={{ height: 73, width: 73, position: 'absolute',resizeMode:'contain',  top: 20, right: 40 }} />

              </View>

              <View style={{ alignItems: 'center', marginTop: 40 }}>
                <BoldText style={{ fontSize: 24 }}>You are about to cancel</BoldText>
                <BoldText style={{ fontSize: 24 }}>the booking</BoldText>
              </View>
              {/* /////////////////////////////////////////////PRICE IN MODAL////////////////////////////////////////////// */}
              <View style={{ flex: 1 }}>


                <View style={{ flexDirection: 'row', width: 300, justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10, }}>
                  <Text style={{ fontSize: 12, color: 'black' }}>Booking Cost</Text>
                  <Text style={{ fontSize: 12, fontWeight: '700', color: 'black' }}>₹ 315</Text>
                </View>

                <View style={{ width: 300, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10, }}>
                  <Text style={{ fontSize: 12, color: 'black' }}>Cancellation Cost</Text>
                  <Text style={{ fontSize: 12, fontWeight: '400', color: 'red' }}>$₹ 15</Text>
                </View>

                <View style={{ width: 300, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10, }}>
                  <Text style={{ fontSize: 12, color: 'grey' }}>Refund</Text>
                  <Text style={{ fontSize: 12, fontWeight: '400', color: 'green' }}>₹ 300</Text>
                </View>



                {/* ///////////////////////////////////////?MODAL BUTTON.///////////////////////////////////////// */}

                <View style={{ width: 300, flexDirection: 'row', marginTop: 30, justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center' }}>
                  <Button title='Reschedule' style={{ width: '50%', }}  />
                  <Button onPress={() => setcancelModal(false)} title='Cancel' style={{ width: '50%', marginLeft: 20, backgroundColor: 'red', }} />
                </View>

                <TouchableOpacity onPress={() => setcancelModal(false)} style={{ marginTop: 20, marginLeft: 15 }}>
                  <Image source={Images.backarw} style={{ height: 30, width: 30, resizeMode: 'contain' }} />
                </TouchableOpacity>




              </View>
            </View>
          </View>
        </View>


      </Modal>
    </SafeAreaView>
  );
};


export default MyBookingsDetails;
