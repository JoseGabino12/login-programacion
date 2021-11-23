import { StatusBar } from 'expo-status-bar';
import React, { Component }from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions, Scene, Router } from 'react-native-router-flux'
import Routes from './src/routers';

export default class App extends Component {

  render(){
    return (
      <Routes/>
    );
  }
}