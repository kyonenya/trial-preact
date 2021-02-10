import { h } from 'preact';
import { useLocation } from 'react-router-dom';
export const App = () => {
    const location = useLocation();
    console.log(location);
    return (h("h1", null, "App"));
};
