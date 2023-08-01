import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, Platform, Dimensions} from 'react-native';
import {Fonts, colors, Images} from '../../theme';

const TabIcon = (props:any) => {

  return (
    <View style={[styles.viewMainContainer, props.style,
  
    ]}>
    {Platform.OS=='ios' ?
     <View style={[styles.iostyle,props.styleIOS,{ marginTop: props.focused ?-35:0}]}>
      <Image
        source={props.focused ? props.activeImg : props.defaultImg}
        style={props.ImgSize}
      />
      {/* <Text
        style={[
          styles.titleText
       ,{
        marginTop: props.focused ?-37:0 ,
       color:props.focused ?'red':'grey'} ]}>
        {props.title}
      </Text> */}
      </View>
      :
      <View style={{  alignItems: 'center',
      marginTop: props.focused ?-37:0 , 
      }}>
      <Image
        source={props.focused ? props.activeImg : props.defaultImg}
        style={props.ImgSize}
      />
      <Text
        style={[
          styles.titleText
       ,{
        marginTop: props.focused ?-37:0 , 
        color:props.focused ?'yellow':'grey'} ]}>
        {props.title}
      </Text>
      </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  viewMainContainer: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
  

   
  },
  titleText: {
    textAlign: 'center',
    fontSize:Dimensions.get('screen').width>375? 10:9,
    fontFamily: Fonts.medium,
    color:'grey',
  },
  iostyle:{  alignItems: 'center', }
});

export {TabIcon};
