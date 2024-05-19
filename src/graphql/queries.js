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

export const ME = gql`
  query Query {
    me {
      id
      username
    }
  }
`;

export const GET_SINGLE_REPO = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      url
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      reviews {
        edges {
          node {
            id
            user {
              id
              username
              createdAt
              reviews {
                totalCount
                pageInfo {
                  hasPreviousPage
                  hasNextPage
                  startCursor
                  endCursor
                }
                edges {
                  cursor
                  node {
                    id
                    userId
                    repositoryId
                    rating
                    createdAt
                    text
                  }
                }
              }
              reviewCount
            }
            userId
            rating
            createdAt
            text
          }
        }
      }
    }
  }
`;
