import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import NotFound from './components/NotFound';
import Navigator from './components/misc/Navigator';
import Home from './components/home/Home';
import { HOME_PRISMIC_LOAD } from './redux/reducers/home';
import { ABOUT_PRISMIC_LOAD } from './redux/reducers/about';
import Loader from './components/misc/Loader';

import About from './components/about/about';

const App = ({
  loading,
  loadHome,
  loadAbout,
}) => {
  if (loading) {
    return(<Loader/>)
  } else {
    return(
      <div>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={5}>
                <Navigator/>
              </Grid.Column>
              <Grid.Column width={11}>
                <Switch>
                  <Route exact path="/" render={() =>{
                      loadHome()
                      return(<Home />)
                    } 
                  }
                  />
                  <Route exact path="/about/:id" render={({match}) =>{
                      loadAbout(match.params.id)
                      return(<About />)
                    } 
                  }
                  />
                  <Route component={NotFound} />
                </Switch>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
  return (
    <div>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={2}>
            <Navigator />
          </Grid.Column>
          <Grid.Column width={14}>
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
                render={() => {
                  return (<About />);
                }
              }
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
  loadAbout: (id) => dispatch({
    type: ABOUT_PRISMIC_LOAD,
    value: {
      id: id,
    }
  }),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
