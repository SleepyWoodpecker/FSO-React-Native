import { gql } from "@apollo/client";

export const MY_QUERY = gql`
  query Query {
    repositories {
      edges {
        cursor
        node {
          fullName
          id
          createdAt
          description
          forksCount
          language
          name
          openIssuesCount
          ownerAvatarUrl
          ownerName
          ratingAverage
          reviewCount
          stargazersCount
          url
          userHasReviewed
          watchersCount
        }
      }
    }
  }
`;
