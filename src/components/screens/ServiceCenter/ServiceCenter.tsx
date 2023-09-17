import React, { useEffect, useState } from 'react';
import { Alert, Image, ImageBackground, SafeAreaView, StatusBar, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView, Dimensions, ViewBase, FlatList, Platform, ScrollView,  } from 'react-native';
import styles from './ServiceCenterStyle';
import Button from '../../Common/Button';
import { colors, Images } from '../../../theme';
import BoldText from '../../Common/BoldText';
import Regulartext from '../../Common/Regulartext';
import { Actions } from 'react-native-router-flux';
import Inputlablel from '../../Common/Inputlablel';
import HomeHeader from '../../Common/HomeHeader';
import SelectDropdown from 'react-native-select-dropdown'
import { TabIcon } from '../../Common/TabIcon';
const countries = ["Suzuki, Alto", "Suzuki, Alto-K10", "Suzuki, waganor", "Suzuki, Alto-LXI", "Suzuki, celerio", "Suzuki, Alto", "Suzuki, Alto-K10", "Suzuki, waganor", "Suzuki, Alto-LXI", "Suzuki, celerio",]

const sections = [
  { title: 'Washing', image: Images.wash },
  { title: 'Polish', image: Images.polish },
  { title: 'Wax', image: Images.wax },
  { title: 'Vaccume Cleaning', image: Images.vacume },
  { title: 'Dry Clean', image: Images.dryclean },
  { title: 'Interior cleaning', image: Images.interior },
]
const tabData = [{ title: "Services" }, { title: "About" }, { title: 'Review' }];

