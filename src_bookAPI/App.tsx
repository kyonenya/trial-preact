import { h, FunctionComponent as FC } from 'preact';
import { useState } from 'preact/hooks';
import { Row } from './Row';
import { bookable } from './types';

const dummyBooks: bookable[] = [
  {
    id: 1,
    title: 'はじめてのReact',
    authors: 'ダミー',
    memo: 'メモ',
  },
  {
    id: 2,
    title: 'React Hooks入門',
    authors: 'ダミー',
    memo: 'メモ',
  },
  {
    id: 3,
    title: '実践Reactアプリケーション開発',
    authors: 'ダミー',
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
//              onMemoChange={(id, memo) => {}}
              onDelete={() => handleDelete(book.id)}
            />
          );
        })}
      </main>
    </div>
  );
};
