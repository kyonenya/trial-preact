import { h, Fragment } from 'preact';
import styled from 'styled-components';
import { Basic } from './Basic';
import { Extend } from './Extend';
import { Theme } from './Theme';

export const App = () => {
  return (
    <Fragment>
      <Basic isPrimary={true}/>
      <Extend />
      <Theme />
    </Fragment>
  );
};
