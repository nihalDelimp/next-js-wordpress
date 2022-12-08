import Banner from "../components/Banner/Banner";
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

const Index = ({ home, government, healthcare, finance, energy, education, communication, enterprise, smartSolutions }) => {
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

  console.log("bannerDataTTTTTT", singleImageData)

  return (
    <>
      <Banner banner={bannerData} singleImageData={singleImageData} video={videoData} references={referencesData} footerSection={footerSectionData} />
      <Government govermentData={govermentData} />
      <Healthcare healthcareData={healthcareData} />
      <Finance financeData={financeData} />
      <Energy energyData={energyData} />
      <Education educationData={educationData} />
      <Communication communicationData={communicationData} />
      <EnterPrise enterPriseData={enterPriseData} />
      <Footer />
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
