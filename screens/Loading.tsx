import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BACKGROUND_COLOR } from '../constants/colors';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

const Loading = () => {
  return (
    <View style={styles.main}>
        <StatusBar style='inverted'/>
        <LottieView autoPlay
        loop source={require('../assets/animations/Loading.json')} 
        style={{height:220,width:220}}
        />
        {/* <Text style={styles.text}>Loading...</Text> */}
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: BACKGROUND_COLOR,
    },
    text:{
        color:'#fff',
        opacity:0.4,
        fontSize:30
    }
})