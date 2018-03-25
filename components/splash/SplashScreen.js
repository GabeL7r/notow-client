import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content, Text } from 'native-base';

import styles from "./SplashScreenStyles";
const splashScreenLogo = require("../../assets/noTowCircleBig.png");

class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  constructor() {
    super();

    setTimeout( () => this.props.navigation.navigate("Camera"), 3 * 1000);
  }

  render() {
    return (
      <Container style={styles.background}>
        <Content>
            <ImageBackground source={splashScreenLogo} style={styles.logo}/>
            <Text style={styles.textName}>NoTow</Text>
            <Text style={styles.textTagLine}>Park safely, anywhere</Text>
        </Content>
      </Container>
    );
  }
}

export default SplashScreen;
