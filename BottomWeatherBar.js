import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import BottomWeatherKind from './BottomWeatherKind.js';
import sun from './assets/sun.png'
import cloud from './assets/cloud.png'
import sun_cloud from './assets/sun_cloud.png'


export default function BottomWeatherBar() {
    var time = [11,12,13,14,15,16,17];
    var time_now = 9;
    var time_i = 0;
    var data = [18,20,21,20,19,25,30];
    var weather = ["맑음","맑음","구름낌","구름낌","구름낌","맑음","맑음"];
    function selectTime()
    {
        time = parseInt(time_now) + parseInt(time_i);
        time_i++;
        if(time <= 12){
            return "오전 " + time + "시";
        }
        else{
            return "오후 " + (time - 12) + "시";
        }
    }
    function selectWeather(index)
    {
        if(weather[index] === "맑음"){
            return sun;
        }
        else if(weather[index] === "구름"){
            return cloud;
        }
        else if(weather[index] === "구름낌"){
            return sun_cloud;
        }
    }
  return (
    <View style={styles.body}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <BottomWeatherKind time={selectTime()} data="18˚" weather={selectWeather(0)}/>
            <BottomWeatherKind time={selectTime()} data="20˚" weather={selectWeather(1)}/>
            <BottomWeatherKind time={selectTime()} data="21˚" weather={selectWeather(2)}/>
            <BottomWeatherKind time={selectTime()} data="20˚" weather={selectWeather(3)}/>
            <BottomWeatherKind time={selectTime()} data="19˚" weather={selectWeather(4)}/>
            <BottomWeatherKind time={selectTime()} data="19˚" weather={sun}/>
            <BottomWeatherKind time={selectTime()} data="19˚" weather={sun}/>
            <BottomWeatherKind time={selectTime()} data="19˚" weather={sun}/>
            <BottomWeatherKind time={selectTime()} data="19˚" weather={sun}/>
            <BottomWeatherKind time={selectTime()} data="19˚" weather={sun}/>
            <BottomWeatherKind time={selectTime()} data="19˚" weather={sun}/>
            <BottomWeatherKind time={selectTime()} data="19˚" weather={sun}/>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: "row",
    },
});
