import test from 'tape';
import upsurge from '../src/upsurge';


// upsurge tests
// =============
test('upsurge factory returns an object when required properties are passed', assert => {
  const actual = typeof upsurge({
    signUrl: '/sign-auth',
    bucketName: 'bucketName',
    awsAccessId: 'AKIA4HJ709DF87HI'
  });
  const expected = 'object';

  assert.equal(actual, expected);
  assert.end();
});

test('upsurge will return false if none of the required properties is not supplied', assert => {
  const actual = upsurge({
    bucketName: 'bucketName',
    awsAccessId: 'AKIA4HJ709DF87HI'
  });
  const expected = false;

  assert.equal(actual, expected);
  assert.end();
});

test('upsurge will return false if signUrl is not supplied', assert => {
  const actual = upsurge({
    bucketName: 'bucketName',
    awsAccessId: 'AKIA4HJ709DF87HI'
  });
  const expected = false;

  assert.equal(actual, expected);
  assert.end();
});

test('upsurge will return false if bucketName is not supplied', assert => {
  const actual = upsurge({
    signUrl: '/sign-auth',
    awsAccessId: 'AKIA4HJ709DF87HI'
  });
  const expected = false;

  assert.equal(actual, expected);
  assert.end();
});

test('upsurge will return false if awsAccessId is not supplied', assert => {
  const actual = upsurge({
    signUrl: '/sign-auth',
    bucketName: 'bucketName'
  });
  const expected = false;

  assert.equal(actual, expected);
  assert.end();
});


// addFile tests
// =============
test('upsurge reveals the addFile function', assert => {
  const actual = typeof upsurge({
    signUrl: '/sign-auth',
    bucketName: 'bucketName',
    awsAccessId: 'AKIA4HJ709DF87HI'
  }).addFile;
  const expected = 'function';

  assert.equal(actual, expected);
  assert.end();
});

test('addFile returns false if fileName is not supplied', assert => {
  const up = upsurge({
    signUrl: '/sign-auth',
    bucketName: 'bucketName',
    awsAccessId: 'AKIA4HJ709DF87HI'
  });
  const actual = up.addFile({
    file: 'file'
  });
  const expected = false;

  assert.equal(actual, expected);
  assert.end();
});

test('addFile returns false if file is not supplied', assert => {
  const up = upsurge({
    signUrl: '/sign-auth',
    bucketName: 'bucketName',
    awsAccessId: 'AKIA4HJ709DF87HI'
  });
  const actual = up.addFile({
    fileName: 'upsurge.mp4'
  });
  const expected = false;

  assert.equal(actual, expected);
  assert.end();
});

test('addFile returns false if no parameters are supplied', assert => {
  const up = upsurge({
    signUrl: '/sign-auth',
    bucketName: 'bucketName',
    awsAccessId: 'AKIA4HJ709DF87HI'
  });
  const actual = up.addFile();
  const expected = false;

  assert.equal(actual, expected);
  assert.end();
});

// Upload tests
// ============

test('Upsurge reveals an upload function', assert => {
  const actual = typeof upsurge({
    signUrl: '/sign-auth',
    bucketName: 'bucketName',
    awsAccessId: 'AKIA4HJ709DF87HI'
  }).upload;
  const expected = 'function';

  assert.equal(actual, expected);
  assert.end()
});
