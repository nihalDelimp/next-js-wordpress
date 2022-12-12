import getaboutDigitalSolutionsData from "../query/aboutUs/aboutDigitalSolutions";
import AboutDigitalSolutions from '../components/AboutUs/AboutDigitalSolutions';

const AboutUsDigitalSolution = ({ aboutDigitalSolutions }) => {
    const headerData = aboutDigitalSolutions.data.pageBy.industriesContents.industriesPageContent

    const resData = aboutDigitalSolutions.data.pageBy.aboutSection.aboutUsContent;
    const tabContainer = resData && resData[0] ? resData[0]?.tabContainer : []
    const tabMenuItems = resData && resData[0] ? resData[0]?.tabMenuItems : []

    console.log("headerDataresDataAboutUsDigitalSolution" , headerData)

    return (
        <AboutDigitalSolutions tabContainer = {tabContainer}  tabMenuItems = {tabMenuItems} headerData = {headerData} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            aboutDigitalSolutions: await getaboutDigitalSolutionsData(),
        },
    };
}

export default AboutUsDigitalSolution;
