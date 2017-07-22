function getConfig({
  accessControlPolicy = 'public-read',
  awsKey,
  awsRegion = 'us-east-1',
  bucket,
  signerUrl
} = {}) {
  return {
    awsKey,
    awsRegion,
    bucket,
    s3BaseUrl: `https://${bucket}.s3.amazonaws.com/`,
    signerUrl
  };
}

export default getConfig;
