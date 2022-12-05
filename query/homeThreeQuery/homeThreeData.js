import { gql } from "@apollo/client";
import { client } from "../config";

const getHomeThreeData = async () => {
	const HomeThreeBannerData = await client.query({
		query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/home-three/") {

          homeBannerThree {
            bannerTitle
            bannerContent
            getStartedText
            getStartedLink
            aboutBtnText
            aboutBtnLink
            bannerBgImage {
              sourceUrl
            }
            videoLink
          }

          operationCenter {
            operationImage {
              sourceUrl
            }
            title
            shortText
            operationCenterList {
              listTitle
            }
          }

          ourApproaches {
            title
            shortText
            approachList {
              icon {
                sourceUrl
              }
              title
              shortText
            }
          }

        }
      }
    `,
	});
	return HomeThreeBannerData;
};

export default getHomeThreeData;
