import { h } from 'preact';
import { useState } from 'preact/hooks';
import Editor from 'react-simplemde-editor';

export const App = () => {
  const [text, setText] = useState('');
  console.log(text);
  return <Editor onChange={setText}/>;
};
