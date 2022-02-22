import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducers from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
let store;

export default (() => {
  if (store) return store;

  store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
})();
