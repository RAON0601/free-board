import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment(
    $writer: String!
    $contents: String!
    $password: String!
    $rating: Float!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: {
        writer: $writer
        password: $password
        contents: $contents
        rating: $rating
      }
      boardId: $boardId
    ) {
      _id
    }
  }
`;

export const FETCH_COMMENT = gql`
  query fetchComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;
