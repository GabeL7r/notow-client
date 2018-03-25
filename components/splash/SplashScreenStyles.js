const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

import variable from "../../theme/variables/platform";

const logoDimension = 175;

export default {
  background: {
    backgroundColor: variable.brandSuccess,
  },
  logoContainer: {
    flex: 3,
    marginTop: deviceHeight / 10,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: (deviceWidth - logoDimension) / 2,
    top: Platform.OS === "android" ? 80 : 100,
    width: logoDimension,
    height: logoDimension
  },
  textName: {
    textAlign: 'center',
    marginTop: 400,
    fontWeight: 'bold',
    fontSize: 52,
    color: '#ffffff'
  },
  textTagLine: {
    textAlign: 'center',
    marginTop: 5,
    color: '#ffffff',
    fontSize: 24
  },
};
