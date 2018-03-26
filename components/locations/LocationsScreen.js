import React, { Component } from 'react';
import { View } from 'react-native';
import { Content, Text, Thumbnail, Spinner, Card, CardItem } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';
import moment from 'moment';

import AppBackground from '../shared/AppBackground';
import getLocations from './getLocations';

class DashboardScreen extends Component {
  state = {
    loading: true,
    locations: []
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const resp = await getLocations();

    this.setState({
      loading: false,
      locations: resp.data
    })
  }

  renderList() {
    console.log('render list', this.state.loading, this.state.locations)

    if (this.state.loading) {
      return <Spinner style={{ alignSelf: 'center' }} />;
    }

    return this.state.locations.map((location, i) => {
      return (
        <Card key={location.id}>
          <CardItem>
            <Text>Parking spot #{i}, on {moment(location.created).format('hh:mm A')}</Text>
          </CardItem>
        </Card>
      );
    });
  }

  render() {
    return (
      <AppBackground>
        <Content style={{ flex: 1, alignSelf: 'center', width: '90%' }}>
          <LocationsText>Locations</LocationsText>
          {this.renderList()}
        </Content>
      </AppBackground>
    );
  }
}

const LocationsText = styled(Text) `
  margin-top: 90px;
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`;

export default DashboardScreen;