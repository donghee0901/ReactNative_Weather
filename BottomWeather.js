import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BottomWeatherBar from './BottomWeatherBar.js';

export default function BottomWeather() {
  return (
    <View style={styles.body}>
        <View style={styles.bodyLeft}>
            <BottomWeatherBar/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        width: "100%",
        backgroundColor: "#007EEF",
        flexDirection: "row",
    },
});
