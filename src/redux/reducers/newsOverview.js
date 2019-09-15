export const NEWS_OVERVIEW_PRISMIC_LOAD = 'news_overview_prismic_load';
export const NEWS_OVERVIEW_PRISMIC_LOAD_START = 'news_overview_prismic_load_start';
export const NEWS_OVERVIEW_PRISMIC_LOAD_PASS = 'news_overview_prismic_load_pass';
export const NEWS_OVERVIEW_PRISMIC_LOAD_FAIL = 'news_overview_prismic_load_fail';

const DEFAULT_STATE = {
  loading: true,
  failed: false,
  title: {},
  description: {},
  items: [],
  page: 1,
};

export default function NewsOverviewReducer(state, action) {
  if (!state) {
    return DEFAULT_STATE;
  }

  switch (action.type) {
    case NEWS_OVERVIEW_PRISMIC_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case NEWS_OVERVIEW_PRISMIC_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        failed: true,
      };
    case NEWS_OVERVIEW_PRISMIC_LOAD_PASS:
      return {
        ...state,
        loading: false,
        title: action.value.title,
        description: action.value.description,
        items: action.value.items,
      };
    default:
      return state;
  }
}
