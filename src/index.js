import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
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

    return store.dispatch(actions.addFile(file, fileName));
  }

  function upload() {
    store.dispatch(actions.initiateUpload());
  }

  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  const store = createStoreWithMiddleware(reducers);
  store.dispatch(actions.initiate());

  return {
    addFile,
    upload
  };
};


export default upsurge;
