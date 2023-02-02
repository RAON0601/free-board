export type BoardListProps = {
  routingDetail: (id: string) => void;
};

export type BoardListUIProps = {
  boardList?: {
    _id: string;
    writer: string;
    title: string;
    contents: string;
    likeCount: number;
    dislikeCount: number;
    createdAt: string;
  }[];
  routingDetail: (id: string) => void;
};
