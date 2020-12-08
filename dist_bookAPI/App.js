import { h } from 'preact';
const dummyBooks = [
    {
        id: 1,
        title: "はじめてのReact",
        authors: "ダミー",
        memo: ""
    },
    {
        id: 2,
        title: "React Hooks入門",
        authors: "ダミー",
        memo: ""
    },
    {
        id: 3,
        title: "実践Reactアプリケーション開発",
        authors: "ダミー",
        memo: ""
    }
];
export const App = () => {
    return (h("div", { className: "App" },
        h("section", { className: "nav" },
            h("h1", null, "\u8AAD\u307F\u305F\u3044\u672C\u30EA\u30B9\u30C8"),
            h("div", { className: "button-like" }, "\u672C\u3092\u8FFD\u52A0")),
        h("section", { className: "main" },
            h("h1", null, "\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3092\u59CB\u3081\u307E\u3057\u3087\u3046"))));
};
