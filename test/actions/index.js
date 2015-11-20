import test from 'tape';
import * as types from '../../src/constants/action-types';
import * as actions from '../../src/actions';


test('addFile action returns an object containing an action type and a file', assert => {
  const file = 'my-file.mp4';
  const fileName = 'my-file.mp4';
  const expected = {
    type: types.ADD_FILE,
    file,
    fileName
  };

  assert.deepEqual(actions.addFile(file, fileName), expected);
  assert.end();
});

// test('initiateUpload action returns an object containing an action type', assert => {
//   const expectedAction = {
//     type: types.INITIATE_UPLOAD
//   };
//   assert.deepEqual(actions.initiateUpload(), expectedAction);
//   assert.end();
// });

test('initiate action returns type `types.INITIATE and the options object', assert => {
  const signUrl = '/sign-auth';
  const bucketName = 'bucket-name';
  const awsAccessId = 'AKIA54387DHSFJ';
  const actual = actions.initiate({
    signUrl,
    bucketName,
    awsAccessId
  });
  const expected = {
    type: types.INITIATE,
    options: {
      signUrl,
      bucketName,
      awsAccessId
    }
  };

  assert.deepEqual(actual, expected);
  assert.end();
});
