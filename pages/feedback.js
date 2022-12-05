import Partner from '../components/Common/Partner';
import CallToAction from '../components/Common/CallToAction';
import Pagebanner from '../components/Common/Pagebanner';
import FeedbackArea from '../components/Feedback/FeedbackArea';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/Navbar/TopHeader';

//fetch data
import getHomeData from '../query/homeQuery/homeData';

const Feedback = ({ homeData }) => {
  
  const partnerData = homeData.data.pageBy.partnerSection;
  const feedbackData = homeData.data.pageBy.feedbackSection;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />

      <Pagebanner pageName='Clients Feedback' />

      <FeedbackArea feedbackData={feedbackData} />

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
    },
  };
}

export default Feedback;
