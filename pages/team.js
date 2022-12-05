import Partner from '../components/Common/Partner';
import CallToAction from '../components/Common/CallToAction';
import Pagebanner from '../components/Common/Pagebanner';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/Navbar/TopHeader';
import TeamArea from '../components/Team/TeamArea';

//fetch data
import getHomeData from '../query/homeQuery/homeData';
import getAboutPageData from '../query/about/aboutData';

const Team = ({ homeData, about }) => {
  
  const partnerData = homeData.data.pageBy.partnerSection;
  const teamData = about.data.pageBy.aboutTeamSection;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />

      <Pagebanner pageName='Team' />

      <TeamArea teamData={teamData} />

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
      about: await getAboutPageData(),
    },
  };
}

export default Team;
