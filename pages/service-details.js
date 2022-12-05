import TopHeader from '../components/Navbar/TopHeader';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PageTitleArea from '../components/ServiceDetails/PageTitleArea';
import ServiceContent from '../components/ServiceDetails/ServiceContent';
import ServiceArea from '../components/Service/ServiceArea';
import Websecurity from '../components/HomeOne/Websecurity';
import About from '../components/HomeOne/About';
import SecurityAdvice from '../components/ServiceDetails/SecurityAdvice';
import FaqArea from '../components/ServiceDetails/FaqArea';
import Feedback from '../components/Common/Feedback';
import CallToAction from '../components/Common/CallToAction';
import ResourceArea from '../components/ServiceDetails/ResourceArea';

//fetch data
import getServiceData from '../query/serviceQuery/serviceData';
import getServiceDetailsData from '../query/serviceQuery/serviceDetailsData';
import getHomeData from '../query/homeQuery/homeData';
import getAllResources from '../query/resourceQuery/allResourcesData';

const ServiceDetails = ({ homeData,serviceData, serviceDetailsData,resourceData }) => {

  const service = serviceData.data.pageBy.servicePage;
  const serviceContentData = serviceDetailsData.data.pageBy.serviceDetailsPage;
  const securityData = homeData.data.pageBy.websecuritySection;
  const aboutData = homeData.data.pageBy.aboutSection;
  const faqData = serviceDetailsData.data.pageBy.faqSection;
  const feedbackData = homeData.data.pageBy.feedbackSection;
  const resources = resourceData.data.resources.edges;
  const logoData = homeData.data.pageBy.homeLogo;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />
      
      <PageTitleArea />

      <ServiceContent serviceContentData={serviceContentData} />

      <ServiceArea service={service} />

      <Websecurity securityData={securityData} />

      <About aboutData={aboutData} ptb100="ptb-100" />

      <SecurityAdvice adviceData={service} />

      <FaqArea faqData={faqData} />

      <Feedback feedbackData={feedbackData} bgColor="bg-f5f8ff" />

      <ResourceArea resources={resources} />

      <CallToAction callToActionData={callToActionData} />

      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      homeData: await getHomeData(),
      serviceData: await getServiceData(),
      serviceDetailsData: await getServiceDetailsData(),
      resourceData: await getAllResources()
    },
  };
}

export default ServiceDetails;
