import test from 'tape';
import * as types from '../../src/constants/action-types';
import * as actions from '../../src/actions';


test('addFile action returns an object containing an action type and a file', t => {
  const file = 'my-file.mp4';
  const expectedAction = {
    type: types.ADD_FILE,
    file
  };

  t.deepEqual(actions.addFile(file), expectedAction);
  t.end();
});

test('cancelUpload action returns an object containing an action type and an id', t => {
  const id = 3;
  const expectedAction = {
    type: types.CANCEL_UPLOAD,
    id
  };

  t.deepEqual(actions.cancelUpload(id), expectedAction);
  t.end();
});

test('initiateUpload action returns an object containing an action type', t => {
  const expectedAction = {
    type: types.INITIATE_UPLOAD
  };
  t.deepEqual(actions.initiateUpload(), expectedAction);
  t.end();
});
