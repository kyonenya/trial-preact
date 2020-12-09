import { h, FunctionComponent as FC } from 'preact';
import { bookable } from './types';

export const Row: FC<{
  book: bookable,
  onDelete: () => void 
}> = ({ book, onDelete }) => {
  const { title, authors, memo } = book;
  
  return (
    <div className="book-row">
      <div className="title">
        {title}
      </div>
      <div className="authors">
        {authors}
      </div>
      <input className="memo"
        type="text"
        value={memo}
//        onChange={handleMemoChange}
      />
      <div className="delete-row" 
        onClick={onDelete}
      >
        [×]
      </div>
    </div>
  );
};
