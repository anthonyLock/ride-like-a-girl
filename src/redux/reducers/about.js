export const ABOUT_PRISMIC_LOAD = 'about_prismic_load'
export const ABOUT_PRISMIC_LOAD_START = 'about_prismic_load_start'
export const ABOUT_PRISMIC_LOAD_PASS = 'about_prismic_load_pass'
export const ABOUT_PRISMIC_LOAD_FAIL = 'about_prismic_load_fail'

const DEFAULT_STATE = {
  loading: false,
  failed: false,
  title: {},
  body: {},
};

export default function AboutReducer(state, action) {
  if (!state) {
    return DEFAULT_STATE;
  }

  switch (action.type) {
    case ABOUT_PRISMIC_LOAD_START: 
      return {
        ...state,
        loading:true,
      }
    case ABOUT_PRISMIC_LOAD_FAIL: 
      return {
        ...state,
        loading: false,
        failed: true,
      }
    case ABOUT_PRISMIC_LOAD_PASS: 
      return {
        ...state,
        loading:false,
        title: action.value.title,
        body: action.value.body,
      }
    default:
      return state;
  }
}
