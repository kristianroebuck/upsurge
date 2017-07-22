import getConfig from './config';

describe('getConfig', () => {
  it('should return a full set of configuration options', () => {
    const config = getConfig();

    expect(config).toMatchSnapshot();
  });
});
