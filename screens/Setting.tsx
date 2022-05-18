import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BACKGROUND_COLOR } from '../constants/colors';
import { SimpleLineIcons } from '@expo/vector-icons';

const Setting = () => {
  const localSettingData = ['Temperature Unit','Privacy Policy','Open source licenses','About']
  return (
    <View style={styles.main}>
      <StatusBar style='inverted' />
      <View>
        {localSettingData.map((e,i)=>{
          return(
            <TouchableOpacity key={i} style={styles.option}>
              <Text style={styles.text}>{e}</Text>
              <SimpleLineIcons name="arrow-right" size={12} color="rgba(256,256,256,0.6)" />
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={styles.copyright}>
        <Text style={styles.textlite}>©2022 Weather™. All Rights Reserved.</Text>
      </View>
    </View>
  )
}

export default Setting;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    justifyContent:'space-between'
  },
  text: {
    color: 'rgba(256,256,256,0.9)'
  },
  textlite: {
    color: 'rgba(256,256,256,0.4)',
    fontSize:10
  },
  option:{
    justifyContent:'space-between',
    flexDirection:'row',
    padding:12,
    paddingHorizontal:25
  },
  copyright:{
    alignItems:'center',
    paddingBottom:20
  }
})