import axios from 'axios';

const apiCaller = (method, subUrl, params) => {
  let common = {
    method: method,
    url: 'https://5f3280f6ec833000161374ab.mockapi.io/api/v1/' + subUrl,
    // headers: {
    //   auth_token: USER_TOKEN
    // }
  };

  common =
    method.toUpperCase() === 'GET'
      ? { ...common, params: params }
      : { ...common, data: params };

      return axios(common);
};

export default apiCaller;
