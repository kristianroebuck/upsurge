import getConfig from './UpsurgeCore/config';
import getInitialState from './UpsurgeCore/state';
import upsurgeCore from './UpsurgeCore/upsurge';

function upsurge(options) {
  /* A factory function. State and config are attached directly to `upsurge`,
     everything else is accessed via a prototype link to the upsurgeCore object
  */
  const upsurge = Object.create(upsurgeCore);
  upsurge.state = getInitialState();
  upsurge.config = getConfig(options);

  return upsurge;
}

export default upsurge;
