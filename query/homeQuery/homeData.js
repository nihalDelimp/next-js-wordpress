import { gql } from "@apollo/client";
import { client } from "../config";

const getHomeData = async () => {
  const HomeBannerData = await client.query({
    query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/home/") {
          bannerSection {
            bannerTitle
            bannerDescription
            bannerImage {
              sourceUrl
            }
            bannerButtonText
            bannerButtonUrl
          }

          featureSection {
            featureItems {
              featureDescription
              featureTitle
              featureIcon {
                sourceUrl
              }
            }
          }
          
          aboutSection {
            aboutSubtitle
            aboutTitle
            aboutItems {
              aboutItemTitle
              aboutItemSubtitle
              aboutItemImage {
                sourceUrl
              }
            }
          }

          partnerSection {
            partner {
              partnerImage {
                sourceUrl
              }
            }
          }

          serviceSection {
            serviceTitle
            serviceSubtitle
            serviceItems {
              serviceItemTitle
              serviceItemDescription
              serviceItemIcon {
                sourceUrl
              }
            }
          }

          websecuritySection {
            websecurityItems {
              websecurityTitle
            }
          }

          feedbackSection {
            feedbackItems {
              feedbackItemsDescription
              feedbackItemsName
              feedbackItemsImage {
                sourceUrl
              }
            }
          }

          homeLogo {
            logo {
              sourceUrl
            }
            whiteLogo {
              sourceUrl
            }
          }

          callToAction {
            title
            btnText
            btnLink
          }
          
        }
      }
    `,
  });
  return HomeBannerData;
};

export default getHomeData;
