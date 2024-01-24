import { gql } from '@apollo/client';

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      id
      born
      bookCount
    }
  }
`;

export const BOOK_COUNT = gql`
  query {
    allAuthors {
      name
      id
      born
    }
  }
`;
