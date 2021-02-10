import { h } from 'preact';
import { useRoute } from 'wouter';

export const Home = () => {
  return (
    <h1>Home</h1>
  );
};

export const SiteMap = () => {
  const [match, params] = useRoute('/sitemap/:pagename');
  console.log(match, params);
  return (
    <h1>SiteMap</h1>
  );
};
