import { h, Fragment } from 'preact';
import styled, { createGlobalStyle } from 'styled-components';
import { Basic } from './Basic';
import { Extend } from './Extend';
import { Theme } from './Theme';

export const App = () => {
  return (
    <Fragment>
      {/* @ts-ignore src/styled_components/App.tsx(11,8): error TS2604: JSX element type 'GlobalStyle' does not have any construct or call signatures. */}
      <GlobalStyle />
      <Basic isPrimary={true}/>
      <Extend />
      <Theme />
    </Fragment>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }
`;
