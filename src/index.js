import { createStore } from 'redux';
import * as actions from './actions';
import upsurgeReducer from './reducers';


const upsurge = ({
    signUrl = undefined,
    bucketName = undefined,
    awsAccessId = undefined
  } = {}) => {


  // Ensure the required properties are passed in
  if (!signUrl || !bucketName || !awsAccessId) {
    return false;
  }

  const store = createStore(upsurgeReducer);

  function addFile({
      fileName = undefined,
      file = undefined
    } = {}) {

    // Ensure the required properties are passed in
    if (!fileName || !file) {
      return false;
    }

    return store.dispatch(actions.addFile('hello'));
  }


  return {
    addFile
  };
};


export default upsurge;
