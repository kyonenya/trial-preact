import { h } from 'preact';
import { Home, SiteMap } from './components/pages';
import { Route, Link } from 'wouter';

export const App = () => {
  return (
    <div>
      <Link href="/sitemap">SiteMap</Link>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/sitemap">
        <SiteMap />
      </Route>
    </div>
  );
}
