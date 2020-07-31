import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import fineDust from './assets/dustGood.png'
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function BodyFineDust() {
  return (
    <View style={styles.body}>
        <View style={styles.fineDustBody}>
          <Image style={styles.images} source={fineDust}/>
          <View>
            <Text style={styles.text}>미세미세</Text>
            <Text style={styles.text}>매우좋음</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
      width: "100%",
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: "row",
    },
    images:{
      width: 30 / 789.1428571428571 * windowHeight,
      height: 30 / 789.1428571428571 * windowHeight,
      marginRight: 7 / 789.1428571428571 * windowHeight,
    },
    fineDustBody: {
      width: 100 / 789.1428571428571 * windowHeight,
      height: 50 / 789.1428571428571 * windowHeight,
      backgroundColor: "#3395F9",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'center',
      marginRight: 10 / 789.1428571428571 * windowHeight,
      borderRadius: 15 / 789.1428571428571 * windowHeight,
    },
    text: {
      color: 'white',
      fontSize: 13 / 789.1428571428571 * windowHeight,
    },
});
