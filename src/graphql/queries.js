import { gql } from "@apollo/client";

export const MY_QUERY = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          fullName
          createdAt
          description
          forksCount
          id
          language
          name
          openIssuesCount
          ownerAvatarUrl
          ownerName
          ratingAverage
          reviewCount
          reviews {
            edges {
              node {
                createdAt
                id
                rating
                repositoryId
                text
                user {
                  id
                  reviewCount
                  username
                }
                userId
              }
            }
          }
          stargazersCount
          url
          watchersCount
        }
      }
    }
  }
`;

export const ME = gql`
  query Reviews($includeReviews: Boolean = false) {
    me {
      reviews @include(if: $includeReviews) {
        edges {
          cursor
          node {
            createdAt
            id
            rating
            repositoryId
            text
            user {
              createdAt
              id
              reviewCount
              username
            }
            userId
          }
        }
      }
      id
      reviewCount
      username
    }
  }
`;

export const GET_SINGLE_REPO = gql`
  query Query($repositoryId: ID!) {
    repository(id: $repositoryId) {
      createdAt
      description
      forksCount
      fullName
      id
      language
      name
      ownerAvatarUrl
      ownerName
      reviewCount
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
            repository {
              id
              ownerName
              name
              createdAt
              fullName
              ratingAverage
              reviewCount
              stargazersCount
              watchersCount
              forksCount
              openIssuesCount
              url
              ownerAvatarUrl
              description
              language
              userHasReviewed
            }
            userId
            repositoryId
            rating
            createdAt
            text
          }
        }
      }
      stargazersCount
      url
    }
  }
`;
