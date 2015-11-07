import test from 'tape';
import {
  computeS3SignatureV2,
  computeS3SignatureV4
} from '../../src/server/s3';


test('computeS3Signature signs data with AWS_SECRET', t => {
  const data = 'POST \n'

  const expected = 'tvTnVFgmrgMn40zWwH6n1byqV18=';
  const actual = computeS3SignatureV2(data);
  t.equal(expected, actual);
  t.end();
});

test('computeS3Signature signs data with AWS_SECRET', t => {
  const data = 'POST \n'

  const expected = 'g9HANtsma931ZcjtrUda5s1A5uUBKEJI21vvBKyKQ2E=';
  const actual = computeS3SignatureV4(data);
  t.equal(expected, actual);
  t.end();
});
