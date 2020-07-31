import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;


export default function BodyContent({api}) {
    function calcTemp(temps)
    {
        if(temps === "대기")return '불러오는중';
        else return (Number(temps)-273.15) + "˚";
    }
  return (
    <View style={styles.body}>
        <Text style={styles.text1}>(현재 위치)</Text>
        <Text style={styles.text2}>{api.name}</Text>
        <Text style={styles.text3}>{api.weather[0].description}</Text>
        <Image style={styles.weather} source={require('./assets/sun.png')}/>
  <Text style={styles.text4}>{calcTemp(api.main.temp)}</Text>
        <Text style={styles.text5}>어제보다 6˚나 높아요</Text>
        <Text style={styles.text6}>최고 {calcTemp(api.main.temp_max)}/최저 {calcTemp(api.main.temp_min)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    weather:{
        width: 150 / 789.1428571428571 * windowHeight,
        height: 150 / 789.1428571428571 * windowHeight,
        margin: 20,
    },
    text1:{
        color: 'white',
        fontSize: 20 / 789.1428571428571 * windowHeight,
    },
    text2:{
        color: 'white',
        fontSize: 30 / 789.1428571428571 * windowHeight,
    },
    text3:{
        color: 'white',
        fontSize: 20 / 789.1428571428571 * windowHeight,
    },
    text4:{
        color: 'white',
        fontSize: 70 / 789.1428571428571 * windowHeight,
    },
    text5:{
        color: 'white',
        fontSize: 20 / 789.1428571428571 * windowHeight,
    },
    text6:{
        color: 'white',
        fontSize: 10 / 789.1428571428571 * windowHeight,
    },
});
