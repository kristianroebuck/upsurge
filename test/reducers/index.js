import test from 'tape';
import upsurge from '../../src/reducers/upsurge';
import file from '../../src/reducers/file';
import * as types from '../../src/constants/action-types';


// File tests
test('UNKNOWN type returns the same state', assert => {
  const expected = {};
  const action = { type: types.UNKNOWN };
  const actual = file(expected, action);

  assert.deepEqual(actual, expected);
  assert.end();
});

test('ADD_FILE', assert => {
  const fileName = 'my-file.mp3';
  const file = 'my-file';
  const action = {
    type: types.ADD_FILE,
    file: files,
    fileName
  };
  const actual = file({}, action);

  assert.deepEqual(actual, action);
  assert.end();
});

// Upsurge tests
test('When an unknown type passed to the upsurge reducer the same state is returned', assert => {
  const state = {
    random: 'information'
  };
  const action = {
    type: types.UNKNOWN
  };
  const actual = upsurge(state, action);

  assert.deepEqual(actual, state);
  assert.end();
});

test('upsurge reducer INITIATE action', assert => {
  const action = {
    type: types.INITIATE,
    signUrl: '/sign-auth',
    bucketName: 'bucket-name',
    awsAccessId: 'AKIA54387DHSFJ'
  };
  const actual = upsurge({}, action);
  const expected = {
    signUrl: '/sign-auth',
    bucketName: 'bucket-name',
    awsAccessId: 'AKIA54387DHSFJ'
  };

  assert.deepEqual(actual, expected);
  assert.end();
});