const ServiceCenter = (props: any) => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [carPressed, setcarPressed] = useState(true);
  const [busPressed, setBusPressed] = useState(false);
  const [bikePressed, setbikePressed] = useState(false);
  const [truckPressed, setTruckPressed] = useState(false);
  const [tabstatus, setTabSatus] = useState('Services');
  const [selectedCenter, setselectedCenter] = useState(props.item);



  const bike_press = () => {
    setbikePressed(true)
    setTruckPressed(false)
    setcarPressed(false)
    setBusPressed(false)

  }
  const car_press = () => {
    setbikePressed(false)
    setTruckPressed(false)
    setcarPressed(true)
    setBusPressed(false)

  }
  const truck_press = () => {
    setbikePressed(false)
    setTruckPressed(true)
    setcarPressed(false)
    setBusPressed(false)

  }
  const bus_press = () => {
    setbikePressed(false)
    setTruckPressed(false)
    setcarPressed(false)
    setBusPressed(true)

  }





  const renderSection = ({ item, index }) => {

    return (
      <TouchableOpacity style={styles.renderView}>
        <View style={{ padding: 8 }}>
          <View >
            <Text style={{ fontSize: 16, fontWeight: '700', color: index == "0" ? colors.primarycolor : 'grey' }}>{'$ 500'}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', justifyContent: 'space-between', top: item?.title?.length < 11 ? 3 : -6, }}>
            <Regulartext style={styles.itemtxt}>{item.title}</Regulartext>
            <Image source={index == "0" ? Images.selectedSection : Images.unselected} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor={colors.primaryBlue} />
      <Image source={Images.worker} style={{ height: 240, width: '102%', alignSelf: 'center' }} />
      {/* ///////////////////////////GO BACK///////////////////////// */}
      <TouchableOpacity
        onPress={() => Actions.pop()}
        style={{ position: 'absolute', }}>
        <Image style={{ height: 30, width: 30, tintColor: '#fff', margin: 12, resizeMode: 'contain', }} source={Images.backarw} />
      </TouchableOpacity>
      {/* /////////////////////////////////////SERVICE CENTER NAME AND DIRECTION////////////////////////////////// */}
      <View style={{ height: 100, width: '100%', borderBottomWidth: 0.2, elevation: 2, shadowColor: '#DFDFDF' }}>

        <View style={{ padding: 12, marginLeft: 12, justifyContent: 'space-around', height: '65%', width: '100%', flexDirection: 'row' }}>
          <View style={{ width: '50%' }}>
            <BoldText style={{ fontSize: 16, fontweight: '600' }}>{selectedCenter.servicecenter}</BoldText>
            <BoldText style={{ fontSize: 13, fontweight: '600', color: '#979797', marginTop: 4, }}>{selectedCenter.location}  {selectedCenter.shopStatus}</BoldText>
          </View>

          <TouchableOpacity style={{ width: '50%', }}>
            <View style={{ marginTop: 3, alignItems: 'center', justifyContent: 'center', height: 34, marginLeft: 55, width: 106, backgroundColor: '#179B5C', borderRadius: 5, }}>
              <BoldText style={{ fontSize: 12, color: '#fff', fontweight: '600' }}>{'Get Direction'}</BoldText>
            </View>
          </TouchableOpacity>

          <View>

          </View>

        </View>

        {/* ////////////////////////TAB VIEW////////////////////////////////////////// */}
        <View
          style={{ height: '35%', width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
          {tabData.map((item) => (
            <View
              style={{ height: '100%', width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity
                onPress={() => setTabSatus(item.title)}
                style={{
                  justifyContent: 'flex-end', width: '33.33%', alignItems: 'center', borderBottomWidth: 2,
                  borderColor: item.title == tabstatus ? colors.primarycolor : 'transparent'
                }}>
                <BoldText style={{ fontSize: 16, bottom: 5 }}>{item.title}</BoldText>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        {/* /////////////////////////////////////////////////////////////////////////// */}


      </View>
      {/* *********************************TAB SECTIONS ************************************* */}

      {tabstatus == "Services" ? (
        ////////////////////////////////SERVICE SECTION//////////////////////////////////////
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 1 }}>
          <View style={{ height: 75, width: '100%', alignItems: "center", marginVertical: 10 }}>
            <HomeHeader
              class={'ServiceCenter'}
              carPressed={carPressed}
              bikePressed={bikePressed}
              truckPressed={truckPressed}
              busPressed={busPressed}
              onPressBike={() => bike_press()}
              onPressBus={() => bus_press()}
              onPressCar={() => car_press()}
              onPressTruck={() => truck_press()}
              showBar={true} />

          </View>

          <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <View style={{ flex: 1, padding: 10, }}>
              {/* ///////////////////////////Brand & Name//////////////////////////////////// */}
              <BoldText style={{ fontSize: 16, }}>{'Brand & Name'}</BoldText>
              <View style={{ marginTop: 15, height: 63, borderWidth: 1, borderRadius: 5, borderColor: colors.inputBorder, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: '10%' }}>
                  <Image source={Images.car} style={{ height: 25, width: 25, marginLeft: 3, resizeMode: 'contain' }} />
                </View>

                <View style={{ width: '80%' }}>

                  <SelectDropdown
                    defaultButtonText='Select Brand & name'
                    dropdownStyle={styles.dropdown}
                    selectedRowTextStyle={styles.selectedtext}
                    rowTextStyle={styles.rowtextstyle}
                    buttonTextStyle={styles.btntext}
                    searchInputStyle={styles.searchinput}
                    rowStyle={{ backgroundColor: '#fff' }}
                    buttonStyle={{ backgroundColor: '#fff' }}
                    searchPlaceHolder='Search...'
                    searchPlaceHolderColor='grey'
                    searchInputTxtStyle={{ color: 'black' }}
                    search
                    data={countries}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                      return item
                    }}

                  />
                </View>

                <View style={{ width: '10%' }}>
                  <Image source={Images.edit} style={{ height: 12, width: 12, resizeMode: 'contain' }} />

                </View>
              </View>

              {/* //////////////////////BOOKING FOR///////////////////////////////////// */}
              <View style={{ marginTop: 15 }}>
                <BoldText style={{ fontSize: 16, }}>{'Booking for'}</BoldText>
                <View style={{ marginTop: 15, height: 63, borderWidth: 1, borderRadius: 5, borderColor: colors.inputBorder, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ width: '10%' }}>
                    <Image source={Images.car} style={{ height: 25, width: 25, marginLeft: 3, resizeMode: 'contain' }} />
                  </View>

                  <View style={{ width: '80%' }}>

                    <SelectDropdown
                      defaultButtonText='Select Brand & name'
                      dropdownStyle={styles.dropdown}
                      selectedRowTextStyle={styles.selectedtext}
                      rowTextStyle={styles.rowtextstyle}
                      buttonTextStyle={styles.btntext}
                      searchInputStyle={styles.searchinput}
                      rowStyle={{ backgroundColor: '#fff' }}
                      buttonStyle={{ backgroundColor: '#fff' }}
                      searchPlaceHolder='Search...'
                      searchPlaceHolderColor='grey'
                      searchInputTxtStyle={{ color: 'black' }}
                      search
                      data={countries}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                      }}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                      }}
                      rowTextForSelection={(item, index) => {
                        return item
                      }}

                    />
                  </View>

                  <View style={{ width: '10%' }}>
                    <Image source={Images.edit} style={{ height: 12, width: 12, resizeMode: 'contain' }} />

                  </View>
                </View>
              </View>
              {/* /////////////////////DATE TIME////////////////////////// */}

              <View style={styles.dateview}>

                <TouchableOpacity style={styles.pressdtae}>
                  <Image source={Images.calander} style={styles.calandericon} />
                  <Regulartext style={styles.datetxt}>Today</Regulartext>
                </TouchableOpacity>

                <TouchableOpacity style={styles.timeview}>
                  <Image source={Images.time} style={styles.timeicon} />

                  <Regulartext style={styles.timetext}>11:00 AM</Regulartext>
                </TouchableOpacity>
              </View>

              {/* /////////////////////////PRICE COST////////////////////////////// */}
              <View style={{ marginTop: 20 }}>
                <FlatList data={sections}
                  numColumns={3}
                  renderItem={renderSection}
                />
              </View>

              <View style={{ flexDirection: 'row', elevation: 1, marginVertical: 20, width: '100%', height: 63 }}>
                <View style={{ width: '60%', backgroundColor: '#F1F1F1' }}>
                 
                  <View style={{marginLeft:20, marginVertical:10}}>
                <Text style={{ fontSize: 16,fontWeight:'700', color:'#092E4B' }}>{'$'}<Text style={{ fontSize: 16,fontWeight:'700', color:colors.primarycolor }}>{' 300'}</Text></Text>
                    <Text style={{ fontSize: 12, marginTop:5, color:'black' }}>{'Total'}<Text style={{color:'grey'}}>{' 3  services'}</Text></Text>
                  </View>

                </View>
                <Button style={{ width: '40%', }} onPress={() => Actions.MyBookings({selectedItem:selectedCenter})} title="Continue ->" />
              </View>

            </View>
          </View>
        </ScrollView>)
        ////////////////////////////////ABOUT SECTION//////////////////////////////////////
        : tabstatus == 'About' ? (
          <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <BoldText style={{ fontSize: 16, fontweight: '600' }}>ABOUT</BoldText>
          </View>
        ) : (
          ////////////////////////////////REVIEW SECTION//////////////////////////////////////

          <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <BoldText style={{ fontSize: 16, fontweight: '600' }}>REVIEW</BoldText>
          </View>
        )
      }




    </SafeAreaView>
  );
};


export default ServiceCenter;
