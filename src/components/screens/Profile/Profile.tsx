import React, { useEffect, useState } from 'react';
import { Alert, Image, ImageBackground, SafeAreaView,Linking,  StatusBar, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView, Dimensions, ViewBase, FlatList, Platform, ScrollView, Modal, Pressable } from 'react-native';
import styles from './ProfileStyle';
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
import Settinglabel from '../../Common/Settinglabel';
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

const Profile = (props: any) => {
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
      <RoundHeader title="My Profile" />
      {/* ///////////////////////////GO BACK///////////////////////// */}

      <ScrollView style={{ flex: 1, width: '100%', }}>

        <View style={{ flex: 1, width: '100%', }}>

          {/* //////////////////////////////////////PRFILE EDIT///////////////////////////// */}
          <View style={{ width: '100%', alignItems: 'center', }}>

            <View style={{ marginTop: 25, height: 122, width: '100%', alignItems: 'center', justifyContent: 'center', borderEndColor: 15 }}>
              <ImageBackground source={Images.profileBG} style={{ alignSelf: 'center', height: 122, width: '100%', }} ></ImageBackground>
              <View style={{ height: 100, position: 'absolute', width: '90%', paddingHorizontal: 20 }}>
                <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity  style={{ height: 74, width: 74, borderRadius: 100, backgroundColor: 'red', alignItems: "center", justifyContent: 'center' }}>
                    <Image source={Images.profileimg} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                  </TouchableOpacity>

                  <View style={{ width: '65%', paddingLeft: 10, marginTop: 7 }}>
                    <BoldText style={{ fontSize: 16, color: 'black', fontWeight: '700' }}>{'John Deo'}</BoldText>
                    <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                      <Image source={Images.mail} style={{ marginRight: 5, tintColor: 'black', height: 10, width: 10, resizeMode: 'contain' }} />
                      <BoldText style={{ fontSize: 10, color: 'black', }}>johndoe@gmail.com</BoldText>
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 5 }}>
                      <Image source={Images.calling} style={{ marginRight: 5, tintColor: 'black', height: 10, width: 10, resizeMode: 'contain' }} />
                      <BoldText style={{ fontSize: 10, color: 'black', }}>9646207080</BoldText>
                    </View>
                  </View>
                  <TouchableOpacity style={{ height: 35, width: 35, backgroundColor: 'transparent', alignItems: "center", justifyContent: 'center' }}>
                    <Image source={Images.edit} style={{ tintColor: 'black', height: 20, width: 20, resizeMode: 'contain' }} />
                  </TouchableOpacity>
                </View>


              </View>
            </View>

          </View>

          {/* /////////////////////////////////////???SETTING LABELS/////////////////////////////////////// */}
                  <Settinglabel image={Images.myAcount} title='My Account' />
                  <Settinglabel image={Images.bookings} title='Bookings'  />
                  <Settinglabel image={Images.added}title='Vehicles Added'  />
                  <Settinglabel image={Images.saved} title='Saved Addresses'  />
                  <Settinglabel image={Images.history} title='Booking History'  />
                  <Settinglabel image={Images.partner} title='Become CWF Partner'  />
          {/* ////////////////////////////////SERVIE DETAIL///////////////////////////////////////////////// */}

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
                <Image source={Images.Ellipse} style={{ height: 73, width: 73, resizeMode: 'contain' }} />
                <Image source={Images.Group} style={{ height: 73, width: 73, position: 'absolute', resizeMode: 'contain', top: 20, right: 40 }} />

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
                  <Button title='Reschedule' style={{ width: '50%', }} />
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


export default Profile;
