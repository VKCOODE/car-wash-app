//import liraries
import React, { Children, Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors, Images } from '../../theme';
import BoldText from './BoldText';

// create a component
const Settinglabel = (props: any) => {
    return (
        <View style={{ height: 55, width: '100%',   borderBottomWidth: 1, borderColor:props.title=='Become CWF Partnert'?'transparent': colors.inputBorder, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ alignItems: "center", flexDirection: 'row', height: '90%', width: '90%', }}>

                <View style={{  width: '15%', }}>
                    <Image source={props.image} style={{ height: 20, width: 17, marginLeft: 10,resizeMode:'contain' }} />
                </View>
               
                <View style={{ width: '60%', }}>
                    <BoldText style={{ marginLeft: 2, fontSize: 14, color:props.title=='My Account' ? colors.primarycolor:colors.primaryBlue, }}>{props.title}</BoldText>
                </View>

                <View style={{  width: '20%', alignItems: 'flex-end' }}>
                    <TouchableOpacity>
                        <Image source={Images.rightAROW} style={{ height: 15, width: 12, resizeMode:'contain' }} />
                    </TouchableOpacity>
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
export default Settinglabel
    ;
