import { h } from 'preact';
export const BookRow = ({ book }) => {
    const { title, authors, memo } = book;
    return (h("div", { className: "book-row" },
        h("div", { className: "title" }, title),
        h("div", { className: "authors" }, authors),
        h("input", { className: "memo", type: "text", value: memo }),
        h("div", { className: "delete-row" }, "\u524A\u9664")));
};
