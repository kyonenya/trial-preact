export type articlable = {
  id: number;
  title: string;
}

export type pagable = {
  pageName: string;
  articles: articlable[];
}

export const pagesData: {
  [pageCode: string]: pagable;
} = {
  index: {
    pageName: 'ブログトップ',
    articles: [
      {
        id: 1,
        title: '言葉の場所、出口のイメージ',
      },
      {
        id: 2,
        title: '劇的なものと演技的なもの',
      }
    ]
  },
  about: {
    pageName: 'このサイトについて',
    articles: [
      {
        id: 1,
        title: 'サイトを作成しました',
      },
      {
        id: 2,
        title: '業績ページを追加しました',
      }
    ]
  }
}
