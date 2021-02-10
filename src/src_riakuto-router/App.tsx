import { h } from 'preact';
import { Home, SiteMap } from './components/pages';
import { Switch, Route, Link, Redirect } from 'wouter';

export const App = () => {
  return (
    <div>
      <Link href="/sitemap">SiteMap</Link>
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/sitemap/:pagename">
          <SiteMap />
        </Route>

      </Switch>
    </div>
  );
}
