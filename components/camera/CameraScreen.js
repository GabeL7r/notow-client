import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import styled from 'styled-components';

class CameraScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>Camera</Text>
        </Header>
        <Content>
          <Text>You've made it to the camera screen!</Text>
        </Content>
      </Container>
    );
  }
}

export default CameraScreen;