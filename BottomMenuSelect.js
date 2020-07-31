import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function BottomMenuSelect(props) {
  return (
    <View style={props.bodystyle}>
        <Text style={props.inputStyle}>{props.data}</Text>
    </View>
  );
}
