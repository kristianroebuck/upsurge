import test from 'tape';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const middlewares = [ thunk ];

/**
 * Creates a mock of Redux store with middleware.
 */
export function mockStore(getState, expectedActions, end) {
  if (!Array.isArray(expectedActions)) {
    throw new Error('expectedActions should be an array of expected actions.');
  }
  if (typeof end !== 'undefined' && typeof done !== 'function') {
    throw new Error('end should either be undefined or function.');
  }

  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === 'function' ? getState() : getState;
      },

      dispatch(action) {
        const expectedAction = expectedActions.shift();

        try {
          // Change this for tape
          expect(action).toEqual(expectedAction);
          if (end && !expectedActions.length) {
            end();
          }
          return action;
        } catch (e) {
          end(e);
        }
      }
    }
  }

  const mockStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(mockStoreWithoutMiddleware);

  return mockStoreWithMiddleware();
}
