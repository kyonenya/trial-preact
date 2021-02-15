import { h } from 'preact';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  color: '#00f',
};

const Button = styled.div`
  color: ${props => props.theme.color};
  border: 1px solid ${props => props.theme.color};
  margin: 1em;
  padding: 0.25em 1em;
  width: 3em;
`;

export const Theme = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>ボタン</Button>
    </ThemeProvider>
  );
};
