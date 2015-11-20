import test from 'tape';
import upsurge from '../../src/reducers/upsurge';
import fileReducer from '../../src/reducers/file';
import * as types from '../../src/constants/action-types';


// File tests
test('UNKNOWN type returns the same state', assert => {
  const expected = {};
  const action = { type: types.UNKNOWN };
  const actual = fileReducer(expected, action);

  assert.deepEqual(actual, expected);
  assert.end();
});

test('ADD_FILE', assert => {
  const file = 'my-file';
  const fileName = 'my-file.mp3';
  const expected = {file, fileName};
  const action = Object.assign({},
    {file, fileName},
    {type: types.ADD_FILE}
  );
  const actual = fileReducer({}, action);

  assert.deepEqual(actual, expected);
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
