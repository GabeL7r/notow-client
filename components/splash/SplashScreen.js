import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import styled from 'styled-components';

class SplashScreen extends Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <StyledContainer>
        <Header>
          <Text>Splash</Text>
        </Header>
        <Content>
          <Button onPress={() => this.props.navigation.navigate('Camera')}>
            <Text>Click Me! </Text>
          </Button>
        </Content>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled(Container) `
  background: #fafafa;
`;

export default SplashScreen;