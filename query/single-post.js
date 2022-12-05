import { gql } from '@apollo/client';
import { client } from './config';

const getSinglePost = async (slug) => {
  const getPost = await client.query({
    query: gql`
      query MyQuery($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          title
          id
          content
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          databaseId
          comments {
            nodes {
              content
              date
              author {
                node {
                  name
                }
              }
            }
          }
          postWidgets {
            postAuthorImage {
              sourceUrl
            }
            postAuthorName
            postAuthorDesignation
            postAuthorDescription
            postSocialWidget {
              socialProfile
              socialProfileLink
            }
          }

          categories {
            edges {
              node {
                name
              }
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });
  return getPost;
};

export default getSinglePost;
