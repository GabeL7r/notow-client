import React, { Component } from 'react';
import { Container, Content, Button, Card, CardItem, Body, Text } from 'native-base';
import styled from 'styled-components';
import AppBackground from '../shared/AppBackground';

class TowScreen extends Component {
  render() {
    return (
      <AppBackground>
        <Content>
          <TowCard>
            <CardItem style={{flex:1, flexDirection: 'column'}}>
              <Body>
                <Text>Tow!</Text>
                <Text>Don't park it here, you will probably get towed!</Text>
              </Body>
              <Body style={{backgroundColor: 'lightgrey'}}>
                <Button rounded success>
                  <Text>Got it!</Text>
                </Button>
              </Body>
            </CardItem>
          </TowCard>
        </Content>
      </AppBackground>
    );
  }
}

const TowCard = styled(Card)`
  margin-top: 8px;
`

export default TowScreen;