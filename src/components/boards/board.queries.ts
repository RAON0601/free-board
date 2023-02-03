import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard(
    $writer: String
    $title: String!
    $contents: String!
    $password: String!
  ) {
    createBoard(
      createBoardInput: {
        writer: $writer
        title: $title
        contents: $contents
        password: $password
      }
    ) {
      _id
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
    }
  }
`;

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $title: String!
    $contents: String!
    $password: String!
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: { title: $title, contents: $contents }
      password: $password
      boardId: $boardId
    ) {
      _id
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
