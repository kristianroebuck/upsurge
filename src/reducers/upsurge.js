import * as actions from '../actions';
import * as types from '../constants/action-types';


export default function upsurge(state = {}, action) {
  switch (action.type) {
    case types.INITIATE:
      return {
        signUrl: action.signUrl,
        bucketName: action.bucketName,
        awsAccessId: action.awsAccessId
      };

    case types.SIGN_REQUEST_SUCCESS:
      return {
        signature: action.signature
      };

    default:
      return state;
  }
}
