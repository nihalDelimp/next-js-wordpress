import getsmartSolutionsData from "../query/Services/smartSolutions";
import SmartSolutions from '../components/Services/SmartSolutions';

const SmartSolutionsIndustry = ({ smartSolutions }) => {

    console.log(smartSolutions, "smahsdsahdksadsa")
    // const bannerData = home.data.pageBy.bannerSection.banner;
    // const videoData = bannerData.filter(item => item.video)
    // const singleImageData = bannerData.filter(item => item.singleImage)
    // const referencesData = bannerData.filter(item => item.referencesSectionItems)
    // const footerSectionData = bannerData.filter(item => item.footerSection)
    return (
        <h1>Nihalll</h1>
        // <Banner banner={bannerData} singleImageData={singleImageData} video={videoData} references={referencesData} footerSection={footerSectionData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            smartSolutions: await getsmartSolutionsData(),
        },
    };
}

export default SmartSolutionsIndustry;
