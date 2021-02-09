import { h } from 'preact';
import { useLocation } from "wouter";
export const CurrentLocation = () => {
    const [location, setLocation] = useLocation();
    console.log(location);
    return (h("div", null,
        h("p", null, `The current page is: ${location}`),
        h("a", { onClick: () => setLocation("/somewhere") }, "Click to update")));
};
