import React, { Component } from 'react';
import { Container, Content, Text, Spinner } from 'native-base';
import styled from 'styled-components';
import axios from 'axios';

import AppBackground from '../shared/AppBackground';

const detectEndpoint = 'https://5eqxk53744.execute-api.us-west-2.amazonaws.com/api/detect';

class Processing extends Component {
  state = {
    error: false
  }

  static navigationOptions = {
    header: null
  }

  async componentDidMount() {
    const { params } = this.props.navigation.state;
    const { pictureData } = params;

    let resp;

    try {
      // temp: abort after 10 seconds
      // todo: proper error handling
      // setTimeout(() => {
      //   this.setState({ error: true });
      // }, 10 * 1000);

      console.log(pictureData.image.length);
      console.log('hey')


      resp = await axios(detectEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'Cache-Control': 'no-cache'
        },
        data: { image: pictureData.image }
      });

      // resp = await fetch(detectEndpoint, {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //     'Cache-Control': 'no-cache'
      //   },
      //   body: JSON.stringify({
      //     image: pictureData.data
      //   }),
      // });

      // resp = await resp.json();

      console.log(resp.data);

      return;

      if (!resp.data) {
        return false;
      }

      if (resp.data.canPark === true) {
        this.props.navigation.navigate('NoTow');
      } else if (resp.data.canPark === false) {
        this.props.navigation.navigate('Tow');
      } else if (resp.data.canPark === 'nothotdog') {
        // todo
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

  renderError() {
    return (
      <Text>Something went wrong.  That's all we know for now.  I'm sorry.  :(</Text>
    )
  }

  render() {
    return (
      <AppBackground>
        <Content>
          <ProcessingH1Text>Tow or NoTow?</ProcessingH1Text>
          {
            this.state.error
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