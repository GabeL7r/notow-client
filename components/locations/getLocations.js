import axios from 'axios';

export default (limit = 3) => {
  var url = "https://data.cataleptic96.hasura-app.io/v1/query";

  // If you have the auth token saved in offline storage
  // var authToken = window.localStorage.getItem('HASURA_AUTH_TOKEN');
  // headers = { "Authorization" : "Bearer " + authToken }
  var requestOptions = {
    "method": "POST",
    "headers": {

      "Content-Type": "application/json",
      "Authorization": "Bearer d9b802e1e86785fdef21836e448f6db73b4206e673b6c1da"
    }
  };

  var body = {
    "type": "select",
    "args": {
      "table": "coordinates",
      "columns": [
        "*"
      ],
      "where": {
        "user_id": {
          "$eq": "2"
        }
      },
      "order_by": [
        {
          "column": "id",
          "order": "desc"
        }
      ],
      "limit": limit.toString()
    }
  };

  requestOptions.data = body;

  return axios(url, requestOptions);
}