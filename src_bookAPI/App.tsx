import { h, FunctionComponent as FC } from 'preact';
import { useState } from 'preact/hooks';
import { Row } from './Row';
import { SearchDialog } from './SearchDialog';
import { bookable } from './types';

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
  const [books, setBooks] = useState<bookable[]>(dummyBooks);
  
  const handleDelete = (id: number) => {
    setBooks((prevBooks) => {
      return prevBooks.filter((book) => book.id !== id);
    });
  };
  
  return (
    <div className="App">
      <nav className="nav">
        <h1>読みたい本リスト</h1>
        <div className="button-like">[Add]</div>
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
        onBookAdd={() => alert('added')}
      />
    </div>
  );
};
