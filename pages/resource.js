import TopHeader from '../components/Navbar/TopHeader';
import Navbar from '../components/Navbar/Navbar';
import Pagebanner from '../components/Common/Pagebanner';
import ResourceArea from '../components/Resource/ResourceArea';
import CallToAction from '../components/Common/CallToAction';
import Footer from '../components/Footer/Footer';
import Partner from '../components/Common/Partner';

import getAllResources from '../query/resourceQuery/allResourcesData';
import getHomeData from '../query/homeQuery/homeData';

const Resource = ({ resources, homeData }) => {

  const resourcesData = resources.data.resources.edges;
  const partnerData = homeData.data.pageBy.partnerSection;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />

      <Pagebanner pageName='Case Studies' />

      <ResourceArea resourcesData={resourcesData} />

      <CallToAction callToActionData={callToActionData} />

      <Partner partnerData={partnerData} />
      
      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      resources: await getAllResources(),
      homeData: await getHomeData(),
    },
  };
}

export default Resource;
