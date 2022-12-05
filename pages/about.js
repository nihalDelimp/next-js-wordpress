import TopHeader from '../components/Navbar/TopHeader';
import Navbar from '../components/Navbar/Navbar';
import Partner from '../components/Common/Partner';
import Pagebanner from '../components/Common/Pagebanner';
import AboutArea from '../components/About/AboutArea';
import FunfactArea from '../components/About/FunfactArea';
import TeamArea from '../components/About/TeamArea';
import Feedback from '../components/Common/Feedback';
import Websecurity from '../components/HomeOne/Websecurity';
import CallToAction from '../components/Common/CallToAction';
import Footer from '../components/Footer/Footer';

//fetch data
import getHomeData from '../query/homeQuery/homeData';
import getAboutPageData from '../query/about/aboutData';

const About = ({ homeData,about }) => {

  const partnerData = homeData.data.pageBy.partnerSection;
  const aboutData = homeData.data.pageBy.aboutSection;
  const teamData = about.data.pageBy.aboutTeamSection;
  const feedbackData = homeData.data.pageBy.feedbackSection;
  const securityData = homeData.data.pageBy.websecuritySection;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />

      <Pagebanner pageName='About Us' />

      <AboutArea aboutData={aboutData} />

      <FunfactArea />

      <TeamArea teamData={teamData} />

      <Feedback feedbackData={feedbackData} />

      <Websecurity securityData={securityData} />

      <div className='pt-100'>
        <CallToAction callToActionData={callToActionData} />
      </div>

      <Partner partnerData={partnerData} />

      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      homeData: await getHomeData(),
      about: await getAboutPageData()
    },
  };
}
export default About;
