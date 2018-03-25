import React, { Component } from 'react';
import { Container, Content, Text, Spinner } from 'native-base';
import styled from 'styled-components';

import AppBackground from '../shared/AppBackground';

class Processing extends Component {
  render() {
    return (
      <AppBackground>
        <Content>
          <ProcessingH1Text>Tow or NoTow?</ProcessingH1Text>
            <Spinner color='#C2E7DA' style={{marginTop: 50}} />
          <ProcessingText>Processing your image...</ProcessingText>
        </Content>
      </AppBackground>
    );
  }
}

const ProcessingText = styled(Text)`
  padding-top: 100px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`

const ProcessingH1Text = styled(ProcessingText)`
  font-size: 40px;
  color: #feebeb;
`

export default Processing;