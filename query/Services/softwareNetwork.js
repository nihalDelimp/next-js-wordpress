import { gql } from "@apollo/client";
import { client } from "../config";

const getSoftwareNetworkData = async () => {
    const softwareNetworkData = await client.query({
        query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/software-defending-network") {     
            servicesSection {
                servicesContent {
              ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection1 {
                fieldGroupName
          heading
          descriptionSection {
            description
            fieldGroupName
          }
          listSection {
            fieldGroupName
            listItems
          }
          backgroundImage {
            sourceUrl
          }
        }
        ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection2 {
            fieldGroupName
          backgroundImage {
            sourceUrl
          }
          headingWithDescription {
            description
            fieldGroupName
            heading
            listData {
              fieldGroupName
              listItems
            }
          }
        }
        ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection3 {
            fieldGroupName
          descriptionWithSubHeading {
            description
            fieldGroupName
            heading
            listData {
              fieldGroupName
              listItems
            }
          }
          heading
          image {
            sourceUrl
          }
        }
        ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection4 {
            fieldGroupName
          heading
          image {
            sourceUrl
          }
          descriptionWithIcon {
            description
            fieldGroupName
            heading
            icon
          }
        }
        ... on Page_Servicessection_ServicesContent_ServicesSolutionsSection5 {
          fieldGroupName
          heading
          carouselImages {
            sourceUrl
          }
        }
            }
          }
        }
      }
    `,
    });
    return softwareNetworkData;
};

export default getSoftwareNetworkData;



