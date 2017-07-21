export default function getConfig({
  awsKey = '69876',
  awsRegion = 'jhjh'
} = {}) {
  return {
    awsKey,
    awsRegion,
    test: 'test'
  };
}
