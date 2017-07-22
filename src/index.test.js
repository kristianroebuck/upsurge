import upsurge from './index';
import upsurgeCore from './UpsurgeCore/upsurge';

describe('upsurge', () => {
  it('should return an object and has its own `state` and `config` properties', () => {
    const up = upsurge();

    expect(typeof up).toBe('object');
    expect(up.hasOwnProperty('state')).toBe(true);
    expect(up.hasOwnProperty('config')).toBe(true);
  });
});
