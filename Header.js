import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.leftHeader}>
        <Image style={styles.images} source={require('./assets/open-menu.png')}/>
      </View>
      <View style={styles.rightHeader}>
        <Image style={styles.share} source={require('./assets/share.png')}/>
        <Image style={styles.more} source={require('./assets/more.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    zIndex: 3,
    flexDirection: "row",
    backgroundColor: 'rgba(0,0,0,0)',
    position: "absolute",
    top: windowHeight*0.035,
  },
  leftHeader:{
    width: "50%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-start',
    paddingLeft: 15 / 789.1428571428571 * windowHeight,
  },
  rightHeader:{
    width: "50%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  images:{
    width: 35 / 789.1428571428571 * windowHeight,
    height: 35 / 789.1428571428571 * windowHeight,
    alignItems: "flex-start",
    justifyContent: 'flex-start',
  },
  share:{
    width: 30 / 789.1428571428571 * windowHeight,
    height: 30 / 789.1428571428571 * windowHeight,
    marginRight: 15 / 789.1428571428571 * windowHeight,
  },
  more:{
    width: 30 / 789.1428571428571 * windowHeight,
    height: 30 / 789.1428571428571 * windowHeight,
  }
});
