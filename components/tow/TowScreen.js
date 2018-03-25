import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Container, Content, Button, Card, CardItem, Body, Text } from 'native-base';
import styled from 'styled-components';
import AppBackground from '../shared/AppBackground';

const tickets = require("../../assets/tickets.png");

class TowScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <AppBackground>
        <Content>
          <TowCard style={{ flex: 1, alignSelf: 'center', width: '90%' }}>
            <CardItem style={{ flex:1, flexDirection: 'column', margin: 15 }}>
              <Body style={{ maxWidth: 280 }}>
                <TowText>Tow!</TowText>
                <Text style={{ marginTop: 20, marginBottom: 25 }}>Don't be like this guy. Avoid.</Text>
              </Body>
            </CardItem>
            <CardItem style={{ backgroundColor: 'lightgrey', flex:1, flexDirection: 'column' }}>
              <ImageBackground
                source={tickets}
                style={{ width: '100%', height: 200 }}
              />
              <View style={{ flex: 1, width: '100%' }}>
                <Button
                  rounded
                  success
                  onPress={() => this.props.navigation.navigate('Dashboard')}
                  style={{ alignSelf: 'flex-end', marginTop: 10, marginLeft: 15, marginBottom: 10 }}>
                  <Text>Got it!</Text>
                </Button>
              </View>
            </CardItem>
          </TowCard>
        </Content>
      </AppBackground>
    );
  }
}

const TowCard = styled(Card)`
  margin-top: 80px;
`

const TowText = styled(Text)`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 30px;
  color: #d9534f;
`

export default TowScreen;