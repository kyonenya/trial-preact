import { h } from 'preact';
export const SearchItem = ({ result, onBookAdd }) => {
    const { title, authors, thumbnail } = result;
    return (h("div", { className: "book-search-item" },
        h("h2", { title: title }, title),
        h("div", { className: "authors", title: authors }, authors),
        thumbnail ? h("img", { src: thumbnail, alt: "" }) : null,
        h("div", { className: "add-book", onClick: () => onBookAdd(result) },
            h("span", null, "+"))));
};
