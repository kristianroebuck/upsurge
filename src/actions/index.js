import request from '../utils/request';
import * as types from '../constants/action-types';


export function initiate(options) {
  return {
    type: types.INITIATE,
    options
  };
}

export function addFile(file, fileName) {
  return {
    type: types.ADD_FILE,
    file,
    fileName
  };
}

export function initiateUpload() {
  return (dispatch, getState) => {
    signRequest();
  };
}

export function signRequest() {
  const stringToSign = 'POST \n';

  request({
    method: 'POST',
    url: 'http://localhost:3000/sign-auth-v4',
    body: JSON.stringify({stringToSign})
  })
  .then(response => JSON.parse(response))
  .then(signature => signature.signature)
  .then(signature => dispatch(signRequestSuccess(signature)))
  .catch(() => console.log('error'));
}

export function signRequestSuccess(signature) {
  return {
    type: types.SIGN_REQUEST_SUCCESS,
    signature
  };
}

export function signRequestFailure() {
  return {
    type: types.SIGN_REQUEST_FAILURE,
    error: true
  };
}
