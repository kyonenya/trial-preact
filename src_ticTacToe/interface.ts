export type squarable = 'X' | 'O' | null;  // リテラル型の選言

// 呼び出し可能オブジェクトによる関数の型付け
export interface handleClickable {
  (index: number): void;
}
