import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,Dimensions } from 'react-native';
import Header from './Header.js';
import Body from './Body.js';
import BottomBar from './BottomBar.js';
import BottomAd from './BottomAd.js';


class Bodys extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <Body/>
        );
    }
}