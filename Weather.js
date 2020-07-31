import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import axios from "axios";
import * as Location from 'expo-location';
import Content from './Content';

const Weather = () => {
    const [api,setApi] = useState({}); // 7. useState로 setApi를 통해 api의 상태값을 갱신해준다.

    useEffect(() => {
        getLocation();
    },[])

    const getLocation = async() => {
        try { 
            await Location.requestPermissionsAsync(); // 1. GPS권한 발급.
            const location = await Location.getCurrentPositionAsync(); // 2. 디바이스의 위치 데이터를 location 변수에 담는다.

            const { latitude, longitude } = location.coords; // 3. location에 담긴 데이터 중 coords 경로에 latitude와 longitude의 값을 담는다.
            await getApi(latitude, longitude) // 4. getApi 함수의 파라미터로 latitude와 longitude를 넘겨준다.
                .then (response => { // 6. 처리 결과값을 response로 받아 setApi의 파라미터로 넘겨준다.
                    setApi(response);
                })
                .catch (error => {
                    console.log(error);
                });
          } catch (error) {
            console.log(error);
          }
    }

    const getApi = async (latitude, longitude) => { 
        try {
            // 5. latitude와 longitude에 맞는 api 데이터를 가져온다.
            const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9cd81fc058f141ab71f04b44b0c53290`);
            return data;
        } catch (error) {
            throw error;
        }
    }
    
    return <Content api = {api} />; // 8. Content 컴포넌트로 api 데이터를 리턴해준다.
}

export default Weather;