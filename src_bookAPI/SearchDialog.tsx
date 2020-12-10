import { h, FunctionComponent as FC } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';
import { SearchItem } from './SearchItem';
import { resultable } from './types';

const dummyResults: resultable[] = [
  {
    title: 'はじめてのReact',
    authors: '山田太郎',
    thumbnail: 'http://books.google.com/books/content?id=_OKoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  },
  {
    title: 'React Hooks入門',
    authors: '佐藤次郎',
    thumbnail: 'http://books.google.com/books/content?id=2X23DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  },
  {
    title: '実践Reactアプリケーション開発',
    authors: '鈴木三郎',
    thumbnail: 'http://books.google.com/books/content?id=2X23DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  },
  {
    title: 'React&Next.js入門',
    authors: '田中四郎',
    thumbnail: 'http://books.google.com/books/content?id=_OKoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  },
];

function buildSearchUrl(
  title: string,
  author: string,
  maxResults: number
): string {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=';
  const conditions: string[] = [];
  if (title) {
    conditions.push(`intitle:${title}`);
  }
  if (author) {
    conditions.push(`inauthor:${author}`);
  }
  return url + conditions.join('+') + `&maxResults=${maxResults}`;
}

function extractResults(json: any): resultable[] {
  const items: any[] = json.items;
  return items.map((item: any) => {
    const volumeInfo: any = item.volumeInfo;
    return {
      title: volumeInfo.title,
      authors: volumeInfo.authors ? volumeInfo.authors.join(', ') : '',
      thumbnail: volumeInfo.imageLinks
        ? volumeInfo.imageLinks.smallThumbnail
        : '',
    };
  });
}

export const SearchDialog: FC<{
  onBookAdd: (result: resultable) => void;
  isSearching: boolean;
}> = ({ onBookAdd, isSearching }) => {
  const [results, setResults] = useState<resultable[]>(dummyResults);
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    fetch(buildSearchUrl(title, '', 4))
      .then((res) => res.json())
      .then((json) => extractResults(json))
      .then((results) => setResults(results));
  });
  
  const handleTitleChange = (
    e: JSXInternal.TargetedEvent<HTMLInputElement>
  ) => {
    const inputElement = e.target as HTMLInputElement;
    setTitle(inputElement.value);
    //    alert(inputElement.value);
  };

  const handleSearchClick = () => {
    if (!title) return alert('検索ワードを入力して下さい');
    // TODO
  };

  const handleBookAdd = () => {};

  return (
    <div className="dialog" style={{ display: isSearching ? 'block' : 'none' }}>
      <div className="operation">
        <div className="conditions">
          <input
            type="text"
            placeholder="タイトルで検索"
            onChange={handleTitleChange}
          />
          <input
            type="text"
            placeholder="著者名で検索"
            //            onChange={handleAuthorInputChange}
          />
        </div>
        <div className="button-like" onClick={handleSearchClick}>
            [検索]
        </div>
      </div>
      <div className="search-results">
        {results.map((result, i) => {
          return <SearchItem result={result} onBookAdd={onBookAdd} key={i} />;
        })}
      </div>
    </div>
  );
};
