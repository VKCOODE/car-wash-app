import React, { useEffect, useState } from 'react';
import { Alert, Image, ImageBackground, SafeAreaView, StatusBar, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView, Dimensions, ViewBase, FlatList, Platform, ScrollView,  } from 'react-native';
import styles from './MyBookingsStyle';
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

const MyBookings = (props: any) => {
  const [phoneNumber, setphoneNumber] = useState('');
;
  const [tabstatus, setTabSatus] = useState('Current');
  const [selectedItem, setselectedItem] = useState(props.selectedItem);

  const CurrentData = [
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

  const historyData = [
    {
      payStatus: '/Paid',
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
      rating: Images.ratingstar,
      workStatus:'Done'
    },
    {
      payStatus: '/Paid',
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
      rating: Images.ratingstar,
      workStatus:'Cancelled'

    },



  ]


  
  const renderCurrentDataSection = ({ item, index }) => {
    return (
      <View style={{ width:'100%',  }}>
        <TouchableOpacity 
        onPress={()=>Actions.ServiceCenter({item:item})}
        style={{
          flexDirection: 'row',
         width:'100%', borderColor:'#EBEBEB',  borderRadius:10,borderWidth:0.5,  elevation:1,backgroundColor:'#fff',shadowColor:colors.primaryBlue,  marginBottom:10 }}>
          <View style={{ height: 122,width:'35%',   }}>
            <Image source={Images.worker} style={{ height: 122, width: 109,resizeMode:'center' }} />
          </View>
          
          <View style={{ height: 122,width:'60%',   }}>
            <View style={{flexDirection:'row',justifyContent:'space-between',   height:23, marginTop:3}}>
            <BoldText style={{fontSize:16}}>{item.servicecenter}</BoldText>
            
            <View style={{flexDirection:'row', justifyContent: 'center', height:22,alignItems:'center', justifyContent:'center',  width:24, borderRadius:5, backgroundColor:'green'}}>
            <BoldText style={{fontSize:12, color:'#fff'}}>{'5'}</BoldText>
            <Image source={Images.ratingstart} style={{marginLeft:1,  height: 8, width: 8,resizeMode:'contain' }} />
           
            </View>

            </View>
            <Regulartext  style={{fontSize:12,}}>{item.location}</Regulartext>
            <Regulartext style={{fontSize:16, color:'black'}}>$ {item.price}<Regulartext> {item.shopStatus}</Regulartext></Regulartext>
            <Regulartext style={{fontSize:10, color:'black'}}>{item.servicedetail}</Regulartext>
            <Regulartext style={{fontSize:10, }}>{item.days} {item.time}</Regulartext>
            <Regulartext style={{fontSize:10, }}>{item.distance}</Regulartext>



          </View>

        </TouchableOpacity>
      </View>

    )

  }
  const renderHstoryDataSection = ({ item, index }) => {
    return (
      <View style={{ width:'100%',  }}>
        <TouchableOpacity 
        onPress={()=>Actions.MyBookingsDetails()}
        style={{
          flexDirection: 'row',
         width:'100%', borderColor:'#EBEBEB',  borderRadius:10,borderWidth:0.5,  elevation:1,backgroundColor:'#fff',shadowColor:colors.primaryBlue,  marginBottom:10 }}>
          <View style={{ height: 122,width:'35%',   }}>
            <Image source={Images.worker} style={{ height: 122, width: 109,resizeMode:'center' }} />
          </View>
          
          <View style={{ height: 122,width:'60%',   }}>
            <View style={{flexDirection:'row',justifyContent:'space-between',   height:23, marginTop:3}}>
            <BoldText style={{fontSize:16}}>{item.servicecenter}</BoldText>
            
            <View style={{flexDirection:'row', justifyContent: 'center', height:22,alignItems:'center',   width:24, borderRadius:5, backgroundColor:'green'}}>
            <BoldText style={{fontSize:12, color:'#fff'}}>{'5'}</BoldText>
            <Image source={Images.ratingstart} style={{marginLeft:1,  height: 8, width: 8,resizeMode:'contain' }} />
           
            </View>

            </View>
            <Regulartext  style={{fontSize:12,}}>{item.location}</Regulartext>
            <Regulartext style={{fontSize:16, color:'black'}}>$ {item.price}<Regulartext style={{fontSize:14, color:'black'}}> {item.payStatus}<Regulartext style={{fontSize:12, color:item.workStatus=='Done'?'blue': 'red',borderRadius: 10,alignItems: 'center',}}>  {item.workStatus}</Regulartext></Regulartext></Regulartext>
            <Regulartext style={{fontSize:10, color:'black'}}>{item.servicedetail}</Regulartext>
            <Regulartext style={{fontSize:10, }}>{item.days} {item.time}</Regulartext>
            <Regulartext style={{fontSize:10, }}>{item.distance}</Regulartext>



          </View>

        </TouchableOpacity>
      </View>

    )

  }
  const currentDataSection = () => {
    return (
      <View style={{ marginHorizontal: 20,height:'100%',  }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{  }}
          data={CurrentData}
          renderItem={renderCurrentDataSection}
        />
  </View>
    )
  }
  const historyDataSection = () => {
    return (
      <View style={{ marginHorizontal: 20,height:'100%',  }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{  }}
          data={historyData}
          renderItem={renderHstoryDataSection}
        />
  </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor={colors.primaryBlue} barStyle='light-content' />
      {/* ///////////////////////////GO BACK///////////////////////// */}
      <RoundHeader
      title='My Bookings'
      />
      <View style={{ height: 70, width: '100%', borderBottomWidth: 0.2, elevation: 2, shadowColor: '#DFDFDF' }}>
        {/* ////////////////////////TAB VIEW////////////////////////////////////////// */}
        <View
          style={{ height: 70, width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
          {tabData.map((item) => (
            <View
              style={{ height: '100%', width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity
                onPress={() => setTabSatus(item.title)}
                style={{
                  justifyContent: 'flex-end', width: '33.33%', alignItems: 'center', borderBottomWidth: 2,
                  borderColor: item.title == tabstatus ? colors.primarycolor : 'transparent'
                }}>
                <BoldText style={{ fontSize: 16, bottom: 15, color:item.title == tabstatus ? colors.primarycolor : 'grey' }}>{item.title}</BoldText>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        {/* /////////////////////////////////////////////////////////////////////////// */}


      </View>
      {/* *********************************TAB SECTIONS ************************************* */}

      {tabstatus == "Current" ? (
        ////////////////////////////////CURRENT SECTION//////////////////////////////////////
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 1 }}>
      <View style={{marginTop:20}}>
          {currentDataSection()}
        </View>
        </ScrollView>)
      

        : (
          ////////////////////////////////ORDER HISTORY SECTION//////////////////////////////////////

          <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 1 }}>
          <View style={{marginTop:20}}>
              {historyDataSection()}
            </View>
            </ScrollView>
        )
      }




    </SafeAreaView>
  );
};


export default MyBookings;
