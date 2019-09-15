import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { HOME_PRISMIC_LOAD } from './redux/reducers/home';
import { ABOUT_PRISMIC_LOAD } from './redux/reducers/about';

import NotFound from './components/NotFound';
import Navigator from './components/misc/Navigator';
import Loader from './components/misc/Loader';
import Overview from './components/news/overview';
import NewsItem from './components/news/Item';

import Home from './components/home/Home';
import About from './components/about/About';
import Sponsors from './components/sponsors/Sponsors';
import { SPONSORS_PRISMIC_LOAD } from './redux/reducers/sponsors';
import { NEWS_OVERVIEW_PRISMIC_LOAD } from './redux/reducers/newsOverview';
import { NEWS_ITEM_PRISMIC_LOAD } from './redux/reducers/newsItem';

const App = ({
  loading,
  loadHome,
  loadAbout,
  loadSponsors,
  loadNewsOverview,
  loadItem,
}) => {
  if (loading) {
    return (<Loader />);
  }
  return (
    <div>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={5}>
            <Navigator />
          </Grid.Column>
          <Grid.Column width={11}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  loadHome();
                  return (<Home />);
                }
              }
              />
              <Route
                exact
                path="/about/:id"
                render={({ match }) => {
                  loadAbout(match.params.id);
                  return (<About />);
                }}
              />
              <Route
                exact
                path="/sponsors"
                render={() => {
                  loadSponsors();
                  return (<Sponsors />);
                }}
              />
              <Route
                exact
                path="/news"
                render={() => {
                  loadNewsOverview(1);
                  return (<Overview />);
                }}
              />
              <Route
                exact
                path="/news/:id"
                render={({ match }) => {
                  loadItem(match.params.id);
                  return (<NewsItem />);
                }}
              />
              <Route component={NotFound} />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};


const mapStateToProps = state => ({
  loading: state.prismic.loading,
});

const mapDispatchToProps = dispatch => ({
  loadHome: () => dispatch({
    type: HOME_PRISMIC_LOAD,
  }),
  loadSponsors: () => dispatch({
    type: SPONSORS_PRISMIC_LOAD,
  }),
  loadNewsOverview: (page) => dispatch({
    type: NEWS_OVERVIEW_PRISMIC_LOAD,
    value: {
      pageNumber: page,
    },
  }),
  loadAbout: (id) => dispatch({
    type: ABOUT_PRISMIC_LOAD,
    value: {
      id,
    },
  }),
  loadItem: (id) => dispatch({
    type: NEWS_ITEM_PRISMIC_LOAD,
    value: {
      id,
    },
  }),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
