import { createStore } from 'redux';
import * as actions from './actions';
import reducers from './reducers';


const upsurge = ({
    signUrl = undefined,
    bucketName = undefined,
    awsAccessId = undefined
  } = {}) => {


  // Ensure the required properties are passed in
  if (!signUrl || !bucketName || !awsAccessId) {
    return false;
  }


  function addFile({
      fileName = undefined,
      file = undefined
    } = {}) {

    // Ensure the required properties are passed in
    if (!fileName || !file) {
      return false;
    }

    return store.dispatch(actions.addFile('hello', 'hello'));
  }

  const store = createStore(reducers);
  // store.dispatch(actions.INITIATE({}))

  return {
    addFile
  };
};


export default upsurge;
