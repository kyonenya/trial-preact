import { h, Fragment } from 'preact';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { Anchors } from './Anchors';

export const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/">
          <h2>Home</h2>
        </Route>
        <Route path="/works">
          <h2>Works</h2>
        </Route>      
        <Route>
          <h2>404</h2>
        </Route>
      </Switch>
    </Fragment>
  );
}
