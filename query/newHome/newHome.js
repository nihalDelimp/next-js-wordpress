import { gql } from "@apollo/client";
import { client } from "../config";

const getNewHomeData = async () => {
  const newHomeBannerData = await client.query({
    query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/home/") {     
          bannerSection {
            banner {
              ... on Page_Bannersection_Banner_AddBanner {
                fieldGroupName,
                bannerItems{
                  bannerTitle
                  bannerDescription
                  bannerUrl
                  bannerButtonLabel
                  bannerImage{
                    sourceUrl
                  }
                }
              }
            }
          }

          videoSection{
            video{
              ... on Page_Videosection_Video_AddVideo{
                fieldGroupName,
                bannerVideo{
                  bannerVideo
                }
                }
            }
          }
          


        }
      }
    `,
  });
  return newHomeBannerData;
};

export default getNewHomeData;
