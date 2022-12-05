import NavbarStyle2 from "../components/Navbar/NavbarStyle2";
import TopHeaderStyle2 from "../components/Navbar/TopHeaderStyle2";
import Banner from "../components/HomeThree/Banner";
import FunFacts from "../components/Common/FunFacts";
import CybersecurityOperationCenter from "../components/HomeThree/CybersecurityOperationCenter";
import Services from "../components/HomeThree/Services";
import OurApproaches from "../components/HomeThree/OurApproaches";
import WebsiteSecurity from "../components/HomeThree/WebsiteSecurity";
import ResourceArea from "../components/Common/ResourceArea";
import FeedbackStyle2 from "../components/Common/FeedbackStyle2";
import LatestBlogPost from "../components/Common/LatestBlogPost";
import CallToAction from "../components/Common/CallToAction";
import Partner from "../components/Common/Partner";
import Footer from "../components/Footer/Footer";

// fetch all data
import getNavbarData from "../query/navbar/navData";
import getHomeData from "../query/homeQuery/homeData";
import getHomeThreeData from "../query/homeThreeQuery/homeThreeData";
import getAllPosts from "../query/posts";
import getAllResources from "../query/resourceQuery/allResourcesData";

const Index3 = ({ homeData, homeThreeData, homePosts, resources, navData }) => {
  
  const bannerData = homeThreeData.data.pageBy.homeBannerThree;
  const operationCenterData = homeThreeData.data.pageBy.operationCenter;
  const partnerData = homeData.data.pageBy.partnerSection;
  const featureData = homeData.data.pageBy.featureSection;
  const serviceData = homeData.data.pageBy.serviceSection;
  const ourApproachesData = homeThreeData.data.pageBy.ourApproaches;
  const resourcesData = resources.data.resources.edges;
  const securityData = homeData.data.pageBy.websecuritySection;
  const feedbackData = homeData.data.pageBy.feedbackSection;
  const logoData = homeData.data.pageBy.homeLogo;
  const posts = homePosts.data.posts.edges;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <header className="header-area white-header">
        <TopHeaderStyle2 />

        <NavbarStyle2 logoData={logoData} />
      </header>

      <Banner 
        bannerData={bannerData} 
        featureData={featureData} 
      />

      <FunFacts />

      <CybersecurityOperationCenter 
        operationCenterData={operationCenterData} 
      />

      <Services serviceData={serviceData} />

      <OurApproaches ourApproachesData={ourApproachesData} />

      <WebsiteSecurity securityData={securityData} />

      <ResourceArea resourcesData={resourcesData} />

      <FeedbackStyle2 feedbackData={feedbackData} />

      <LatestBlogPost posts={posts} />

      <CallToAction callToActionData={callToActionData} />

      <Partner partnerData={partnerData} />

      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      navData: await getNavbarData(),
      homeData: await getHomeData(),
      homeThreeData: await getHomeThreeData(),
      homePosts: await getAllPosts(),
      resources: await getAllResources(),
    },
  };
}

export default Index3;
