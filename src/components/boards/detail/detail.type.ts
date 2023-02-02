export type BoardDetailUIProps = {
  _id: string;
  writer: string;
  title: string;
  contents: string;
  likeCount: number;
  dislikeCount: number;
  createdAt: Date;
  deleteBoard: (id: string) => void;
  routeBoardList: () => void;
  routeBoardEdit: (id: string) => void;
};

export type BoardDetailProps = {
  id: string;
  routeBoardList: () => void;
  routeBoardEdit: (id: string) => void;
};
