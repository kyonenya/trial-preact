import { h } from 'preact';
import { Row } from './Row';
const dummyBooks = [
    {
        id: 1,
        title: 'はじめてのReact',
        authors: 'ダミー',
        memo: 'メモ',
    },
    {
        id: 2,
        title: 'React Hooks入門',
        authors: 'ダミー',
        memo: 'メモ',
    },
    {
        id: 3,
        title: '実践Reactアプリケーション開発',
        authors: 'ダミー',
        memo: 'メモ',
    },
];
export const App = () => {
    return (h("div", { className: "App" },
        h("nav", { className: "nav" },
            h("h1", null, "\u8AAD\u307F\u305F\u3044\u672C\u30EA\u30B9\u30C8"),
            h("div", { className: "button-like" }, "[Add]")),
        h("main", { className: "main" }, dummyBooks.map((book) => {
            return (h(Row, { book: book, key: book.id }));
        }))));
};
