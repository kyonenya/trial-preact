import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { SearchItem } from './SearchItem';
const dummyResults = [
    {
        title: 'はじめてのReact',
        authors: '山田太郎',
        thumbnail: '',
    },
    {
        title: 'React Hooks入門',
        authors: '山田次郎',
        thumbnail: '',
    },
    {
        title: '実践Reactアプリケーション開発',
        authors: '山田三郎',
        thumbnail: '',
    },
];
function buildSearchUrl(title, author, maxResults) {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const conditions = [];
    if (title) {
        conditions.push(`intitle:${title}`);
    }
    if (author) {
        conditions.push(`inauthor:${author}`);
    }
    return url + conditions.join('+') + `&maxResults=${maxResults}`;
}
function extractResults(json) {
    const items = json.items;
    return items.map((item) => {
        const volumeInfo = item.volumeInfo;
        return {
            title: volumeInfo.title,
            authors: volumeInfo.authors ? volumeInfo.authors.join(', ') : '',
            thumbnail: volumeInfo.imageLinks
                ? volumeInfo.imageLinks.smallThumbnail
                : '',
        };
    });
}
export const SearchDialog = ({ onBookAdd, isSearching }) => {
    const [results, setResults] = useState(dummyResults);
    const [title, setTitle] = useState('');
    useEffect(() => {
        fetch(buildSearchUrl(title, '', 4))
            .then((res) => res.json())
            .then((json) => extractResults(json))
            .then((results) => setResults(results));
    });
    const handleTitleChange = (e) => {
        const inputElement = e.target;
        setTitle(inputElement.value);
        //    alert(inputElement.value);
    };
    const handleSearchClick = () => {
        if (!title)
            return alert('検索ワードを入力して下さい');
        // TODO
    };
    const handleBookAdd = () => { };
    return (h("div", { className: "dialog", style: { display: isSearching ? 'block' : 'none' } },
        h("div", { className: "operation" },
            h("div", { className: "conditions" },
                h("input", { type: "text", placeholder: "\u30BF\u30A4\u30C8\u30EB\u3067\u691C\u7D22", onChange: handleTitleChange }),
                h("input", { type: "text", placeholder: "\u8457\u8005\u540D\u3067\u691C\u7D22" })),
            h("div", { className: "button-like", onClick: handleSearchClick }, "\u691C\u7D22")),
        h("div", { className: "search-results" }, results.map((result, i) => {
            return h(SearchItem, { result: result, onBookAdd: onBookAdd, key: i });
        }))));
};
