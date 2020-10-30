import { h, render } from 'preact';
import { useState } from 'preact/hooks';

export const Square = (props: any) => {
  const [value, setValue] = useState(props.value);
  const check = () => {
    setValue('X');
  }
  
  return (
    <button className="square"
      onClick={check}
    >
      {value}
    </button>
  );
}
