import * as actions from '../actions';
import * as types from '../constants/action-types';


export default function upsurge(state = {}, action) {
  switch (action.type) {
    case types.INITIATE:
      return {
        
      };

    default:
      return state;
  }
}
