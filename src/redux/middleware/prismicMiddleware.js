import { INIT_PRISMIC, INIT_PRISMIC_PASS, INIT_PRISMIC_FAIL } from "../reducers/prismic";
import PrismicConfig from './prismic-configuration';
import Prismic from 'prismic-javascript';


// eslint-disable-next-line import/prefer-default-export
export const PrismicMiddleware = store => next => action => {
  switch (action.type) {
    case INIT_PRISMIC:
        const accessToken = PrismicConfig.accessToken;
        Prismic.api(PrismicConfig.apiEndpoint, { accessToken }).then(api => {
          next({
            type: INIT_PRISMIC_PASS,
            value: {
              api,
              endpoint: PrismicConfig.apiEndpoint,
              linkResolver: PrismicConfig.linkResolver,
            }
          });
        }).catch(error => {
          next({
            type: INIT_PRISMIC_FAIL,
            value: {
              error,
            }
          })
        });
      break;
    default: {
      next(action);
      break;
    }
  }
};
