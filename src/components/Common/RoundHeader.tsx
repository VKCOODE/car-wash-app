//import liraries
import React, { Children, Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors,Images } from '../../theme';
import BoldText from './BoldText';

// create a component
const RoundHeader= (props:any) => {
    return (
        <View style={{height:105, width:'100%', backgroundColor:colors.primaryBlue, borderBottomLeftRadius:50, borderBottomRightRadius:50}}>

     <View style={{flexDirection:'row', height:50,marginTop:10 }}>
        <View style={{width:'33.3%', alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={()=>Actions.pop()}>
          <Image source={Images.backarw} style={{width:24, height:17,marginRight:30, tintColor:'#fff' }}/>
          </TouchableOpacity>
        </View>
        <View style={{width:'40.3%', alignItems:'center', justifyContent:'center'}}>
        <BoldText style={{ fontSize: 20,color:'#fff' }}>{props.title}</BoldText>
        </View>
        <View style={{width:'30.3%', alignItems:'center', justifyContent:'center'}}>
            {/* <Image source={Images.star} style={{width:40, height:40, marginLeft:30 }}/> */}
        </View>
     </View>
     </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default RoundHeader
;
