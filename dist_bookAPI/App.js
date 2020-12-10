import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Row } from './Row';
import { SearchDialog } from './SearchDialog';
const dummyBooks = [
    {
        id: 1,
        title: 'はじめてのReact',
        authors: '山田太郎',
        memo: 'メモ',
    },
    {
        id: 2,
        title: 'React Hooks入門',
        authors: '山田次郎',
        memo: 'メモ',
    },
    {
        id: 3,
        title: '実践Reactアプリケーション開発',
        authors: '山田三郎',
        memo: 'メモ',
    },
];
export const App = () => {
    const [books, setBooks] = useState(dummyBooks);
    const [isSearching, setIsSearching] = useState(true);
    const handleDelete = (id) => {
        setBooks((prevBooks) => {
            return prevBooks.filter((book) => book.id !== id);
        });
    };
    return (h("div", { className: "App" },
        h("nav", { className: "nav" },
            h("h1", null, "\u8AAD\u307F\u305F\u3044\u672C\u30EA\u30B9\u30C8"),
            h("div", { className: "button-like", onClick: () => setIsSearching((prev) => !prev) }, "[Add]")),
        h("main", { className: "main" }, books.map((book) => {
            return (h(Row, { book: book, key: book.id, onDelete: () => handleDelete(book.id) }));
        })),
        h(SearchDialog, { isSearching: isSearching, onBookAdd: () => alert('added') })));
};
