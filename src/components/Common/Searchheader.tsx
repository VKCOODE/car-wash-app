//import liraries
import React, { Children, Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors, Images } from '../../theme';
import Regulartext from './Regulartext';

// create a component
const Searchheader = (props: any) => {
    const [search, setsearch] = useState('Chnadigarh, India')
    return (
        <View style={{ alignItems: 'center', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, height: 152, backgroundColor: colors.primaryBlue}}>

        <View style={{flexDirection:'row', marginTop:15, justifyContent:'center', alignItems:'center' }}>
            {/* ////////////////////////////////SEARCH BAr///////////////////////////////// */}
            <TouchableOpacity onPress={()=>Actions.pop()}>
            <Image source={Images.backarw} style={{tintColor:'#fff',resizeMode:"contain",  height:20, width:24,right:12 }} />
            </TouchableOpacity>
            
            <View style={{ alignItems: 'center', flexDirection: 'row',  height: 63, backgroundColor: '#fff', maxHeight: 60, width: '80%', borderRadius: 50 }}>
               
                <View style={{ width: '15%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={Images.location} style={{ height: 17, width: 17, resizeMode: 'contain' }} />
                </View>
                <TextInput value={search}
                    onChangeText={(text: any) => setsearch(text)}
                    placeholder='Find Place'
                    style={{ width: '72%', color: 'black', fontSize: 16, fontFamily: 'roboto' }}
                />
            </View>
            {/* ///////////////////////////////ICON VIEW//////////////////////////////////// */}

            {props.showBar == true ?
                <View style={{ height: 44, width: '80%', position: 'absolute',}}>

                    <View style={{marginTop:95,  height: 60, width: '80%', alignItems: 'center', alignSelf: 'center', elevation: 5, justifyContent: 'space-around', backgroundColor: '#fff', flexDirection: 'row', position: 'absolute', }}>



                        <TouchableOpacity onPress={props.onPressBike} style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity style={{  flexDirection: "row" }} onPress={props.onPressCalander}>
                                <Image source={Images.calander} style={{ height: 20, width: 20, resizeMode: 'contain',marginRight:10 }} />
                                <Regulartext style={styles.timetext} >Today</Regulartext>
                            </TouchableOpacity>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={props.onPressTruck} style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <TouchableOpacity style={{  flexDirection: "row" }} onPress={props.onPresstime}>
                                <Image source={Images.time} style={{ height: 20, width: 20, resizeMode: 'contain', marginRight:10 }} />
                                <Regulartext style={styles.timetext}>11:00 AM</Regulartext>
                            </TouchableOpacity>


                        </TouchableOpacity>


                    </View>




                </View>
                :
                <></>
            }

        </View>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    timetext:{ fontSize: 14, marginRight: 10,fontWeight:'500', color: '#5391C6' }, 
});

//make this component available to the app
export default Searchheader;
