export type squarable = 'X' | 'O' | '';

export type historable = {
  squares: squarable[];
  location: {
    col: number | null,
    row: number | null,
  };
};
