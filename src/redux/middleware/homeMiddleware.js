import { HOME_PRISMIC_LOAD, HOME_PRISMIC_LOAD_START, HOME_PRISMIC_LOAD_PASS,HOME_PRISMIC_LOAD_FAIL } from "../reducers/home";

// eslint-disable-next-line import/prefer-default-export
export const HomeMiddleware = store => next => action => {
  switch (action.type) {
    case HOME_PRISMIC_LOAD:
        store.dispatch({
          type: HOME_PRISMIC_LOAD_START,
        });

        const state = store.getState();
        state.prismic.api.getSingle('blog_home').then(doc => {
          next({
            type: HOME_PRISMIC_LOAD_PASS,
            value: {
              imageUrl: doc.data.image.url,
              description: doc.data.description,
              headline: doc.data.headline,
            }
          });
        }).catch(error => {
          next({
            type: HOME_PRISMIC_LOAD_FAIL,
            value: error
          });
      })
      break;
    default: {
      next(action);
      break;
    }
  }
};
