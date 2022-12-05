import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/Navbar/TopHeader';
import Banner from '../components/HomeFour/Banner';
import Feature from '../components/HomeFour/Feature';
import About from '../components/HomeFour/About';
import FunFacts from '../components/Common/FunFacts';
import Partner from '../components/Common/Partner';
import Service from '../components/HomeFour/Service';
import Websecurity from '../components/HomeFour/Websecurity';
import ResourceAreaStyle2 from '../components/Common/ResourceAreaStyle2';
import Feedback from '../components/Common/Feedback';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import CallToAction from '../components/Common/CallToAction';
import Footer from '../components/Footer/Footer';

// fetch all data
import getNavbarData from '../query/navbar/navData';
import getHomeData from '../query/homeQuery/homeData';
import getHomeFourData from '../query/homeFourQuery/homeFourData';
import getAllPosts from '../query/posts';
import getAllResources from '../query/resourceQuery/allResourcesData';

const Index4 = ({ homeData, homeFourData, homePosts, resources, navData }) => {

  const bannerData = homeFourData.data.pageBy.homeFourBanner;
  const featureData = homeData.data.pageBy.featureSection;
  const aboutData = homeData.data.pageBy.aboutSection;
  const partnerData = homeData.data.pageBy.partnerSection;
  const serviceData = homeData.data.pageBy.serviceSection;
  const resourcesData = resources.data.resources.edges;
  const securityData = homeData.data.pageBy.websecuritySection;
  const feedbackData = homeData.data.pageBy.feedbackSection;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;
  const posts = homePosts.data.posts.edges;

  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />

      <Banner bannerData={bannerData} />

      <div className='pt-100'>
        <Partner partnerData={partnerData} />
      </div>

      <Feature featureData={featureData} />

      <About aboutData={aboutData} />

      <FunFacts />
  
      <Service serviceData={serviceData} />

      <Websecurity securityData={securityData} />

      <ResourceAreaStyle2 resourcesData={resourcesData} />

      <Feedback feedbackData={feedbackData} bgColor="bg-f5f8ff" />

      <LatestBlogPost posts={posts} />

      <CallToAction callToActionData={callToActionData} />
      
      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      navData: await getNavbarData(),
      homeData: await getHomeData(),
      homeFourData: await getHomeFourData(),
      homePosts: await getAllPosts(),
      resources: await getAllResources(),
    },
  };
}

export default Index4;
