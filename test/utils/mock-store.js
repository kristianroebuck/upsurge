import test from 'tape';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];

/**
 * Creates a mock of Redux store with middleware.
 */
export function mockStore(getState, expectedActions, assert) {

  if (!Array.isArray(expectedActions)) {
    throw new Error('expectedActions should be an array of expected actions.');
  }
  if (typeof assert.end !== 'undefined' && typeof assert.end !== 'function') {
    throw new Error('assert.end should either be undefined or function.');
  }

  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === 'function' ? getState() : getState;
      },

      dispatch(action) {
        const expectedAction = expectedActions.shift();

        try {
          assert.deepEqual(action, expectedAction);
          if (!expectedActions.length) {
            assert.end();
          }
          return action;
        } catch (e) {
          assert.end(e);
        }
      }
    }
  }

  const mockStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(mockStoreWithoutMiddleware);

  return mockStoreWithMiddleware();
}
