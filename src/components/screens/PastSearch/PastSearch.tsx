import React, { useState } from 'react';
import { Alert, Image, ImageBackground, FlatList, SafeAreaView, StatusBar, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import styles from './PastSearchlStyle';
import Button from '../../Common/Button';
import { colors, Images } from '../../../theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import BoldText from '../../Common/BoldText';
import Regulartext from '../../Common/Regulartext';
import { Actions } from 'react-native-router-flux';
import Header from '../../Common/Header';
import Inputlablel from '../../Common/Inputlablel';
import Searchheader from '../../Common/Searchheader';




const PastSearch = (props: any) => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const goTonext = () => {
    Actions.Dashboard()
  }

  const sections = [
    { title: 'Sort', image: Images.wash },
    { title: 'Vehicle Type', image: Images.polish },
    { title: 'Brand & Name', image: Images.wax },
    { title: 'Services', image: Images.vacume },
    { title: 'Dry Clean', image: Images.dryclean },
    { title: 'Interior cleaning', image: Images.interior },
  ]








  const searchSection = () => {
    return (
      <View style={{ height: 50, marginTop: 32, justifyContent: 'center' }}>
        <View style={{}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}
            horizontal={true}
            data={sections}
            renderItem={renderSection}
          />
        </View>
      </View>
    )
  }
  const renderSection = ({ item, index }) => {
    return (
      <View style={{}}>
        <TouchableOpacity style={{ marginRight: 10, flexDirection: 'row', justifyContent: 'center', height: 30, borderWidth: 0.4, elevation: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
          {index == 0 ? <Image source={Images.sort} style={{ height: 10, left: 6, width: 12, resizeMode: 'contain' }} /> : <></>}
          <Regulartext style={{ fontSize: 12, paddingHorizontal: 10, }}>{item.title}</Regulartext>
        </TouchableOpacity>
      </View>

    )

  }


  const searchDataSection = () => {
    return (
      <View style={{ marginHorizontal: 20,height:'78%',  }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{  }}
          data={SearchData}
          renderItem={renderSearchDataSection}
        />
  </View>
    )
  }

  const SearchData = [
    {
      shopStatus: 'OPEN',
      shopStatusIcon: Images.car,
      servicedetail: 'Washing, Dry Clean, Wax, Polish, VacuumInterior Cleaning',
      title: 'Sort', image: Images.wash,
      servicecenter: "A1 Wash Service",
      location: 'Chandigarh, India',
      price: '50',
      days: 'Mon - Sun ',
      time: '8:00 AM - 9:00 PM',
      distance: '5 k.m.',
      shopImage: Images.worker,
      rating: Images.ratingstar
    },
    {
      shopStatus: 'OPEN',
      shopStatusIcon: Images.car,
      servicedetail: 'Washing, Dry Clean, Wax, Polish, VacuumInterior Cleaning',
      title: 'Sort', image: Images.wash,
      servicecenter: "A1 Wash Service",
      location: 'Chandigarh, India',
      price: '50',
      days: 'Mon - Sun ',
      time: '8:00 AM - 9:00 PM',
      distance: '5 k.m.',
      shopImage: Images.worker,
      rating: Images.ratingstar
    },
    {
      shopStatus: 'OPEN',
      shopStatusIcon: Images.car,
      servicedetail: 'Washing, Dry Clean, Wax, Polish, VacuumInterior Cleaning',
      title: 'Sort', image: Images.wash,
      servicecenter: "A1 Wash Service",
      location: 'Chandigarh, India',
      price: '50',
      days: 'Mon - Sun ',
      time: '8:00 AM - 9:00 PM',
      distance: '5 k.m.',
      shopImage: Images.worker,
      rating: Images.ratingstar
    },
    {
      shopStatus: 'OPEN',
      shopStatusIcon: Images.car,
      servicedetail: 'Washing, Dry Clean, Wax, Polish, VacuumInterior Cleaning',
      title: 'Sort', image: Images.wash,
      servicecenter: "A1 Wash Service",
      location: 'Chandigarh, India',
      price: '50',
      days: 'Mon - Sun ',
      time: '8:00 AM - 9:00 PM',
      distance: '5 k.m.',
      shopImage: Images.worker,
      rating: Images.ratingstar
    },
    {
      shopStatus: 'OPEN',
      shopStatusIcon: Images.car,
      servicedetail: 'Washing, Dry Clean, Wax, Polish, VacuumInterior Cleaning',
      title: 'Sort', image: Images.wash,
      servicecenter: "A1 Wash Service",
      location: 'Chandigarh, India',
      price: '50',
      days: 'Mon - Sun ',
      time: '8:00 AM - 9:00 PM',
      distance: '5 k.m.',
      shopImage: Images.worker,
      rating: Images.ratingstar
    },
    {
      shopStatus: 'OPEN',
      shopStatusIcon: Images.car,
      servicedetail: 'Washing, Dry Clean, Wax, Polish, VacuumInterior Cleaning',
      title: 'Sort', image: Images.wash,
      servicecenter: "A1 Wash Service",
      location: 'Chandigarh, India',
      price: '50',
      days: 'Mon - Sun ',
      time: '8:00 AM - 9:00 PM',
      distance: '5 k.m.',
      shopImage: Images.worker,
      rating: Images.ratingstar
    },
    {
      shopStatus: 'OPEN',
      shopStatusIcon: Images.car,
      servicedetail: 'Washing, Dry Clean, Wax, Polish, VacuumInterior Cleaning',
      title: 'Sort', image: Images.wash,
      servicecenter: "A1 Wash Service",
      location: 'Chandigarh, India',
      price: '50',
      days: 'Mon - Sun ',
      time: '8:00 AM - 9:00 PM',
      distance: '5 k.m.',
      shopImage: Images.worker,
      rating: Images.ratingstar
    },
    {
      shopStatus: 'OPEN',
      shopStatusIcon: Images.car,
      servicedetail: 'Washing, Dry Clean, Wax, Polish, VacuumInterior Cleaning',
      title: 'Sort', image: Images.wash,
      servicecenter: "A1 Wash Service",
      location: 'Chandigarh, India',
      price: '50',
      days: 'Mon - Sun ',
      time: '8:00 AM - 9:00 PM',
      distance: '5 k.m.',
      shopImage: Images.worker,
      rating: Images.ratingstar
    },
    {
      shopStatus: 'OPEN',
      shopStatusIcon: Images.car,
      servicedetail: 'Washing, Dry Clean, Wax, Polish, VacuumInterior Cleaning',
      title: 'Sort', image: Images.wash,
      servicecenter: "A1 Wash Service",
      location: 'Chandigarh, India',
      price: '50',
      days: 'Mon - Sun ',
      time: '8:00 AM - 9:00 PM',
      distance: '5 k.m.',
      shopImage: Images.worker,
      rating: Images.ratingstar
    },
    {
      shopStatus: 'OPEN',
      shopStatusIcon: Images.car,
      servicedetail: 'Washing, Dry Clean, Wax, Polish, VacuumInterior Cleaning',
      title: 'Sort', image: Images.wash,
      servicecenter: "A1 Wash Service",
      location: 'Chandigarh, India',
      price: '50',
      days: 'Mon - Sun ',
      time: '8:00 AM - 9:00 PM',
      distance: '5 k.m.',
      shopImage: Images.worker,
      rating: Images.ratingstar
    },
    {
      shopStatus: 'OPEN',
      shopStatusIcon: Images.car,
      servicedetail: 'Washing, Dry Clean, Wax, Polish, VacuumInterior Cleaning',
      title: 'Sort', image: Images.wash,
      servicecenter: "A1 Wash Service",
      location: 'Chandigarh, India',
      price: '50',
      days: 'Mon - Sun ',
      time: '8:00 AM - 9:00 PM',
      distance: '5 k.m.',
      shopImage: Images.worker,
      rating: Images.ratingstar
    },



  ]

  const renderSearchDataSection = ({ item, index }) => {
    return (
      <View style={{ width:'100%',  }}>
        <TouchableOpacity style={{
          flexDirection: 'row',
         width:'100%', borderColor:'#EBEBEB',  borderRadius:10,borderWidth:0.5,  elevation:1,backgroundColor:'#fff',shadowColor:colors.primaryBlue,  marginBottom:10 }}>
          <View style={{ height: 122,width:'35%',   }}>
            <Image source={Images.worker} style={{ height: 122, width: 109,resizeMode:'center' }} />
          </View>
          
          <View style={{ height: 122,width:'60%',   }}>
            <BoldText style={{fontSize:16}}>{item.servicecenter}</BoldText>
            <Regulartext>{item.location}</Regulartext>
            <Regulartext style={{fontSize:16, color:'black'}}>$ {item.price}<Regulartext> {item.shopStatus}</Regulartext></Regulartext>
            <Regulartext style={{fontSize:10, color:'black'}}>{item.servicedetail}</Regulartext>
            <Regulartext style={{fontSize:10, }}>{item.days} {item.time}</Regulartext>
            <Regulartext style={{fontSize:10, }}>{item.distance}</Regulartext>



          </View>

        </TouchableOpacity>
      </View>

    )

  }

  return (
    <SafeAreaView style={styles.mainContainor}>
      <StatusBar backgroundColor={colors.primaryBlue} barStyle='light-content' />
      {/* <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}> */}
        <View style={{flexGrow:1}}>

        <Searchheader
          showBar={true} />
        <View style={{marginTop:10}}>
          {searchSection()}
        </View>
        <View style={{marginTop:10}}>
          {searchDataSection()}
        </View>
        </View>

      {/* </KeyboardAwareScrollView> */}

    </SafeAreaView>
  );
};

export default PastSearch;
