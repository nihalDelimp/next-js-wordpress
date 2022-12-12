import React from 'react'

function ContactUs({headerData}) {
   return (
      <div  >
         <section id="contact_us-section_1" className="wow fadeInUp  section" style={{ backgroundColor: 'rgb(2,0,36)', visibility: "visible", animationName: "fadeInUp" }}>
            <div id="contact_us-container" className="container-lg pt-4 pb-4">
               <div className="row pt-8 pb-4 pt-lg-1 pb-lg-1">
                  <div className="col-lg-12 text-left">
                     <ul className="alfanar-breadcrumb font-bold uc no-margin-bottomd">
                        <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="/about-us.html">About Us</a></li>
                        <li className="alfanar-breadcrumb-item" aria-current="page"><a className="text-white" href="#">About Us : Contact Us</a></li>
                     </ul>
                  </div>
               </div>
               <div className="row">
               <div className="pt-2 pb-2 col-lg-6 align-self-center wow">
                  <h1 className="text-white font-bold bottom-buffer-2point5rem">{headerData[0]?.heading}</h1>
                  <p className="text-white font-medium extra-large">{headerData[0]?.description}</p>
               </div>
               <div className="pt-2 pb-2 col-lg-6 align-self-center text-lg-right text-center wow">
                  <img className="" src= {headerData[0].image?.sourceUrl}/>
               </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default ContactUs
