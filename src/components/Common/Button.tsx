//import liraries
import React, { Children, Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { colors } from '../../theme';

// create a component
const Button= (props:any) => {
    return (
     <TouchableOpacity 
     onPress={props.onPress}
     style={[{height:63, width:295,borderRadius:5,alignItems:'center', justifyContent:'center',   backgroundColor:colors.Appbutton}, props.style, ]}>
       <Text style={{fontFamily:'roboto',   fontSize:16, color:"#fff"}}>{props.title}</Text> 
     </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Button
;
