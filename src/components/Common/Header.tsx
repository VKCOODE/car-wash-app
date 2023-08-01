//import liraries
import React, { Children, Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { colors,Images } from '../../theme';

// create a component
const Header= (props:any) => {
    return (
     <View style={{flexDirection:'row', height:50, }}>
        <View style={{width:'33.3%', alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={props.onPress}>
          <Image source={Images.backarw} style={{width:24, height:17,marginRight:30 }}/>
          </TouchableOpacity>
        </View>
        <View style={{width:'33.3%',}}></View>
        <View style={{width:'33.3%', alignItems:'center', justifyContent:'center'}}>
            <Image source={Images.star} style={{width:40, height:40, marginLeft:30 }}/>
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
export default Header
;
