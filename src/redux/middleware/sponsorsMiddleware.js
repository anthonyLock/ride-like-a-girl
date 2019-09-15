import {
  SPONSORS_PRISMIC_LOAD,
  SPONSORS_PRISMIC_LOAD_START,
  SPONSORS_PRISMIC_LOAD_PASS,
  SPONSORS_PRISMIC_LOAD_FAIL,
} from '../reducers/sponsors';

// eslint-disable-next-line import/prefer-default-export
export const SponsorsMiddleware = store => next => action => {
  let state = {};
  switch (action.type) {
    case SPONSORS_PRISMIC_LOAD:
      store.dispatch({
        type: SPONSORS_PRISMIC_LOAD_START,
      });

      state = store.getState();
      state.prismic.api.getSingle('sponsors').then(doc => {
        next({
          type: SPONSORS_PRISMIC_LOAD_PASS,
          value: {
            title: doc.data.title,
            description: doc.data.sponsor_overview,
            body: doc.data.body,
          },
        });
      }).catch(error => {
        next({
          type: SPONSORS_PRISMIC_LOAD_FAIL,
          value: error,
        });
      });
      break;
    default: {
      next(action);
      break;
    }
  }
};
