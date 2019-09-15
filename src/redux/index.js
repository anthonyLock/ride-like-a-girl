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
import NewsOverviewReducer from './reducers/newsOverview';
import NewsItemReducer from './reducers/newsItem';

import PrismicReducer, { INIT_PRISMIC } from './reducers/prismic';

import { HomeMiddleware } from './middleware/homeMiddleware';
import { PrismicMiddleware } from './middleware/prismicMiddleware';
import { AboutMiddleware } from './middleware/aboutMiddleware';
import { SponsorsMiddleware } from './middleware/sponsorsMiddleware';
import { NewsGetOverview } from './middleware/newsMiddleware';
import { NewsItemMiddleware } from './middleware/newsItemMiddleware';

const rootReducers = combineReducers({
  about: About,
  home: HomeReducer,
  prismic: PrismicReducer,
  sponsors: SponsorsReducer,
  newsOverview: NewsOverviewReducer,
  newsItem: NewsItemReducer,
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
      NewsGetOverview,
      NewsItemMiddleware,
    ),
  ),
);

store.dispatch({
  type: INIT_PRISMIC,
});


export default store;
