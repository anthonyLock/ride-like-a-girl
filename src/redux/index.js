import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

// Local Imports:
import HomeReducer from './reducers/home';
import About from './reducers/about';
import PrismicReducer, { INIT_PRISMIC } from './reducers/prismic';

import { HomeMiddleware } from './middleware/homeMiddleware';
import { PrismicMiddleware } from './middleware/prismicMiddleware';
import {AboutMiddleware} from './middleware/aboutMiddleware';

const rootReducers = combineReducers({
  about: About,
  home: HomeReducer,
  prismic: PrismicReducer,
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancer(
    applyMiddleware(
      HomeMiddleware,
      AboutMiddleware,
      PrismicMiddleware,
    ),
  ),
);

store.dispatch({
  type: INIT_PRISMIC,
});


export default store;
