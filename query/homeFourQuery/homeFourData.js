import { gql } from "@apollo/client";
import { client } from "../config";

const getHomeThreeData = async () => {
	const HomeThreeBannerData = await client.query({
		query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/home-four/") {

          homeFourBanner {
            bannerItem {
              title
              shortDescription
              getStartedBtnText
              getStartedBtnLink
              aboutBtnText
              aboutBtnLink
              image {
                sourceUrl
              }
            }
          }

        }
      }
    `,
	});
	return HomeThreeBannerData;
};

export default getHomeThreeData;
