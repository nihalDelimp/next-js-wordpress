import React from 'react'

function Newsroom({headerData}) {
  return (
    <div >
      <section id="newsroom-section_1" style={{ backgroundColor: 'rgb(2,0,36)' }} className="wow fadeInUp bg-gradient section">
         <div id="newsroom-container" className="container-lg pt-4 pb-4">
            <div className="row pt-8 pb-4 pt-lg-1 pb-lg-1">
               <div className="col-lg-12 text-left">
                  <ul className="alfanar-breadcrumb font-bold no-margin-bottom">
                     <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/">Home</a></li>
                     <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">Insights & Newsroom : Newsroom</a></li>
                  </ul>
               </div>
            </div>
            <div className="row">
               <div className="pt-2 pb-2 col-lg-6 align-self-center wow">
                  <h1 className="text-white font-bold bottom-buffer-2point5rem">{headerData[0]?.heading}</h1>
                  <p className="text-white font-medium extra-large">{headerData[0]?.description}</p>
               </div>
               <div className="pt-2 pb-2 col-lg-6 align-self-center text-lg-right text-center wow">
                  <img className="w-100" src= {headerData[0].image?.sourceUrl}/>
               </div>
            </div>
         </div>
      </section>

      <section id="newsroom-section_2" className="wow section">
         <div id="newsroom-container" className="container-lg pt-4 pb-4 pt-lg-8 pb-lg-8">
            <div className="row pt-4 pb-4">
               <div className="col-lg-12">
                  <ul className="nav nav-tabs alfanar-tabs">
                     <li className="pb-3">
                        <a className="text-dark-grey pb-lg-3 pb-2 active show" data-toggle="tab" href="#blogs">
                           News & Events
                        </a>
                     </li>
                     <li className="pb-3">
                        <a data-toggle="tab" href="#pressrelease">
                           Press Release
                        </a>
                     </li>
                   </ul>
                  <div className="tab-content alfanar-tab-content">
                     <div id="blogs" className="mt-2 mt-lg-5 mb-3 tab-pane active">
                        <div className="row">
                           <div className="col-lg-4 col-sm-12 pt-4 pb-4">
                              <div className="service-block-container">
                                 <div className="service-block-image bg-primary">
                                    <img src="https://www.bernalministries.us/wp-content/uploads/2021/08/Screen-Shot-2021-11-11-at-1.15.31-PM.png"/>
                                 </div>
                                 <div className="service-block-content text-justify bg-section-grey-1 p-3 m-4 pr-lg-4">
                                    <p className="small pt-2 mb-0 text-left">By: Hosam Ahmad</p>
                                    <h2 className="pb-3 text-dark-grey pt-2 pr-lg-5 mr-lg-5">Blog Title</h2>
                                    <p className="pt-2 pb-2 text-dark-grey pr-lg-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    <p className="small mb-0 text-right">2021/1/1</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-12 pt-4 pb-4">
                              <div className="service-block-container">
                                 <div className="service-block-image bg-primary">
                                    <img src="https://www.bernalministries.us/wp-content/uploads/2021/08/Screen-Shot-2021-11-11-at-1.15.31-PM.png"/>
                                 </div>
                                 <div className="service-block-content text-justify bg-section-grey-1 p-3 m-4 pr-lg-4">
                                    <p className="small pt-2 mb-0 text-left">By: Hosam Ahmad</p>
                                    <h2 className="pb-3 text-dark-grey pt-2 pr-lg-5 mr-lg-5">Blog Title</h2>
                                    <p className="pt-2 pb-2 text-dark-grey pr-lg-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    <p className="small mb-0 text-right">2021/1/1</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-12 pt-4 pb-4">
                              <div className="service-block-container">
                                 <div className="service-block-image bg-primary">
                                    <img src="https://www.bernalministries.us/wp-content/uploads/2021/08/Screen-Shot-2021-11-11-at-1.15.31-PM.png"/>
                                 </div>
                                 <div className="service-block-content text-justify bg-section-grey-1 p-3 m-4 pr-lg-4">
                                    <p className="small pt-2 mb-0 text-left">By: Hosam Ahmad</p>
                                    <h2 className="pb-3 text-dark-grey pt-2 pr-lg-5 mr-lg-5">Blog Title</h2>
                                    <p className="pt-2 pb-2 text-dark-grey pr-lg-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    <p className="small mb-0 text-right">2021/1/1</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-lg-4 col-sm-12 pt-4 pb-4">
                              <div className="service-block-container">
                                 <div className="service-block-image bg-primary">
                                    <img src="https://www.bernalministries.us/wp-content/uploads/2021/08/Screen-Shot-2021-11-11-at-1.15.31-PM.png"/>
                                 </div>
                                 <div className="service-block-content text-justify bg-section-grey-1 p-3 m-4 pr-lg-4">
                                    <p className="small pt-2 mb-0 text-left">By: Hosam Ahmad</p>
                                    <h2 className="pb-3 text-dark-grey pt-2 pr-lg-5 mr-lg-5">Blog Title</h2>
                                    <p className="pt-2 pb-2 text-dark-grey pr-lg-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    <p className="small mb-0 text-right">2021/1/1</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-12 pt-4 pb-4">
                              <div className="service-block-container">
                                 <div className="service-block-image bg-primary">
                                    <img src="https://www.bernalministries.us/wp-content/uploads/2021/08/Screen-Shot-2021-11-11-at-1.15.31-PM.png"/>
                                 </div>
                                 <div className="service-block-content text-justify bg-section-grey-1 p-3 m-4 pr-lg-4">
                                    <p className="small pt-2 mb-0 text-left">By: Hosam Ahmad</p>
                                    <h2 className="pb-3 text-dark-grey pt-2 pr-lg-5 mr-lg-5">Blog Title</h2>
                                    <p className="pt-2 pb-2 text-dark-grey pr-lg-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    <p className="small mb-0 text-right">2021/1/1</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-12 pt-4 pb-4">
                              <div className="service-block-container">
                                 <div className="service-block-image bg-primary">
                                    <img src="https://www.bernalministries.us/wp-content/uploads/2021/08/Screen-Shot-2021-11-11-at-1.15.31-PM.png"/>
                                 </div>
                                 <div className="service-block-content text-justify bg-section-grey-1 p-3 m-4 pr-lg-4">
                                    <p className="small pt-2 mb-0 text-left">By: Hosam Ahmad</p>
                                    <h2 className="pb-3 text-dark-grey pt-2 pr-lg-5 mr-lg-5">Blog Title</h2>
                                    <p className="pt-2 pb-2 text-dark-grey pr-lg-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    <p className="small mb-0 text-right">2021/1/1</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="pressrelease" className="mt-2 mt-lg-5 mb-3 tab-pane fade">
                        <div className="row">
                           <div className="col-lg-4 col-sm-12 pt-4 pb-4">
                              <div className="service-block-container">
                                 <div className="service-block-image bg-primary">
                                    <img src="https://www.bernalministries.us/wp-content/uploads/2021/08/Screen-Shot-2021-11-11-at-1.15.31-PM.png"/>
                                 </div>
                                 <div className="service-block-content text-justify bg-section-grey-1 p-3 m-4 pr-lg-4">
                                    <h2 className="pb-3 text-dark-grey pt-2">Press Release Title</h2>
                                    <p className="pt-2 pb-2 text-dark-grey pr-lg-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    <p className="small mb-0 text-right">2021/1/1</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-12 pt-4 pb-4">
                              <div className="service-block-container">
                                 <div className="service-block-image bg-primary">
                                    <img src="https://www.bernalministries.us/wp-content/uploads/2021/08/Screen-Shot-2021-11-11-at-1.15.31-PM.png"/>
                                 </div>
                                 <div className="service-block-content text-justify bg-section-grey-1 p-3 m-4 pr-lg-4">
                                    <h2 className="pb-3 text-dark-grey pt-2">Press Release Title</h2>
                                    <p className="pt-2 pb-2 text-dark-grey pr-lg-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    <p className="small mb-0 text-right">2021/1/1</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-12 pt-4 pb-4">
                              <div className="service-block-container">
                                 <div className="service-block-image bg-primary">
                                    <img src="https://www.bernalministries.us/wp-content/uploads/2021/08/Screen-Shot-2021-11-11-at-1.15.31-PM.png"/>
                                 </div>
                                 <div className="service-block-content text-justify bg-section-grey-1 p-3 m-4 pr-lg-4">
                                    <h2 className="pb-3 text-dark-grey pt-2">Press Release Title</h2>
                                    <p className="pt-2 pb-2 text-dark-grey pr-lg-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    <p className="small mb-0 text-right">2021/1/1</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
    </div>
  )
}

export default Newsroom
