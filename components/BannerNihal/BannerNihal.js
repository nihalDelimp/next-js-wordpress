const BannerNihal = ({ banner, video }) => {
    console.log(video[0].bannerVideo[0].bannerVideo, "viivivivivivi")
    return (
        <>
            {
                banner.map((item) => (
                    item.bannerItems.map((item2, index2) => {
                        return (
                            <div className="wp-block-uagb-container slide-div uagb-block-a3f2e44f alignfull uagb-is-root-container" style={{ backgroundImage: `url(${item2.bannerImage.sourceUrl})` }} id="sec2">
                                <div className="uagb-container-inner-blocks-wrap">
                                    <h1 className="text-center text-white pt-2 pb-2 bottom-buffer-0point5rem">{item2.bannerTitle} </h1>
                                    <p className="text-white pt-2 mb-2 mt-2">{item2.bannerDescription}</p>
                                    <div className="is-layout-flex wp-block-buttons justify-content-center">
                                        <div className="wp-block-button button_main is-style-fill mt-4 mb-2"><a className="wp-block-button__link wp-element-button" href={item2.bannerUrl} rel="">{item2.bannerButtonLabel}</a></div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                ))
            }
            < section id="index-section_10" className="section bg-gradient bg-size-cover bg-no-repeat bg-center" >
                <div id="index-container" className="container-lg">
                    <div className="mx-lg-6 mx-4 pt-lg-0 pb-lg-0 pt-5 pb-5">
                        <div className="row pt-2 pb-2">
                            <div className="align-self-center text-center text-lg-left col-sm-12">
                                <video id="portfolio_expertise_vid_home" className="d-block" width="100%" height="100%" controls="controls" muted poster="public/videos/video-placeholder.png">
                                    <source src={video[0].bannerVideo[0].bannerVideo} type="video/mp4" />
                                    Your browser does not support HTML video.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default BannerNihal;
