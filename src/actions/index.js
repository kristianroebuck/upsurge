import * as types from '../constants/action-types';


export function addFile(file, fileName) {
  return {
    type: types.ADD_FILE,
    file,
    fileName
  };
}

export function initiateUpload() {
  return {
    type: types.INITIATE_UPLOAD
  };
}

export function cancelUpload(id) {
  return {
    type: types.CANCEL_UPLOAD,
    id
  };
}
