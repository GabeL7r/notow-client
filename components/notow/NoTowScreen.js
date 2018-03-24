import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import styled from 'styled-components';

class NoTowScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>No Tow</Text>
        </Header>
        <Content>
          <Text>You've made it to the no tow screen!</Text>
        </Content>
      </Container>
    );
  }
}

export default NoTowScreen;