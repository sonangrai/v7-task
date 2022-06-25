import { gql } from "@apollo/client";

export const ALL_PLAYERS_QUERY = gql`
  query {
    getUser(name: "sonangrai") {
      id
      login
    }
  }
`;
