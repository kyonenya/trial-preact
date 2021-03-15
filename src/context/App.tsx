import { h, createContext, Fragment } from 'preact';
import { useState, useEffect, useContext } from 'preact/hooks';

const ThemeContext = createContext('red');

export const App = () => {
  return (
    <ThemeContext.Provider value="blue">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = (props: any) => {
  return (
    <div>
      <ThemedButton />
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ color: theme }}>Push</button>
  );
};
