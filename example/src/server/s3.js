import crypto from 'crypto';


// AWS Signature Version 2
export function computeS3SignatureV2(dataToSign) {
  return crypto
          .createHmac('sha1', 'AWS_SECRET')
          .update(dataToSign)
          .digest('base64');
}

// AWS Signature Version 4
export function computeS3SignatureV4(dataToSign) {
  return crypto
          .createHmac('sha256', 'AWS_SECRET')
          .update(dataToSign)
          .digest('base64');
}
