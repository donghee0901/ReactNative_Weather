import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function BottomAD() {
  return (
    <View style={styles.body}>
        <Text style={styles.text}>여기는 광고를 표시하는 곳입니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        width: "100%",
        backgroundColor: "#006DD6",
        alignItems: "flex-start",
        justifyContent: 'center',
    },
    text:{
        marginLeft: 10,
        fontSize: 15 / 789.1428571428571 * windowHeight,
        color: "white",
    },
});
