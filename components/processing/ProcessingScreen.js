import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Container, Content, Text, Spinner } from 'native-base';
import styled from 'styled-components';
import axios from 'axios';

import AppBackground from '../shared/AppBackground';
const hotdog = require("../../assets/hotdog.png");

const detectEndpoint = 'https://5eqxk53744.execute-api.us-west-2.amazonaws.com/api/detect-java';

class Processing extends Component {
  state = {
    error: false,
    invalidPhoto: false
  }

  static navigationOptions = {
    header: null
  }

  async componentDidMount() {
    const { params } = this.props.navigation.state;
    const { pictureData } = params;

    let resp;

    try {
      console.log(`Image Char Length: ${pictureData.image.length}`);
      console.log('Processing...');

      resp = await axios(detectEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'Cache-Control': 'no-cache'
        },
        data: { image: pictureData.image }
      });

      console.log('Received data: ', resp.data);

      const { data } = resp;

      if (!data) {
        return false;
      }

      // Not hot dog === photo was not a parking sign:
      if (data.details === 'Not hot dog') {
        this.setState({ invalidPhoto: true });
        return false;
      }

      if (data.canPark === true) {
        this.props.navigation.navigate('NoTow');
      } else if (data.canPark === false) {
        this.props.navigation.navigate('Tow');
      } else {
        this.setState({ error: true });
      }
    } catch (e) {
      // todo notify user
      this.setState({ error: true });
      console.error('There was an error submitting the picture for processing: ', e);
    }
  }

  renderSpinner() {
    return (
      <React.Fragment>
        <Spinner color='#C2E7DA' style={{ marginTop: 50 }} />
        <ProcessingText>Processing your image...</ProcessingText>
      </React.Fragment>
    );
  }

  renderInvalidSign() {
    return (
      <React.Fragment>
        <ProcessingText>Not Hotdog</ProcessingText>
        <ImageBackground source={ hotdog } style={{ width: '100%', height: 500 }} />
      </React.Fragment>
    );
  }

  renderError() {
    return (
      <ProcessingText>Something went wrong.  That's all we know for now.  I'm sorry.  :(</ProcessingText>
    )
  }

  render() {
    return (
      <AppBackground>
        <Content>
          <ProcessingH1Text>Tow or NoTow?</ProcessingH1Text>
          {
            this.state.invalidPhoto
              ? this.renderInvalidSign()
              : this.state.error
                ? this.renderError()
                : this.renderSpinner()
          }
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
