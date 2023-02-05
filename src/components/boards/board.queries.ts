import { gql } from '@apollo/client';

export const CREATE_BOARD = gql`
  mutation createBoard(
    $writer: String
    $title: String!
    $contents: String!
    $password: String!
    $boardAddress: BoardAddressInput
    $youtubeUrl: String
  ) {
    createBoard(
      createBoardInput: {
        writer: $writer
        title: $title
        contents: $contents
        password: $password
        boardAddress: $boardAddress
        youtubeUrl: $youtubeUrl
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
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
    fetchBoardsCount
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $title: String!
    $contents: String!
    $password: String!
    $boardId: ID!
    $youtubeUrl: String
    $boardAddress: BoardAddressInput
  ) {
    updateBoard(
      updateBoardInput: { title: $title, contents: $contents, boardAddress: $boardAddress, youtubeUrl: $youtubeUrl }
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

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;
