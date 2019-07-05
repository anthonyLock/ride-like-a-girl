import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';

import NotFound from './components/NotFound';
import Navigator from './components/misc/Navigator';
import Home from './components/home/Home';
import { HOME_PRISMIC_LOAD } from './redux/reducers/home';
import Loader from './components/Loader';

const App = ({
  loading,
  loadHome,
}) => {
  if (loading) {
    return(<Loader/>)
  } else {
    return(
      <div>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={2}>
                <Navigator/>
              </Grid.Column>
              <Grid.Column width={14}>
                <Switch>
                  <Route exact path="/" render={() =>{
                      loadHome()
                      return(<Home />)
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
}


const mapStateToProps = state => ({
  loading: state.prismic.loading,
});

const mapDispatchToProps = dispatch => ({
  loadHome: () => dispatch({
    type: HOME_PRISMIC_LOAD,
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
