import Prismic from 'prismic-javascript';

import {
  NEWS_OVERVIEW_PRISMIC_LOAD,
  NEWS_OVERVIEW_PRISMIC_LOAD_START,
  NEWS_OVERVIEW_PRISMIC_LOAD_PASS,
  NEWS_OVERVIEW_PRISMIC_LOAD_FAIL,
} from '../reducers/newsOverview';


// eslint-disable-next-line import/prefer-default-export
export const NewsGetOverview = store => next => action => {
  let state = {};
  switch (action.type) {
    case NEWS_OVERVIEW_PRISMIC_LOAD:
      store.dispatch({
        type: NEWS_OVERVIEW_PRISMIC_LOAD_START,
      });

      state = store.getState();
      state.prismic.api.getSingle('news_overview').then(doc => {
        state.prismic.api.query(
          Prismic.Predicates.at('document.type', 'news_item'),
          {
            orderings: '[my.post.date desc]',
            pageSize: 10,
            page: action.value.pageNumber,
          },
        ).then(items => {
          next({
            type: NEWS_OVERVIEW_PRISMIC_LOAD_PASS,
            value: {
              title: doc.data.title,
              description: doc.data.description,
              items: items.results,
            },
          });
        });
      }).catch(error => {
        next({
          type: NEWS_OVERVIEW_PRISMIC_LOAD_FAIL,
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
