import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

// Local Imports:
import HomeReducer from './reducers/home';
import About from './reducers/about';
import SponsorsReducer from './reducers/sponsors';
import PrismicReducer, { INIT_PRISMIC } from './reducers/prismic';

import { HomeMiddleware } from './middleware/homeMiddleware';
import { PrismicMiddleware } from './middleware/prismicMiddleware';
import { AboutMiddleware } from './middleware/aboutMiddleware';
import { SponsorsMiddleware } from './middleware/sponsorsMiddleware';

const rootReducers = combineReducers({
  about: About,
  home: HomeReducer,
  prismic: PrismicReducer,
  sponsors: SponsorsReducer,
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
      SponsorsMiddleware,
    ),
  ),
);

store.dispatch({
  type: INIT_PRISMIC,
});


export default store;
