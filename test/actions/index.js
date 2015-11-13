import test from 'tape';
import * as types from '../../src/constants/action-types';
import * as actions from '../../src/actions';


test('addFile action returns an object containing an action type and a file', assert => {
  const file = 'my-file.mp4';
  const fileName = 'my-file.mp4';
  const expectedAction = {
    type: types.ADD_FILE,
    file,
    fileName
  };

  assert.deepEqual(actions.addFile(file, fileName), expectedAction);
  assert.end();
});

test('cancelUpload action returns an object containing an action type and an id', assert => {
  const id = 3;
  const expectedAction = {
    type: types.CANCEL_UPLOAD,
    id
  };

  assert.deepEqual(actions.cancelUpload(id), expectedAction);
  assert.end();
});

test('initiateUpload action returns an object containing an action type', assert => {
  const expectedAction = {
    type: types.INITIATE_UPLOAD
  };
  assert.deepEqual(actions.initiateUpload(), expectedAction);
  assert.end();
});
