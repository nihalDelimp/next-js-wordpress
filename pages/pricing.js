import CallToAction from '../components/Common/CallToAction';
import Pagebanner from '../components/Common/Pagebanner';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/Navbar/TopHeader';
import Partner from '../components/Common/Partner';
import PricingArea from '../components/Pricing/PricingArea';

//fetch data
import getHomeData from '../query/homeQuery/homeData';
import getPricingData from '../query/pricing/pricingData';

const Pricing = ({ homeData,pricingData }) => {
  const partnerData = homeData.data.pageBy.partnerSection;
  const pricing = pricingData.data.pageBy.pricingSection;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />

      <Pagebanner pageName='Flexible Pricing' />

      <PricingArea pricing={pricing} />

      <CallToAction callToActionData={callToActionData} />

      <Partner partnerData={partnerData} />
      
      <Footer />
    </>
  );
};
export async function getStaticProps(context) {
  return {
    props: {
      pricingData: await getPricingData(),
      homeData: await getHomeData(),
    },
  };
}

export default Pricing;
