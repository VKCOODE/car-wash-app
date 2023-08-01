//import liraries
import React, { Children, Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { colors } from '../../theme';

// create a component
const BoldText= (props:any) => {
    return (
       <Text style={[{fontFamily:'roboto',   fontSize:48, color:"black"}, props.style]}>{props.children}</Text> 
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default BoldText
;
