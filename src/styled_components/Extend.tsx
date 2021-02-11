import { h, Fragment } from 'preact';
import styled from 'styled-components';

const BaseButton = styled.button`
  font-size: 1em;
  margin: 1em;
  border: 2px solid black;
`;

const TomatoButton = styled(BaseButton)`
  color: tomato;
  border-color: tomato;
`;

export const Extend = () => {
  return (
    <Fragment>
      <BaseButton>■</BaseButton>
      <TomatoButton>■</TomatoButton>
    </Fragment>
  );
};

/**
 * スタイルの継承
 * - styled(継承元のコンポーネント)`...`
 */
