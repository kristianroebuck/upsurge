import getConfig from './config';
import getInitialState from './state';
import upsurgeCore from './upsurge';

function upsurge(options) {
  const upsurge = Object.create(upsurgeCore);
  upsurge.state = getInitialState();
  upsurge.config = getConfig(options);

  return upsurge;
}

export default upsurge;
