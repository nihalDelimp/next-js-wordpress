import TopHeader from '../components/Navbar/TopHeader';
import Navbar from '../components/Navbar/Navbar';
import SearchArea from '../components/Search/SearchArea';
import CallToAction from '../components/Common/CallToAction';
import Partner from '../components/Common/Partner';
import Pagebanner from '../components/Common/Pagebanner';
import Footer from '../components/Footer/Footer';

import getPostsBySearch from '../query/searchPost';
import getHomeData from '../query/homeQuery/homeData';

const Search = ({ posts, homeData }) => {

  const logoData = homeData.data.pageBy.homeLogo;
  const partnerData = homeData.data.pageBy.partnerSection;
  const callToActionData = homeData.data.pageBy.callToAction;
  
  return (
    <>
      <TopHeader />

      <Navbar logoData={logoData} />

      <Pagebanner pageName='Search' />

      <SearchArea posts={posts} />

      <CallToAction callToActionData={callToActionData} />

      <Partner partnerData={partnerData} />
      
      <Footer />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const res = await getPostsBySearch(query.query);
  const homeData = await getHomeData();

  return {
    props: {
      posts: res.data,
      pagination: {
        ...res.pagination,
        basePath: '/post',
      },
      homeData
    },
  };
}

export default Search;
