//import liraries
import React, { Children, Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../../theme';

// create a component
const Inputlablel = (props: any) => {
    return (
        <View style={{ height: 63, borderRadius: 5,borderWidth:1, borderColor:colors.gerytext,  justifyContent: 'center' }}>
            <TextInput
            placeholderTextColor={colors.gerytext}
            style={{ paddingLeft:15, fontSize:16,color:'black'}}
            maxLength={props.maxlenght ? props.maxlenght:10}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder} />

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
export default Inputlablel
    ;
