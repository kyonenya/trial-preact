import { h } from 'preact';
import { useRoute } from 'wouter';
export const Home = () => {
    return (h("h1", null, "Home"));
};
export const SiteMap = () => {
    const [match, params] = useRoute('sitemap/:pagename');
    return (h("h1", null, "SiteMap"));
};
