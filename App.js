import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,Dimensions } from 'react-native';
import Header from './Header.js';
import Body from './Body.js';
import Bodys from './Bodys.js';
import BottomBar from './BottomBar.js';
import BottomAd from './BottomAd.js';

const windowHeight = Dimensions.get('window').height;
export default function App() {

  
  
  return (
    <View style={styles.fragments}>
      <Header/>
      <ScrollView style={styles.scrollView} vertical={true} showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.main}>
          <Body/>
          <BottomBar/>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <BottomAd style={styles.bottomAd}/>
    </View>
  );
}

const styles = StyleSheet.create({
  fragments:{
    backgroundColor: "#007EEF",
    paddingTop: windowHeight * 0.035,
    flex: 1,
  },
  scrollView:{
    marginBottom: "5%",
  },
  main: {
    flex: 1,
    flexDirection: "column",
  },
  container: {
    backgroundColor: "#007EEF",
  },
  bottomAd: {
    height: "5%",
  },
});
