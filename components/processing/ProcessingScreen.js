import React, { Component } from 'react';
import { Container, Content, Text, Spinner } from 'native-base';
import styled from 'styled-components';
import axios from 'axios';

import AppBackground from '../shared/AppBackground';

const detectEndpoint = 'https://5eqxk53744.execute-api.us-west-2.amazonaws.com/api/detect-java';

class Processing extends Component {
  static navigationOptions = {
    header: null
  }

  async componentDidMount() {
    const { params } = this.props.navigation.state;
    const { pictureData } = params;

    let resp;

    try {
      resp = await axios.post(detectEndpoint, pictureData);
      console.log(resp);
    } catch (e) {
      // todo notify user
      console.error('There was an error submitting the picture for processing: ', e);
    }
  }

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