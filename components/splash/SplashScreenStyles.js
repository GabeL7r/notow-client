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
    top: Platform.OS === "android" ? 5 : 30,
    width: logoDimension,
    height: logoDimension
  },
  textName: {
    left: (deviceWidth - 90) / 2,
    width: 200,
    marginTop: 400,
    color: '#ffffff'
  },
  textTagLine: {
    left: (deviceWidth - 200) / 2,
    width: 200,
    marginTop: 5,
    color: '#ffffff'
  },
};
