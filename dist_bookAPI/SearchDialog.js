import { h } from 'preact';
import { useState } from 'preact/hooks';
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
export const SearchDialog = () => {
    const [results, setResults] = useState(dummyResults);
    const [title, setTitle] = useState('');
    const handleTitleChange = (e) => {
        const inputElement = e.target;
        setTitle(inputElement.value);
    };
    return (h("div", { className: "dialog" },
        h("div", { className: "operation" },
            h("div", { className: "conditions" },
                h("input", { type: "text", placeholder: "\u30BF\u30A4\u30C8\u30EB\u3067\u691C\u7D22", onChange: handleTitleChange }),
                h("input", { type: "text", placeholder: "\u8457\u8005\u540D\u3067\u691C\u7D22" })),
            h("div", { className: "button-like" }, "\u691C\u7D22")),
        h("div", { className: "search-results" }, results.map((result, i) => {
            return (h(SearchItem, { result: result, key: i }));
        }))));
};
