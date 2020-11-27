export type squarable = 'X' | 'O' | null;

export type historable = {
  squares: squarable[];
  location: {
    col: number | null,
    row: number | null,
  };
};
