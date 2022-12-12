import getWhitePaperData from "../query/Insights/whitePaper";
import WhitePaper from '../components/Insights/WhitePaper';

const WhitePaperInsights = ({ whitePaper }) => {
    const resData = whitePaper.data.pageBy.insights.tabSection;
    const tabContainer = resData && resData[0] ? resData[0]?.tabContainer : []
    const tabMenuItems = resData && resData[0] ? resData[0]?.tabMenuItems : []

    return (
        <WhitePaper tabContainer = {tabContainer}  tabMenuItems = {tabMenuItems} />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            whitePaper: await getWhitePaperData(),
        },
    };
}

export default WhitePaperInsights;
