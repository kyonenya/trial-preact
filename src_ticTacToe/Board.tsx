import { h, render } from 'preact';
import { Square } from './Square';
import { squarable } from './interface';

type boardProps = {
  squares: squarable[],
  onClick: (index: number) => void,
};

export const Board = (props: boardProps) => {
  const row = 3;
  const column = 3;
  
  return (
    <div>
      <div className="status">{status}</div>
        {[...Array(row).keys()].map((i) => { // [0, 1, 2].map()
          return (
            <div className="board-row" key={i}>
              {[...Array(column).keys()].map((j) => {
                const index = i * 3 + j;
                return (
                  <Square
                    value={props.squares[index]}
                    // スイッチにあらかじめ引数をセットして渡す
                    onClick={() => props.onClick(index)}
                    key={index} 
                  />
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
