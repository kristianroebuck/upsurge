import * as actions from '../actions';
import * as types from '../constants/action-types';


export default function upsurgeReducer(state = {}, action) {
  switch (action.type) {
    case types.ADD_FILE:
      console.log('adding file');
      return state;
    default:
      return state
  }
}
