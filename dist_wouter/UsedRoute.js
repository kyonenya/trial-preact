import { h } from 'preact';
import { useRoute } from "wouter";
export const UsedRoute = () => {
    // `match` is boolean
    const [match, params] = useRoute("/users/:id");
    return h("p", null,
        "Hi, this is: ",
        params.id,
        " and match is ",
        match);
};
