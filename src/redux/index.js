import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

// Local Imports:
import { HomeMiddleware } from './middleware/homeMiddleware';
import HomeReducer from './reducers/home';
import PrismicReducer, { INIT_PRISMIC } from './reducers/prismic';
import { PrismicMiddleware } from './middleware/prismicMiddleware';

const rootReducers = combineReducers({
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
      PrismicMiddleware,
    ),
  ),
);

store.dispatch({
  type: INIT_PRISMIC,
});


export default store;
