import { h } from 'preact';
import { BookRow } from './BookRow';
const dummyBooks = [
    {
        id: 1,
        title: 'はじめてのReact',
        authors: 'ダミー',
        memo: '',
    },
    {
        id: 2,
        title: 'React Hooks入門',
        authors: 'ダミー',
        memo: '',
    },
    {
        id: 3,
        title: '実践Reactアプリケーション開発',
        authors: 'ダミー',
        memo: '',
    },
];
export const App = () => {
    return (h("div", { className: "App" },
        h("nav", { className: "nav" },
            h("h1", null, "\u8AAD\u307F\u305F\u3044\u672C\u30EA\u30B9\u30C8"),
            h("div", { className: "button-like" }, "\u672C\u3092\u8FFD\u52A0")),
        h("main", { className: "main" }, dummyBooks.map((book) => {
            return (h(BookRow, { book: book, key: book.id }));
        }))));
};
