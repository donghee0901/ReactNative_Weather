import React from 'react';
import { StyleSheet, Text, View, Image, ImagePropTypes } from 'react-native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function BottomWeatherKind(props) {
  return (
    <View style={styles.body}>
        <Text style={styles.text}>{props.time}</Text>
        <Image style={styles.images} source={props.weather}/>
        <Text style={styles.text}>{props.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        paddingHorizontal: 15,
    },
    images:{
        width: 50 / 789.1428571428571 * windowHeight,
        height: 50 / 789.1428571428571 * windowHeight,
    },
    text:{
        fontSize: 20 / 789.1428571428571 * windowHeight,
        marginVertical: 15,
        color: "white",
    }
});
