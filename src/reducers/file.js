import * as actions from '../actions';
import * as types from '../constants/action-types';

// state = {
//  status: 'uploading, complete, error, awaiting',
//  progress: '0.2',
//
// }
export default function file(state = {}, action) {
  switch (action.type) {
    case types.ADD_FILE:
      console.log('adding file', action.file, action.fileName);
      return {
        fileName: action.fileName,
        file: action.file
      };
    default:
      return state;
  }
}
