import React, { Component } from 'react';
import { View } from 'react-native';
import { Content, Text, Thumbnail } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

import AppBackground from '../shared/AppBackground';
const mapImage = require("../../assets/Map.png");
const snapImage = require("../../assets/Snap.png");

class DashboardScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <AppBackground>
        <Content style={{ flex: 1, alignSelf: 'center', width: '90%' }}>
        <DashboardText>Dashboard</DashboardText>

        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <DashboardHeaderText>Translate a Parking Sign</DashboardHeaderText>
          <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'center' }}>
            <Thumbnail
              large
              source={snapImage}
              style={{ height: 100, width: 100, borderRadius: 50 }}
            />
            <Ionicons
              onPress={() => this.props.navigation.navigate('Camera')}
              name="ios-arrow-round-forward"
              size={80}
              color="#ffffff"
              style={{ marginLeft: 30 }} />
          </View>

          <DashboardHeaderText>Recent Locations</DashboardHeaderText>
          <View style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'center' }}>
            <Thumbnail
              large
              source={mapImage}
              style={{ height: 100, width: 100, borderRadius: 50 }}
            />
            <Ionicons
              onPress={() => this.props.navigation.navigate('Locations')}
              name="ios-arrow-round-forward"
              size={80}
              color="#FFF"
              style={{ marginLeft: 30 }} />
          </View>

        </View>
        </Content>
      </AppBackground>
    );
  }
}

const DashboardText = styled(Text)`
  margin-top: 90px;
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`

const DashboardHeaderText = styled(Text)`
  margin-top: 40px;
  margin-bottom: 20px;
  color: #ffffff;
  font-size: 20px;
`

export default DashboardScreen;