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

    console.log('starting upload', getState());
  };
}
