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
      writer
      title
      contents
    }
  }
`;
