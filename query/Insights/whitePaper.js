import { gql } from "@apollo/client";
import { client } from "../config";

const getWhitePaperData = async () => {
    const applicationData = await client.query({
        query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/white-paper") {     
            insights {
          tabSection {
        ... on Page_Insights_TabSection_TabItems {
          fieldGroupName
          tabContainer {
            fieldGroupName
            tabData {
                buttonLabel
              buttonLink
              by
              description
              title
              fieldGroupName
              image {
                sourceUrl
              }
            }
            tabMenuId
          }
          tabMenuItems {
            fieldGroupName
            tabId
            tabName
          }
        }
      }
    }

        }
      }
    `,
    });
    return applicationData;
};

export default getWhitePaperData;



