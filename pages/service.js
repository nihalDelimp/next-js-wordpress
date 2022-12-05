import Navbar from '../components/Navbar/Navbar';
import TopHeader from '../components/Navbar/TopHeader';
import Pagebanner from '../components/Common/Pagebanner';
import ServiceArea from '../components/Service/ServiceArea';
import CallToAction from '../components/Common/CallToAction';
import Footer from '../components/Footer/Footer';

//fetch service data
import getServiceData from '../query/serviceQuery/serviceData';
import getHomeData from '../query/homeQuery/homeData';

const Service = ({ serviceData,homeData }) => {
  
  const service = serviceData.data.pageBy.servicePage;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <TopHeader />

      <Navbar 
        logoData={logoData} 
      />

      <Pagebanner 
        pageName='Services' 
      />

      <ServiceArea 
        service={service} 
        readMore={true} 
      />

      <div className="pt-100">
        <CallToAction 
          callToActionData={callToActionData} 
        />
      </div>
      
      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      serviceData: await getServiceData(),
      homeData: await getHomeData()
    },
  };
}

export default Service;
