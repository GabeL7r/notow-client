import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import styled from 'styled-components';

class TowScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>Tow</Text>
        </Header>
        <Content>
          <Text>You've made it to the Tow screen!</Text>
        </Content>
      </Container>
    );
  }
}

export default TowScreen;