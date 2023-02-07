import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  mutation createComment($writer: String!, $contents: String!, $password: String!, $rating: Float!, $boardId: ID!) {
    createBoardComment(
      createBoardCommentInput: { writer: $writer, password: $password, contents: $contents, rating: $rating }
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

export const UPDATE_COMMENT = gql`
  mutation updateComment($contents: String, $rating: Float, $password: String, $commentId: ID!) {
    updateBoardComment(
      updateBoardCommentInput: { contents: $contents, rating: $rating }
      boardCommentId: $commentId
      password: $password
    ) {
      _id
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($password: String, $commentId: ID!) {
    deleteBoardComment(boardCommentId: $commentId, password: $password)
  }
`;
