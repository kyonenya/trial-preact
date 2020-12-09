import { h, FunctionComponent as FC } from 'preact';
import { resultable } from './types';

export const SearchItem: FC<{
  result: resultable
}> = ({ result }) => {
  const { title, authors, thumbnail } = result;
  
  return (
    <div className="book-search-item">
      <h2 title={title}>{title}</h2>
      <div className="authors" title={authors}>
        {authors}
      </div>
      {thumbnail ? <img src={thumbnail} alt="" /> : null}
      <div className="add-book" 
//        onClick={handleAddBookClick}
      >
        <span>+</span>
      </div>
    </div>
  );
};
