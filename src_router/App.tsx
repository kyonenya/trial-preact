import { h, Fragment } from 'preact';
import { Route, Switch } from 'react-router';

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
        <Route path="/about">
          <h2>About</h2>
        </Route>
      </Switch>
    </Fragment>
  );
}
