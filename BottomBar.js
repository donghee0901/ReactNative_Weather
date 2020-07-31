import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BottomMenu from './BottomMenu.js'
import BottomWeather from './BottomWeather.js'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BottomBar() {
  function widthAndHeight()
  {
      if((windowHeight / windowWidth) >= 2.3){
          return windowWidth*2.3;
      }
      else{
          return windowHeight;
      }
  }
  function styleText()
  {
    return {
      marginLeft: 10,
      fontSize: 20 / 789.1428571428571 * widthAndHeight(),
      color: "white",
    }
  }
  return (
    <View style={styles.bottom}>
        <BottomMenu windowHeight={widthAndHeight()} styleText={styleText()}/>
        <BottomWeather/>
    </View>
  );
}

const styles = StyleSheet.create({
    bottom: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});
