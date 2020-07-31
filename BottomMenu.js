import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BottomMenuSelect from './BottomMenuSelect.js'

var windowHeight;
export default function BottomMenu(props) {
    var isOnClick = 0;
    windowHeight = props.windowHeight;
    function selecter(num)
    {
        if(isOnClick == num)
        {
            return{
                fontSize: 20 / 789.1428571428571 * windowHeight,
                color: "white",
                borderStyle :'solid' ,
            };
        }
        else{
            return{
                fontSize: 20 / 789.1428571428571 * windowHeight,
                color: "#72B6E6",
            };
        }
    }
    function bodyStyleSelecter(num)
    {
        if(isOnClick == num)
        {
            return{
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: "white",
                borderBottomWidth: 2 / 789.1428571428571 * windowHeight,
                padding: 5,
            };
        }
        else{
            return{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5,
            };
        }
    }
  return (
    <View style={styles.body}>
        <View style={styles.bodyLeft}>
            <Text style={props.styleText}>오늘</Text>
        </View>
        <View style={styles.bodyRight}>
            <BottomMenuSelect data="온도" inputStyle={selecter(0)} bodystyle={bodyStyleSelecter(0)}/>
            <BottomMenuSelect data="체감" inputStyle={selecter(1)} bodystyle={bodyStyleSelecter(1)}/>
            <BottomMenuSelect data="자외선" inputStyle={selecter(2)} bodystyle={bodyStyleSelecter(2)}/>
            <BottomMenuSelect data="강수" inputStyle={selecter(3)} bodystyle={bodyStyleSelecter(3)}/>
            <BottomMenuSelect data="바람" inputStyle={selecter(4)} bodystyle={bodyStyleSelecter(4)}/>
            <BottomMenuSelect data="습도" inputStyle={selecter(5)} bodystyle={bodyStyleSelecter(5)}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        width: "100%",
        backgroundColor: "#006DD6",
        flexDirection: "row",
    },
    bodyLeft:{
        width: "20%",
        justifyContent: "center",
    },
    bodyRight:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "80%",
        paddingRight: 10,
    },
});
