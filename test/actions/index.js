import test from 'tape';
import nock from 'nock';
import { mockStore } from '../utils/mock-store';
import * as types from '../../src/constants/action-types';
import * as actions from '../../src/actions';


test('addFile action returns an object containing an action type and a file', assert => {
  const file = 'my-file.mp4';
  const fileName = 'my-file.mp4';
  const actual = actions.addFile(file, fileName);
  const expected = {
    type: types.ADD_FILE,
    file,
    fileName
  };

  assert.deepEqual(actual, expected);
  assert.end();
});

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

// test('signRequest()...', assert => {
//   const signature = '1A2B3C4D5E6F';
//   const action = {
//       type: types.SIGN_REQUEST_SUCCESS,
//       signature
//   }
//   nock('http://localhost:3000')
//     .post('/sign-auth-v4')
//     .reply(200, {signature});
//
//     const expectedActions = [action];
//     const store = mockStore({}, expectedActions, assert);
//     store.dispatch(actions.signRequest());
// });

test('signRequestFailure() returns an object containing a type of SIGN_REQUEST_FAILURE and an error', assert => {
  const actual = actions.signRequestFailure();
  const expected = {
    type: types.SIGN_REQUEST_FAILURE,
    error: true
  };
  assert.deepEqual(actual, expected);
  assert.end();
});

test('signRequestSuccess() returns an object containing a type of SIGN_REQUEST_SUCCESS and a signature', assert => {
  const signature = '93857207023498572002345987';
  const actual = actions.signRequestSuccess(signature);
  const expected = {
    type: types.SIGN_REQUEST_SUCCESS,
    signature
  };
  assert.deepEqual(actual, expected);
  assert.end();
});
