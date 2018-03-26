import axios from 'axios';

export default (uniqueIdForDevice, latitute, longitude, dateTimeWhenButtonClicked) => {
  var url = "https://data.cataleptic96.hasura-app.io/v1/query";

  // If you have the auth token saved in offline storage
  // var authToken = window.localStorage.getItem('HASURA_AUTH_TOKEN');
  // headers = { "Authorization" : "Bearer " + authToken }
  var requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    }
  };

  var body = {
    "type": "insert",
    "args": {
      "table": "coordinates",
      "objects": [
        {
          "user_id": uniqueIdForDevice,
          "lat": latitute.toString(),
          "long": longitude.toString(),
          "created": dateTimeWhenButtonClicked
        }
      ]
    }
  };

  requestOptions.data = body;

  return axios(url, requestOptions);
};
