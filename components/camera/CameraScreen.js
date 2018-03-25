
import React from 'react';
import { Constants, Camera, Location, Permissions } from 'expo';
import { Platform, Text, View, TouchableOpacity, Vibration } from 'react-native';
import { Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';
import isIPhoneX from 'react-native-is-iphonex';
import moment from 'moment';

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

export default class CameraScreen extends React.Component {
  state = {
    flash: 'off',
    zoom: 0,
    autoFocus: 'on',
    depth: 0,
    type: 'back',
    whiteBalance: 'auto',
    ratio: '16:9',
    ratios: [],
    photoId: 1,
    showGallery: false,
    photos: [],
    faces: [],
    permissionsGranted: false,
  };

  static navigationOptions = {
    header: null
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this.getLocationAsync();
    }

    this.setState({ permissionsGranted: status === 'granted' });
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  getRatios = async () => {
    const ratios = await this.camera.getSupportedRatios();
    return ratios;
  }

  toggleFacing() {
    this.setState({
      type: this.state.type === 'back' ? 'front' : 'back',
    });
  }

  toggleFlash() {
    this.setState({
      flash: flashModeOrder[this.state.flash],
    });
  }

  setRatio(ratio) {
    this.setState({
      ratio,
    });
  }

  toggleFocus() {
    this.setState({
      autoFocus: this.state.autoFocus === 'on' ? 'off' : 'on',
    });
  }

  zoomOut() {
    this.setState({
      zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1,
    });
  }

  zoomIn() {
    this.setState({
      zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1,
    });
  }

  setFocusDepth(depth) {
    this.setState({
      depth,
    });
  }

  async takePicture() {
    if (this.camera) {
      Vibration.vibrate();

      // formatted time string of when the photo was taken
      const takenAt = moment().format('YYYY-MM-DD HH:mm:ss.SSS');
      const imageData = await this.camera.takePictureAsync({ base64: true, quality: 0 });

      const pictureData = {
        image: imageData.base64,
        time: takenAt,
        location: {
          lat: this.state.location.coords.latitude,
          lng: this.state.location.coords.longitude
        }
      };

      // head to the ProcessingScreen with the data:
      this.props.navigation.navigate('Processing', { pictureData });
    }
  }

  renderNoPermissions() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <Text style={{ color: 'white' }}>
          Camera permissions not granted - cannot open camera preview.
        </Text>
      </View>
    );
  }

  renderCamera() {
    return (
      <FlexView>
        <Camera
          style={{ flex: 1, alignItems: 'center' }}
          ref={ref => {
            this.camera = ref;
          }}
          type={this.state.type}
          flashMode={this.state.flash}
          autoFocus={this.state.autoFocus}
          zoom={this.state.zoom}
          whiteBalance={this.state.whiteBalance}
          ratio={this.state.ratio}
          focusDepth={this.state.depth}
        >
          <TopHelpTextWrapper>
            <TopHelpText>Align the parking sign in the target box.</TopHelpText>
          </TopHelpTextWrapper>
          <TargetOutline />
          <ButtonWrapper
            onPress={() => this.takePicture()}
          >
            <Ionicons name="ios-radio-button-on" size={80} color="#FFF" />
          </ButtonWrapper>
        </Camera>
      </FlexView>
    );
  }

  render() {
    const cameraScreenContent = this.state.permissionsGranted
      ? this.renderCamera()
      : this.renderNoPermissions();

    return cameraScreenContent;
  }
}

const FlexView = styled(View)`
  flex: 1;
`;

const TargetOutline = styled(View)`
  position: absolute;
  top: 20%;
  height: 50%;
  width: 65%;
  border: 2px dashed #fff;
  border-style: dashed;
`;

const TopHelpTextWrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100;
  background-color: rgba(0, 0, 0, .25);
`;

const TopHelpText = styled(Text)`
  margin-top: 20px;
  color: rgb(255, 255, 255);
  font-size: 16
`;

const ButtonWrapper = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50;
  width: 100%;
  border: 0;
  background: rgba(0,0,0,0);
  box-shadow: none;
`;

const TakePictureButton = styled(Button)`
  background: rgba(0,0,0,0);
  border: 0;
  box-shadow: none;
`;
