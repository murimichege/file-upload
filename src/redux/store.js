import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';

import reducer from './modules/index';
// import rootSaga from '../sagas/index';
import rootEpic from '../epics/index';

// const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(
    ...[
      // sagaMiddleware,
      epicMiddleware,
    ],
  ),
);
// sagaMiddleware.run(rootSaga);
epicMiddleware.run(rootEpic);
export default store;
