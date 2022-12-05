import TopHeader from '../components/Navbar/TopHeader';
import Navbar from '../components/Navbar/Navbar';
import Pagebanner from '../components/Common/Pagebanner';
import BlogArea from '../components/BlogArea/BlogArea';
import CallToAction from '../components/Common/CallToAction';
import Partner from '../components/Common/Partner';
import Footer from '../components/Footer/Footer';

// fetch data
import { getPaginatedPosts } from '../query/PaginatedPost';
import getHomeData from '../query/homeQuery/homeData';

const Blog = ({ posts, pagination, homeData }) => {

  const logoData = homeData.data.pageBy.homeLogo;
  const partnerData = homeData.data.pageBy.partnerSection;
  const callToActionData = homeData.data.pageBy.callToAction;

  return (
    <>
      <header className='header-area'>

        <TopHeader />

        <Navbar logoData={logoData} />
        
      </header>

      <Pagebanner pageName='Blog' />

      <BlogArea posts={posts} pagination={pagination} />

      <CallToAction callToActionData={callToActionData} />

      <Partner partnerData={partnerData} />
      
      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  const res = await getPaginatedPosts();
  const homeData = await getHomeData();

  return {
    props: {
      posts: res.posts,
      pagination: {
        ...res.pagination,
        basePath: '/post',
      },
      homeData
    },
  };
}

export default Blog;
