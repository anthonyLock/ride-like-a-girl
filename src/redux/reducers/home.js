export const HOME_PRISMIC_LOAD = 'home_prismic_load'
export const HOME_PRISMIC_LOAD_START = 'home_prismic_load_start'
export const HOME_PRISMIC_LOAD_PASS = 'home_prismic_load_pass'
export const HOME_PRISMIC_LOAD_FAIL = 'home_prismic_load_fail'

const DEFAULT_STATE = {
  loading: false,
  failed: false,
  imageUrl: '',
  headline: {},
  description: {},
};

export default function HomeReducer(state, action) {
  if (!state) {
    return DEFAULT_STATE;
  }

  switch (action.type) {
    case HOME_PRISMIC_LOAD_START: 
      return {
        ...state,
        loading:true,
      }
    case HOME_PRISMIC_LOAD_FAIL: 
      return {
        ...state,
        loading: false,
        failed: true,
      }
    case HOME_PRISMIC_LOAD_PASS: 
      return {
        ...state,
        loading:false,
        imageUrl: action.value.imageUrl,
        description: action.value.description,
        headline: action.value.headline,
      }
    default:
      return state;
  }
}
