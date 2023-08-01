import React, { useEffect } from 'react';
import {Dimensions, Image, SafeAreaView, Text, StatusBar} from 'react-native';
import styles from './SplashStyle';
import Images from '../../../theme/Images'
import { Actions } from 'react-native-router-flux';
import Wrap from '../../Common/Wrap';



const Splash = (props:any) => {

useEffect(()=>{
  setTimeout(()=>{
    Actions.Welcome()
  },4000)
  
},[])

  return (
    
     <Wrap>
      <Image
      source={Images.Splash}
      style={{height:'100%', width:Dimensions.get('screen').width}}/>
     </Wrap>
    

  );
};

export default Splash;
