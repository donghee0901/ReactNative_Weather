import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BodyContent from './BodyContent.js';
import BodyMenu from './BodyMenu.js';
import BodyFineDust from './BodyFineDust.js';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '3f51c3c7cf783ae35f14567e473a79fa';

export default function Body() {
  var locations = "우리집을 못찾겠군요";
  const [errorMsg, setErrorMsg] = useState(null);
  const [api,setApi] = useState({
    name: '불러오는중...',
    main: {
      temp: "대기",
      temp_max: "대기",
      temp_min: "대기",
    },
    weather: {
      description: '',

    },
  }); // 7. useState로 setApi를 통해 api의 상태값을 갱신해준다.

  useEffect(() => {
    getLocation();
  },[])

  const getLocation = async() => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('거절당했습니다');
    }
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords; // 3. location에 담긴 데이터 중 coords 경로에 latitude와 longitude의 값을 담는다.
    await getApi(latitude, longitude) // 4. getApi 함수의 파라미터로 latitude와 longitude를 넘겨준다.
      .then (response => { // 6. 처리 결과값을 response로 받아 setApi의 파라미터로 넘겨준다.
        if(response !== undefined || response !== null) {
          setApi(response);
        }
          console.log('api');
          console.log(api);
          console.log('api');
      })
      .catch (error => {
          console.log(error);
      });
  }

  const getApi = async (latitude, longitude) => { 
      try {
          // 5. latitude와 longitude에 맞는 api 데이터를 가져온다.
          const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
          return data;
      } catch (error) {
          throw error;
      }
  }

  return (
    <View style={styles.body}>
        <BodyContent api ={api}/>
        <BodyMenu/>
        <BodyFineDust/>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#007EEF",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
    },
});
