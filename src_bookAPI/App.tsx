import { h, FunctionComponent as FC } from 'preact';
import { BookRow } from './BookRow';
import { BookToRead } from './types';

const dummyBooks: BookToRead[] = [
  {
    id: 1,
    title: 'はじめてのReact',
    authors: 'ダミー',
    memo: '',
  },
  {
    id: 2,
    title: 'React Hooks入門',
    authors: 'ダミー',
    memo: '',
  },
  {
    id: 3,
    title: '実践Reactアプリケーション開発',
    authors: 'ダミー',
    memo: '',
  },
];

export const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <h1>読みたい本リスト</h1>
        <div className="button-like">本を追加</div>
      </nav>
      <main className="main">
        {dummyBooks.map((book) => {
          return (
            <BookRow 
              book={book}
              key={book.id}
//              onMemoChange={(id, memo) => {}}
//              onDelete={(id) => {}}
            />
          );
        })}
      </main>
    </div>
  );
};
