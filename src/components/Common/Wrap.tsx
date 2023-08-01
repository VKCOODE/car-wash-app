//import liraries
import React, { Children, Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// create a component
const Wrap= (props:any) => {
    return (
     <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Wrap
;
