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

function signRequest() {
  request({
    method: 'POST',
    url: 'http://localhost:8080/sign-auth-v4'
  })
  .then(response => console.log(response));
}
