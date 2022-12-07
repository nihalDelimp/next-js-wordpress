// import Navbar from "../components/Navbar/Navbar";
// import TopHeader from "../components/Navbar/TopHeader";

// import Banner from "../components/HomeOne/Banner";
// import Feature from "../components/HomeOne/Feature";
// import About from "../components/HomeOne/About";
// import Partner from "../components/Common/Partner";
// import Service from "../components/HomeOne/Service";
// import Websecurity from "../components/HomeOne/Websecurity";
// import ResourceArea from "../components/Common/ResourceArea";
// import Feedback from "../components/Common/Feedback";
// import LatestBlogPost from "../components/Common/LatestBlogPost";
// import CallToAction from "../components/Common/CallToAction";
// import Footer from "../components/Footer/Footer";

// fetch all data
// import getNavbarData from "../query/navbar/navData";
// import getHomeData from "../query/homeQuery/homeData";
// import getAllPosts from "../query/posts";
// import getAllResources from "../query/resourceQuery/allResourcesData";
import { it } from "date-fns/locale";
import BannerNihal from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import getNewHomeData from "../query/newHome/newHome";

import getGovermentData from "../query/Industries/government";
import Government from '../components/Industries/Government';

import getHealthcareData from "../query/Industries/healthcare";
import Healthcare from '../components/Industries/Healthcare';

import getFinanceData from "../query/Industries/finance";
import Finance from '../components/Industries/Finance';

import getEnergyData from "../query/Industries/energy";
import Energy from '../components/Industries/EnergyAndUtility';

import getEducationData from "../query/Industries/education";
import Education from '../components/Industries/Education';

import getCommunicationData from "../query/Industries/communication";
import Communication from './../components/Industries/Communication';

import getEnterpriseData from "../query/Industries/enterprise";
import EnterPrise from '../components/Industries/Enterprise';

import getsmartSolutionsData from "../query/Services/smartSolutions";
import SmartSolutions from '../components/Services/SmartSolutions';

const Index = ({ home, government, healthcare, finance, energy, education, communication, enterprise , smartSolutions }) => {
  // console.log(newHome.data.pageBy.nihal.nihalLife[0].teamImage, "resos")
  const bannerData = home.data.pageBy.bannerSection.banner;
  const videoData = bannerData.filter(item => item.video)
  const singleImageData = bannerData.filter(item => item.singleImage)
  const referencesData = bannerData.filter(item => item.referencesSectionItems)
  const footerSectionData = bannerData.filter(item => item.footerSection)

   // Industries Page Content
  const govermentData = government.data.pageBy.industriesContents.industriesPageContent;
  const healthcareData = healthcare.data.pageBy.industriesContents.industriesPageContent;
  const financeData = finance.data.pageBy.industriesContents.industriesPageContent;
  const energyData = energy.data.pageBy.industriesContents.industriesPageContent;
  const educationData = education.data.pageBy.industriesContents.industriesPageContent;
  const communicationData = communication.data.pageBy.industriesContents.industriesPageContent;
  const enterPriseData = enterprise.data.pageBy.industriesContents.industriesPageContent;

// Services Page Content 
// const smartSolutionData = smartSolutions.data.pageBy.servicesSection.servicesContent;

// console.log("SmartSolutionData" , smartSolutionData)



  // const referencesData = home.data.pageBy.referencesSection.referencesSection;
  // const featureData = homeData.data.pageBy.featureSection;
  // const aboutData = homeData.data.pageBy.aboutSection;
  // const partnerData = homeData.data.pageBy.partnerSection;
  // const serviceData = homeData.data.pageBy.serviceSection;
  // const resourcesData = resources.data.resources.edges;
  // const securityData = homeData.data.pageBy.websecuritySection;
  // const feedbackData = homeData.data.pageBy.feedbackSection;
  // const logoData = homeData.data.pageBy.homeLogo;
  // const callToActionData = homeData.data.pageBy.callToAction;
  // const posts = homePosts.data.posts.edges;

  return (
    <>
      {/* <Header/> */}
      <BannerNihal banner={bannerData} singleImageData={singleImageData} video={videoData} references={referencesData} footerSection={footerSectionData} />
      <Government govermentData={govermentData} />
      <Healthcare healthcareData={healthcareData} />
      <Finance financeData={financeData} />
      <Energy energyData={energyData} />
      <Education educationData={educationData} />
      <Communication communicationData={communicationData} />
      <EnterPrise enterPriseData={enterPriseData} />
      <Footer />
      
      {/* <TopHeader /> */}

      {/* <Navbar logoData={logoData} />

      <Banner bannerData={bannerData} />

      <Feature featureData={featureData} />

      <About aboutData={aboutData} />

      <Partner partnerData={partnerData} />

      <Service serviceData={serviceData} />

      <Websecurity securityData={securityData} />

      <ResourceArea resourcesData={resourcesData} />

      <Feedback feedbackData={feedbackData} bgColor="bg-f5f8ff" />

      <LatestBlogPost posts={posts} />

      <CallToAction callToActionData={callToActionData} />

      <Footer /> */}
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      // navData: await getNavbarData(),
      // homeData: await getHomeData(),
      // homePosts: await getAllPosts(),
      // resources: await getAllResources(),
      home: await getNewHomeData(),
      government: await getGovermentData(),
      healthcare: await getHealthcareData(),
      finance: await getFinanceData(),
      energy: await getEnergyData(),
      education: await getEducationData(),
      communication: await getCommunicationData(),
      enterprise: await getEnterpriseData(),
     // smartSolutions: await getsmartSolutionsData(),
      
    },
  };
}

export default Index;
