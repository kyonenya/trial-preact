import { h, FunctionComponent as FC } from 'preact';
import { useState } from 'preact/hooks';
import { SearchItem } from './SearchItem';
import { resultable } from './types';

const dummyResults: resultable[] = [
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
  const [results, setResults] = useState<resultable[]>(dummyResults);

  return (
    <div className="dialog">
      <div className="operation">
        <div className="conditions">
          <input type="text"
            placeholder="タイトルで検索"
//            onChange={handleTitleInputChange}
          />
          <input type="text"
            placeholder="著者名で検索"
//            onChange={handleAuthorInputChange}
          />
        </div>
        <div className="button-like" 
//          onClick={handleSearchClick}
        >
          検索
        </div>
      </div>
      <div className="search-results">
        {results.map((result, i) => {
          return (
            <SearchItem 
              result={result}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
