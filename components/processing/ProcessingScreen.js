import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import styled from 'styled-components';

class Processing extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>Processing</Text>
        </Header>
        <Content>
          <Text>You've made it to the Processing screen!</Text>
        </Content>
      </Container>
    );
  }
}

export default Processing;