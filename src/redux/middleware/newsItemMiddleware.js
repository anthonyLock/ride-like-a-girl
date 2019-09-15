import {
  NEWS_ITEM_PRISMIC_LOAD,
  NEWS_ITEM_PRISMIC_LOAD_START,
  NEWS_ITEM_PRISMIC_LOAD_PASS,
  NEWS_ITEM_PRISMIC_LOAD_FAIL,
} from '../reducers/newsItem';

// eslint-disable-next-line import/prefer-default-export
export const NewsItemMiddleware = store => next => action => {
  let state = {};
  switch (action.type) {
    case NEWS_ITEM_PRISMIC_LOAD:
      store.dispatch({
        type: NEWS_ITEM_PRISMIC_LOAD_START,
      });

      state = store.getState();
      state.prismic.api.getByUID('news_item', action.value.id).then(doc => {
        next({
          type: NEWS_ITEM_PRISMIC_LOAD_PASS,
          value: {
            title: doc.data.title,
            date: doc.data.date,
            body: doc.data.body,
          },
        });
      }).catch(error => {
        next({
          type: NEWS_ITEM_PRISMIC_LOAD_FAIL,
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
