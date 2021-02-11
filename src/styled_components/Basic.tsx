import { h } from 'preact';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: ${props => props.size + 'em'};
  color: ${props => props.isPrimary ? 'palevioletred' : 'tomato'};
`;

export const Basic = (props: {
  isPrimary: boolean,
}) => {
  return (
    <Title size={2}>
      Hello world
    </Title>
  );
};

/**
 * 基本
 * - 変数をもとにスタイリング：propsを受け取ってスタイルを返す関数
 *   - Titleコンポーネントに直接渡したpropsも
 *   - 親のBasicコンポーネントに渡されたpropsも
 *   同じ書き方で直接参照できる
 * - スタイルはBasicコンポーネントの外で定義する
 */
