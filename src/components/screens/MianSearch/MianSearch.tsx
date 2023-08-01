import React, { useState } from 'react';
import { Alert, Image, ImageBackground, SafeAreaView, StatusBar, TextInput, Text, View, TouchableOpacity, KeyboardAvoidingView, Dimensions, ViewBase, FlatList, Platform } from 'react-native';
import styles from './MianSearchStyle';
import Button from '../../Common/Button';
import { colors, Images } from '../../../theme';
import BoldText from '../../Common/BoldText';
import Regulartext from '../../Common/Regulartext';
import { Actions } from 'react-native-router-flux';
import Inputlablel from '../../Common/Inputlablel';
import HomeHeader from '../../Common/HomeHeader';
import SelectDropdown from 'react-native-select-dropdown'
import { TabIcon } from '../../Common/TabIcon';
const countries = ["Suzuki, Alto", "Suzuki, Alto-K10", "Suzuki, waganor", "Suzuki, Alto-LXI","Suzuki, celerio", "Suzuki, Alto", "Suzuki, Alto-K10", "Suzuki, waganor", "Suzuki, Alto-LXI","Suzuki, celerio",]

const sections=[
  {title:'Washing', image:Images.truck},
  {title:'Polish', image:Images.truck},
  {title:'Wax', image:Images.truck},
  {title:'Vaccume Cleaning', image:Images.truck},
  {title:'Dry Clean', image:Images.truck},
  {title:'Interior cleaning', image:Images.truck},
]

const MianSearch = ( props:any) => {
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

  const renderSection=({item, index})=>{
    
    return(
      <View style={{backgroundColor:colors.iconBg, width:'30%',margin:5, borderRadius:10, borderWidth:0.4, opacity:3,  height:100}}>
       <View style={{padding:6}}>
      
       <View style={{flexDirection:'row', marginTop:2, justifyContent:'space-around'}}>
       <Image source={item.image} style={{height:50, width:50, resizeMode:'contain'}}/>
       <Image source={Images.info} style={{height:10, width:10, resizeMode:'contain'}}/>
       
        </View>

        <View style={{flexDirection:'row', marginTop:7, alignItems:'center', justifyContent:'space-around'}}>
          <Regulartext style={{fontSize:12,color:'black'}}>{item.title}</Regulartext>
       <Image source={index=="0"? Images.selectedSection:Images.unselected} style={{ height:15, width:15, resizeMode:'contain'}}/>
          
        </View>
       </View>
      </View>
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
     
      <View style={{ flex: 1, marginTop: 66, paddingHorizontal: 27 }}>
          <BoldText style={{ fontSize: 20, }}>{'SEARCH'}</BoldText>
  
      </View>



    </SafeAreaView>




  );
};
MianSearch.navigationOptions = ({ navigation }) => {
  // console.log(Utils.testVariable);
  return {
    header: null,
    tabBarLabel: ' ',
    tabBarIcon: () => (
      <TabIcon
      ImgSize={{height:20, width :20,marginTop: 25,resizeMode: 'contain' }}


        activeImg={Images.searchMain}
        defaultImg={Images.searchMain}
      />
    ),

    tabBarOptions: {
      style: {
        backgroundColor: '#fff',

        height:62,
        
        // borderRadius:40,


      },
    },
  };
};

export default MianSearch;
