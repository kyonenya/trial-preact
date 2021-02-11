import { h } from 'preact';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.isPrimary ? 'palevioletred' : 'tomato'};
`;

export const App = (props: any) => {
  return (
    <Title>
      Hello world
    </Title>
  );
};
