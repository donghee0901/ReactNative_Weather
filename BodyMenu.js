import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import circleFull from './assets/circle_full.png'
import circle from './assets/circle.png'
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function BodyMenu() {
  return (
    <View style={styles.body}>
        <Image style={styles.images} source={circleFull}/>
        <Image style={styles.images} source={circle}/>
        <Image style={styles.images} source={circle}/>
        <Image style={styles.images} source={circle}/>
        <Image style={styles.images} source={circle}/>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        marginTop: 10 / 789.1428571428571 * windowHeight,
        marginBottom: 10 / 789.1428571428571 * windowHeight,
        paddingVertical: 2 / 789.1428571428571 * windowHeight,
    },
    images:{
        width: 10 / 789.1428571428571 * windowHeight,
        height: 10 / 789.1428571428571 * windowHeight,
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        marginLeft: 3 / 789.1428571428571 * windowHeight,
        marginRight: 3 / 789.1428571428571 * windowHeight,
    },
});
