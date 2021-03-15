import { h, FunctionComponent as FC } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Row } from './Row';
import { SearchDialog } from './SearchDialog';
import { bookable, resultable } from './types';

const dummyBooks: bookable[] = [
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
  const APP_KEY = 'bookAPI';
  
  const [books, setBooks] = useState<bookable[]>(dummyBooks);
  const [isSearching, setIsSearching] = useState<boolean>(true);
  
  // booksステートが変わるたびにデータを保存
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(books));
  }, [books]);
  
  // 初回レンダリング時にデータをロード
  useEffect(() => {
    const storedBooks = localStorage.getItem(APP_KEY);
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  const handleDelete = (id: number) => {
    setBooks((prevBooks) => {
      return prevBooks.filter((book) => book.id !== id);
    });
  };

  const handleAddClick = () => {
    setIsSearching((prev) => !prev);
  };
  
  const handleBookAdd = (result: resultable) => {
    setBooks((prevBooks) => {
      return [ ...prevBooks, {
        id: prevBooks.length + 1,
        title: result.title,
        authors: result.authors,
        memo: '',
      }];
    })
  };

  return (
    <div className="App">
      <nav className="nav">
        <h1>読みたい本リスト</h1>
        <div className="button-like" onClick={handleAddClick}>
          [Add]
        </div>
      </nav>
      <main className="main">
        {books.map((book) => {
          return (
            <Row
              book={book}
              key={book.id}
              onDelete={() => handleDelete(book.id)}
            />
          );
        })}
      </main>
      <SearchDialog
        isSearching={isSearching}
        onBookAdd={handleBookAdd}
      />
    </div>
  );
};
