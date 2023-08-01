import React, { useEffect, useState } from 'react';
import { Alert, Image, ImageBackground, SafeAreaView, StatusBar, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView, Dimensions, ViewBase, FlatList, Platform, ScrollView, BackHandler } from 'react-native';
import styles from './DashboardStyle';
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

const Dashboard = (props: any) => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [carPressed, setcarPressed] = useState(true);
  const [busPressed, setBusPressed] = useState(false);
  const [bikePressed, setbikePressed] = useState(false);
  const [truckPressed, setTruckPressed] = useState(false);

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


  useEffect(() => {
    const backAction = () => {
      Alert.alert('CWF', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const renderSection = ({ item, index }) => {

    return (
      <TouchableOpacity style={styles.renderView}>
        <View style={{ padding: 6 }}>
          <View style={styles.renderRow}>
            <Image source={item.image} style={styles.renderimage} />
            <Image source={Images.info} style={styles.infoicon} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 7, alignItems: 'center', justifyContent: 'space-between', top: item?.title?.length < 11 ? 9 : 3, }}>
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
      <HomeHeader
        carPressed={carPressed}
        bikePressed={bikePressed}
        truckPressed={truckPressed}
        busPressed={busPressed}
        onPressBike={() => bike_press()}
        onPressBus={() => bus_press()}
        onPressCar={() => car_press()}
        onPressTruck={() => truck_press()}
        showBar={true} />

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 66, }}>

        <View style={{ flex: 1, paddingHorizontal: 18 }}>
          <View style={{ flex: 1, padding: 10, }}>
            <BoldText style={{ fontSize: 20, }}>{'Vehicle'}</BoldText>
            <View style={{ marginTop: 20 }}>
              <SelectDropdown
                defaultButtonText='Select Brand & name'
                dropdownStyle={styles.dropdown}
                selectedRowTextStyle={styles.selectedtext}
                rowTextStyle={styles.rowtextstyle}
                buttonTextStyle={styles.btntext}
                searchInputStyle={styles.searchinput}
                rowStyle={styles.rowstyle}
                buttonStyle={styles.btnstyle}
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

            <BoldText style={styles.services}>{'Services'}</BoldText>
            <View>
              <FlatList data={sections}
                numColumns={3}
                renderItem={renderSection}
              />
            </View>

            <View style={styles.dateview}>

              <TouchableOpacity style={styles.pressdtae}>
                <Image source={Images.calander} style={styles.calandericon} />
                <Regulartext style={styles.datetxt}>Select Date</Regulartext>
              </TouchableOpacity>

              <TouchableOpacity style={styles.timeview}>
                <Image source={Images.time} style={styles.timeicon} />

                <Regulartext style={styles.timetext}>Select Time</Regulartext>
              </TouchableOpacity>
            </View>

            <View style={styles.searchbtnView}>
              <Button style={{ width: '100%', }}  onPress={()=>Actions.PastSearch()} title="Search" />
            </View>

          </View>
        </View>
      </ScrollView>



    </SafeAreaView>
    );
  };
Dashboard.navigationOptions = ({ navigation }) => {
  return {
    header: null,
    tabBarLabel: ' ',
    tabBarIcon: () => (
      <TabIcon
        ImgSize={{ height: 20, width: 20, marginTop: 25, resizeMode: 'contain' }}
        activeImg={Images.Dashboard}
        defaultImg={Images.Dashboard}
      />
    ),

    tabBarOptions: {
      style: {
        backgroundColor: '#fff',

        height: 62,


        // borderRadius:40,


      },
    },
  };
};

export default Dashboard;
