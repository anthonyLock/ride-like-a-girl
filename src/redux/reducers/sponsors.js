export const SPONSORS_PRISMIC_LOAD = 'sponsors_prismic_load';
export const SPONSORS_PRISMIC_LOAD_START = 'sponsors_prismic_load_start';
export const SPONSORS_PRISMIC_LOAD_PASS = 'sponsors_prismic_load_pass';
export const SPONSORS_PRISMIC_LOAD_FAIL = 'sponsors_prismic_load_fail';

const DEFAULT_STATE = {
  loading: true,
  failed: false,
  title: {},
  body: {},
  description: {},
};

export default function SponsorsReducer(state, action) {
  if (!state) {
    return DEFAULT_STATE;
  }

  switch (action.type) {
    case SPONSORS_PRISMIC_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case SPONSORS_PRISMIC_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        failed: true,
      };
    case SPONSORS_PRISMIC_LOAD_PASS:
      return {
        ...state,
        loading: false,
        title: action.value.title,
        body: action.value.body,
        description: action.value.description,
      };
    default:
      return state;
  }
}
