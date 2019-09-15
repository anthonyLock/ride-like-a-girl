export const NEWS_ITEM_PRISMIC_LOAD = 'news_item_prismic_load';
export const NEWS_ITEM_PRISMIC_LOAD_START = 'news_item_prismic_load_start';
export const NEWS_ITEM_PRISMIC_LOAD_PASS = 'news_item_prismic_load_pass';
export const NEWS_ITEM_PRISMIC_LOAD_FAIL = 'news_item_prismic_load_fail';

const DEFAULT_STATE = {
  loading: true,
  failed: false,
  title: {},
  body: {},
  date: {},
};

export default function NewsItemReducer(state, action) {
  if (!state) {
    return DEFAULT_STATE;
  }

  switch (action.type) {
    case NEWS_ITEM_PRISMIC_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case NEWS_ITEM_PRISMIC_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        failed: true,
      };
    case NEWS_ITEM_PRISMIC_LOAD_PASS:
      return {
        ...state,
        loading: false,
        title: action.value.title,
        body: action.value.body,
        date: action.value.date,
      };
    default:
      return state;
  }
}
