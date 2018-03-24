import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';
import styled from 'styled-components';

// Screen Imports:
import SplashScreen from './components/splash/SplashScreen';
import CameraScreen from './components/camera/CameraScreen';
import ProcessingScreen from './components/processing/ProcessingScreen';
import NoTowScreen from './components/notow/NoTowScreen';
import TowScreen from './components/tow/TowScreen';

const RootStack = StackNavigator({
  Splash: {
    screen: SplashScreen,
  },
  Camera: {
    screen: CameraScreen
  },
  Processing: {
    screen: ProcessingScreen
  },
  NoTow: {
    screen: NoTowScreen
  },
  Tow: {
    screen: TowScreen
  },
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
