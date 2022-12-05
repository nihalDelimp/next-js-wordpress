import Partner from '../components/Common/Partner';
import CallToAction from '../components/Common/CallToAction';
import Pagebanner from '../components/Common/Pagebanner';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/Navbar/TopHeader';
import TermsConditionArea from '../components/TermsCondition/TermsConditionArea';

//fetch data
import getHomeData from '../query/homeQuery/homeData';
import getTermsConditionData from '../query/TermsCondition/TermsConditionData';

const TermsCondtion = ({ homeData,termsConditionData }) => {
  
  const partnerData = homeData.data.pageBy.partnerSection;
  const termsCondition = termsConditionData.data.pageBy.termsConditionSection;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />
      
      <Pagebanner pageName='Terms & Condition' />

      <TermsConditionArea termsCondition={termsCondition} />

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
      termsConditionData: await getTermsConditionData(),
    },
  };
}

export default TermsCondtion;
