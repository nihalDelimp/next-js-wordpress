import Partner from '../components/Common/Partner';
import CallToAction from '../components/Common/CallToAction';
import Pagebanner from '../components/Common/Pagebanner';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/Navbar/TopHeader';
import PrivacyPolicyArea from '../components/PrivacyPolicy/PrivacyPolicyArea';

//fetch data
import getHomeData from '../query/homeQuery/homeData';
import getPrivacyData from '../query/privacy/privacyData';

const PrivacyPolicy = ({ homeData, privacyData }) => {

  const partnerData = homeData.data.pageBy.partnerSection;
  const privacy = privacyData.data.pageBy.privacyPolicySection;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />

      <Pagebanner pageName='Privacy Policy' />

      <PrivacyPolicyArea privacy={privacy} />

      <CallToAction callToActionData={callToActionData} />

      <Partner partnerData={partnerData} />
      
      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      homeData: await getHomeData(),
      privacyData: await getPrivacyData(),
    },
  };
}

export default PrivacyPolicy;
