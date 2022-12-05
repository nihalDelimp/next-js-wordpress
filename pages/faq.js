import Partner from '../components/Common/Partner';
import CallToAction from '../components/Common/CallToAction';
import Pagebanner from '../components/Common/Pagebanner';
import FaqArea from '../components/Faq/FaqArea';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/Navbar/TopHeader';

//fetch data
import getHomeData from '../query/homeQuery/homeData';
import getServiceDetailsData from '../query/serviceQuery/serviceDetailsData';

const Faq = ({ homeData, serviceDetailsData }) => {
  
  const partnerData = homeData.data.pageBy.partnerSection;
  const faqData = serviceDetailsData.data.pageBy.faqSection;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />

      <Pagebanner pageName='FAQ' />

      <FaqArea faqData={faqData} />

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
      serviceDetailsData: await getServiceDetailsData(),
    },
  };
}

export default Faq;
