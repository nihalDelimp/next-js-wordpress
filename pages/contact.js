import TopHeader from '../components/Navbar/TopHeader';
import Navbar from '../components/Navbar/Navbar';
import Pagebanner from '../components/Common/Pagebanner';
import ContactForm from '../components/Contact/ContactForm';
import CallToAction from '../components/Common/CallToAction';
import Partner from '../components/Common/Partner';
import Footer from '../components/Footer/Footer';

// fetch data
import getHomeData from '../query/homeQuery/homeData';
import getAboutPageData from '../query/about/aboutData';

const Team = ({ homeData }) => {

  const partnerData = homeData.data.pageBy.partnerSection;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />

      <Pagebanner pageName='Contact Us' />

      <ContactForm />
 
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
      about: await getAboutPageData(),
    },
  };
}

export default Team;
