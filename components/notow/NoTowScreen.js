import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Container, Content, Button, Card, CardItem, Body, Text } from 'native-base';
import styled from 'styled-components';
import AppBackground from '../shared/AppBackground';

const parkImage = require("../../assets/success.png");

class NoTowScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <AppBackground>
        <Content>
          <NoTowCard style={{ flex: 1, alignSelf: 'center', width: '90%' }}>
            <CardItem style={{ flex:1, flexDirection: 'column', margin: 15 }}>
              <Body style={{ maxWidth: 280 }}>
                <NoTowText>NoTow!</NoTowText>
                <Text>Sweet, you can park here!</Text>
                <Text style={{ marginTop: 10, marginBottom: 20 }}>You avoided a ticket or tow today. </Text>
              </Body>
            </CardItem>
            <CardItem style={{ backgroundColor: 'lightgrey', flex:1, flexDirection: 'column' }}>
              <ImageBackground
                source={parkImage} 
                style={{ width: '100%', height: 200 }}
              />
              <View style={{ flex: 1, width: '100%' }}>
                <Button
                  rounded
                  success
                  onPress={()=> this.props.navigation.navigate('Splash')}
                  style={{ alignSelf: 'flex-end', marginTop: 10, marginLeft: 15, marginBottom: 10 }}>
                  <Text>Got it!</Text>
                </Button>
              </View>
            </CardItem>
          </NoTowCard>
        </Content>
      </AppBackground>
    );
  }
}

const NoTowCard = styled(Card)`
  margin-top: 80px;
`

const NoTowText = styled(Text)`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 30px;
  color: #5cb85c;
`

export default NoTowScreen;