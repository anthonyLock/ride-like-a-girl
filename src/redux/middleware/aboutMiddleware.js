import { 
  ABOUT_PRISMIC_LOAD, 
  ABOUT_PRISMIC_LOAD_START, 
  ABOUT_PRISMIC_LOAD_PASS,
  ABOUT_PRISMIC_LOAD_FAIL } from "../reducers/about";

// eslint-disable-next-line import/prefer-default-export
export const AboutMiddleware = store => next => action => {
  switch (action.type) {
    case ABOUT_PRISMIC_LOAD:
        store.dispatch({
          type: ABOUT_PRISMIC_LOAD_START,
        });

        const state = store.getState();
        state.prismic.api.getByUID('about', action.value.id).then(doc => {
          next({
            type: ABOUT_PRISMIC_LOAD_PASS,
            value: {
              title: doc.data.title,
              body: doc.data.body,
            }
          });
        }).catch(error => {
          next({
            type: ABOUT_PRISMIC_LOAD_FAIL,
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
