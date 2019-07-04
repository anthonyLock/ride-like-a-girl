import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Grid } from 'semantic-ui-react'



import Preview from './Preview';
import NotFound from './components/NotFound';
import Post from './components/Post';
import BlogHome from './components/BlogHome';
import Navigator from './components/misc/Navigator';

const App = (props) => (
  <Router>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={2}>
            <Navigator/>
          </Grid.Column>
          <Grid.Column width={14}>
            <Switch>
              <Redirect exact from="/blog/" to="/" />
              <Route exact path="/" render={routeProps => <BlogHome {...routeProps} prismicCtx={props.prismicCtx} />} />
              <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
              <Route exact path="/blog/:uid" render={routeProps => <Post {...routeProps} prismicCtx={props.prismicCtx} />} />
              <Route component={NotFound} />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  </Router>
);

export default App;
