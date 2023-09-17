//import liraries
import React, { Children, Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { colors, Images } from '../../theme';
import Regulartext from './Regulartext';

// create a component
const HomeHeader = (props: any) => {
    const [search, setsearch] = useState('Chnadigarh, India')
    return (
      <>
        {props.class=='ServiceCenter'?
        <View style={{ height: 60, width: '80%', position: 'absolute',  }}>

        <View style={{ height: 60, width: '100%',alignItems:'center', alignSelf:'center',  justifyContent:'space-between',  flexDirection: 'row',  position: 'absolute', }}>
          
        <TouchableOpacity onPress={props.onPressCar} style={{elevation:5,  height: 66, width: 69,alignItems:'center', justifyContent:'center', 
         backgroundColor:props.carPressed==true ?colors.primarycolor:colors.iconBg, paddingHorizontal:10,borderWidth:0.2,borderColor:'#d3d3d3',  borderRadius:100 }}>
          <TouchableOpacity onPress={props.onPressCar}>
            <Image source={Images.car} style={{ tintColor: props.carPressed==true ?'#fff':colors.primarycolor, height: 35, width: 30, resizeMode: 'contain' }} />
          </TouchableOpacity>
          {/* <Regulartext style={{color:props.carPressed==true ?colors.primarycolor:'grey',  position:'absolute',textAlign:'center', fontSize:12,bottom:-25}}>CAR</Regulartext> */}

            </TouchableOpacity>

            <TouchableOpacity onPress={props.onPressBike}style={{elevation:5, alignItems:'center', justifyContent:'center', height: 66, width: 69, 
            backgroundColor:props.bikePressed==true ?colors.primarycolor:colors.iconBg,paddingHorizontal:10, borderRadius:100,borderWidth:0.2,borderColor:'#d3d3d3' }}>
            <TouchableOpacity onPress={props.onPressBike}>
            <Image source={Images.bike} style={{tintColor:props.bikePressed==true ?'#fff':colors.primarycolor,  height: 35, width: 32, resizeMode: 'contain',  }} />
          </TouchableOpacity>
          {/* <Regulartext style={{color:props.bikePressed==true ?colors.primarycolor:'grey', position:'absolute',bottom:-25,textAlign:'center',  fontSize:12, width:80}}>MOTORCYCLE</Regulartext> */}

            </TouchableOpacity>

            <TouchableOpacity onPress={props.onPressTruck}style={{elevation:5, alignItems:'center', justifyContent:'center',
              height: 66, width: 69,backgroundColor:props.truckPressed==true ?colors.primarycolor:colors.iconBg, paddingHorizontal:10, borderRadius:100, borderWidth:0.2,borderColor:'#d3d3d3' }}>
            <TouchableOpacity onPress={props.onPressTruck}>
            <Image source={Images.bus} style={{ tintColor: props.truckPressed ==true ?'#fff':colors.primarycolor, height: 35, width: 30, resizeMode: 'contain' }} />
          </TouchableOpacity>
          {/* <Regulartext style={{color:props.truckPressed==true ?colors.primarycolor:'grey', position:'absolute',bottom:-25,textAlign:'center',  fontSize:12,width:80}}>TRUCK</Regulartext> */}

            </TouchableOpacity>

            <TouchableOpacity onPress={props.onPressBus} style={{elevation:5, alignItems:'center', justifyContent:'center', height: 66, width: 69,
             backgroundColor:props.busPressed==true ?colors.primarycolor:colors.iconBg, paddingHorizontal:10, borderRadius:100, borderWidth:0.2,borderColor:'#d3d3d3'}}>
            <TouchableOpacity onPress={props.onPressBus}>
            <Image source={Images.truck} style={{  tintColor: props.busPressed==true ?'#fff':colors.primarycolor, height: 35, width: 30, resizeMode: 'contain' }} />
          </TouchableOpacity>
          {/* <Regulartext style={{ color:props.busPressed==true ?colors.primarycolor:'grey', position:'absolute',fontSize:12, textAlign:'center',bottom:-25}}>BUS</Regulartext> */}
            </TouchableOpacity>
        </View>



        
        </View>:
        
        <View style={{ alignItems: 'center', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, height: 152, backgroundColor: colors.primaryBlue }}>
            {/* ////////////////////////////////SEARCH BAr///////////////////////////////// */}
            <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 15, height: 63, backgroundColor: '#fff', maxHeight: 60, width: '82%', borderRadius: 50 }}>
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
                <View style={{ height: 60, width: '80%', position: 'absolute', bottom: -25 }}>

                <View style={{ height: 60, width: '100%',alignItems:'center', alignSelf:'center',  justifyContent:'space-between',  flexDirection: 'row',  position: 'absolute', }}>
                  
                <TouchableOpacity onPress={props.onPressCar} style={{elevation:5,  height: 66, width: 69,alignItems:'center', justifyContent:'center', 
                 backgroundColor:props.carPressed==true ?colors.primarycolor:colors.iconBg, paddingHorizontal:10,borderWidth:0.2,borderColor:'#d3d3d3',  borderRadius:100 }}>
                  <TouchableOpacity onPress={props.onPressCar}>
                    <Image source={Images.car} style={{ tintColor: props.carPressed==true ?'#fff':colors.primarycolor, height: 35, width: 30, resizeMode: 'contain' }} />
                  </TouchableOpacity>
                  <Regulartext style={{color:props.carPressed==true ?colors.primarycolor:'grey',  position:'absolute',textAlign:'center', fontSize:12,bottom:-25}}>CAR</Regulartext>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={props.onPressBike}style={{elevation:5, alignItems:'center', justifyContent:'center', height: 66, width: 69, 
                    backgroundColor:props.bikePressed==true ?colors.primarycolor:colors.iconBg,paddingHorizontal:10, borderRadius:100,borderWidth:0.2,borderColor:'#d3d3d3' }}>
                    <TouchableOpacity onPress={props.onPressBike}>
                    <Image source={Images.bike} style={{tintColor:props.bikePressed==true ?'#fff':colors.primarycolor,  height: 35, width: 32, resizeMode: 'contain',  }} />
                  </TouchableOpacity>
                  <Regulartext style={{color:props.bikePressed==true ?colors.primarycolor:'grey', position:'absolute',bottom:-25,textAlign:'center',  fontSize:12, width:80}}>MOTORCYCLE</Regulartext>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={props.onPressTruck}style={{elevation:5, alignItems:'center', justifyContent:'center',
                      height: 66, width: 69,backgroundColor:props.truckPressed==true ?colors.primarycolor:colors.iconBg, paddingHorizontal:10, borderRadius:100, borderWidth:0.2,borderColor:'#d3d3d3' }}>
                    <TouchableOpacity onPress={props.onPressTruck}>
                    <Image source={Images.bus} style={{ tintColor: props.truckPressed ==true ?'#fff':colors.primarycolor, height: 35, width: 30, resizeMode: 'contain' }} />
                  </TouchableOpacity>
                  <Regulartext style={{color:props.truckPressed==true ?colors.primarycolor:'grey', position:'absolute',bottom:-25,textAlign:'center',  fontSize:12,width:80}}>TRUCK</Regulartext>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={props.onPressBus} style={{elevation:5, alignItems:'center', justifyContent:'center', height: 66, width: 69,
                     backgroundColor:props.busPressed==true ?colors.primarycolor:colors.iconBg, paddingHorizontal:10, borderRadius:100, borderWidth:0.2,borderColor:'#d3d3d3'}}>
                    <TouchableOpacity onPress={props.onPressBus}>
                    <Image source={Images.truck} style={{  tintColor: props.busPressed==true ?'#fff':colors.primarycolor, height: 35, width: 30, resizeMode: 'contain' }} />
                  </TouchableOpacity>
                  <Regulartext style={{ color:props.busPressed==true ?colors.primarycolor:'grey', position:'absolute',fontSize:12, textAlign:'center',bottom:-25}}>BUS</Regulartext>
                    </TouchableOpacity>
                </View>



                
                </View>
                :
                <></>
            }

        </View>}
      </>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default HomeHeader
    ;
