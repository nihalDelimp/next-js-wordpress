import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/Navbar/TopHeader';
import Banner from '../components/HomeTwo/Banner';
import FunFacts from '../components/Common/FunFacts';
import OurApproaches from '../components/HomeTwo/OurApproaches';
import Services from '../components/HomeTwo/Services';
import Websecurity from '../components/HomeTwo/Websecurity';
import ResourceArea from '../components/Common/ResourceArea';
import Feedback from '../components/Common/Feedback';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import CallToAction from '../components/Common/CallToAction';
import Partner from '../components/Common/Partner';
import Footer from '../components/Footer/Footer';

// fetch all data
import getNavbarData from '../query/navbar/navData';
import getHomeData from '../query/homeQuery/homeData';
import getHomeTwoData from '../query/homeTwoQuery/homeTwoData';
import getAllPosts from '../query/posts';
import getAllResources from '../query/resourceQuery/allResourcesData';

const Index2 = ({ homeData, homeTwoData, homePosts, resources, navData }) => {

  const partnerData = homeData.data.pageBy.partnerSection;
  const homeTwoBannerData = homeTwoData.data.pageBy.homeTwoBanner;
  const aboutData = homeData.data.pageBy.aboutSection;
  const resourcesData = resources.data.resources.edges;
  const serviceData = homeData.data.pageBy.serviceSection;
  const securityData = homeData.data.pageBy.websecuritySection;
  const feedbackData = homeData.data.pageBy.feedbackSection;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;
  const posts = homePosts.data.posts.edges;

  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />

      <Banner homeTwoBannerData={homeTwoBannerData} />

      <FunFacts />

      <OurApproaches aboutData={aboutData} />

      <Services serviceData={serviceData} />

      <Websecurity securityData={securityData} />

      <ResourceArea resourcesData={resourcesData} />

      <Feedback feedbackData={feedbackData} bgColor="bg-f5f8ff" />

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
      homeTwoData: await getHomeTwoData(),
      homePosts: await getAllPosts(),
      resources: await getAllResources(),
    },
  };
}

export default Index2;
