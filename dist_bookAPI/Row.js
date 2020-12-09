import { h } from 'preact';
export const Row = ({ book, onDelete }) => {
    const { title, authors, memo } = book;
    return (h("div", { className: "book-row" },
        h("div", { className: "title" }, title),
        h("div", { className: "authors" }, authors),
        h("input", { className: "memo", type: "text", value: memo }),
        h("div", { className: "delete-row", onClick: onDelete }, "[\u00D7]")));
};
