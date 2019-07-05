export const INIT_PRISMIC = 'init_prismic'
export const INIT_PRISMIC_FAIL = 'init_prismic_fail'
export const INIT_PRISMIC_PASS = 'init_prismic_pass'

const DEFAULT_STATE = {
  errorMsg: '',
  api: null,
  endpoint: '',
  linkResolver: null,
  loading: true,
};

export default function PrismicReducer(state, action) {
  if (!state) {
    return DEFAULT_STATE;
  }

  switch (action.type) {
    case INIT_PRISMIC_PASS: 
      return {
        ...state,
        api: action.value.api,
        endpoint: action.value.endpoint,
        linkResolver: action.value.linkResolver,
        loading: false,
      }
    case INIT_PRISMIC_FAIL: 
      return {
        ...state,
        errorMsg: action.value.error
      }
    default:
      return state;
  }
}
