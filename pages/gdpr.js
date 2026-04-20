import React, { useEffect } from "react";
import { Navbar } from "@/Components/Navigation/Navbar";
import localFont from "next/font/local";
const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
import "../app/globals.css";
import Image from "next/image";
import Backgroundatcareers from "../public/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai.jpg";
import Caontatc from "../public/dfghnm.jpg";
import { Footer } from "@/Components/Footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
const gdpr = () => {
  // ----- Animation ----
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);

  return (
    <>
      <Head>
        <title>GDPR – Compliant Processes</title>
        <meta
          name="description"
          content="AdvertMarketers follows a compliant GDPR-defined process that handles business data,
           which is minimally necessary for the specified purpose of business-to-business marketing.
            AdvertMarketers processes data for B2B communications and all marketing programs, 
            which are for business purposes only. We strive to connect with the ‘business’ and not individual entities.
           Our aim is not on managing marketing campaigns for personal, consumer-focused marketing."
        />
        <meta
          name="keywords"
          content="business, B2B, B2B Solutions, B2B services, lead generation, ROI,LEADS GENERATED,
          CAMPAIGNS,AdvertMarketers,quality leads,20+ years of rich experience, best leads, 
          high-quality data,metrics,analytics,Marketing,DEMAND GENERATION, Sales Development, 
          Database Services, Digital Marketing"
        />
      </Head>
      <div style={myFont.style}>
        <Navbar />
      </div>
      <div>
        <Image
          src={Backgroundatcareers}
          className="background-for-carees-page-at-isdkjs"
        />
      </div>
      <div style={myFont.style} className="backgd-fr-blck-inks">
        <div className="displayflexat-ns " style={myFont.style}>
          <div className="header-layout-at-main-section">
            <h2 className="header-of-careers-and-other-pages-of-insd">GDPR</h2>
          </div>{" "}
        </div>{" "}
      </div>
      <div className="bac-white-at-carees-bottom-sh">
        <div className="displayflexat-ns " style={myFont.style}>
          <div className="header-layout-at-main-section">
            <h4
              className="section-header-at-home-page-view new-pading-for-tops-sjx"
              data-aos="fade-down"
            >
              GDPR – Compliant Processes
            </h4>
            <div className="extra-border-with" data-aos="fade-up"></div>
            <div>
              <p
                className="new-para-for-careers-afor-more-onfro new-pading-for-tops-sjx"
                data-aos="fade-up"
              >
                AdvertMarketers follows a compliant GDPR-defined process that
                handles business data, which is minimally necessary for the
                specified purpose of business-to-business marketing.
                AdvertMarketers processes data for B2B communications and all
                marketing programs, which are for business purposes only. We
                strive to connect with the ‘business’ and not individual
                entities. Our aim is not on managing marketing campaigns for
                personal, consumer-focused marketing.
              </p>
              <p
                className="new-para-for-careers-afor-more-onfro"
                data-aos="fade-up"
              >
                Since AdvertMarketers utilises electronic communications
                exclusively for other businesses, it falls under the GDPR
                consent definition of “Legitimate Interest” in Article 6.1(f) of
                the GDPR law, which paves the way for commercial interests to
                communicate with other commercial interests.
              </p>
            </div>
          </div>{" "}
        </div>
        <div className="background-gradient-for-flex-hjsd" style={myFont.style}>
          <div className="displayflexat-ns clasdi-sjds-sdnd">
            <div className="header-layout-at-main-section padd-inde-sjkds">
              <div>
                <h3
                  className="bringyour-header-at-contactsection"
                  data-aos="fade-up"
                >
                  Bring your business to a new quality level!
                </h3>
                <h3 className="get-in-touch-header-at-sj" data-aos="fade-up">
                  Get in touch now!
                </h3>
                <p className="doen-para-at-call-us-nwos" data-aos="fade-up">
                  CALL US NOW
                </p>
                <p
                  className="small-para-at-contact-i-now-asx"
                  data-aos="fade-up"
                >
                  +91 8087 14 4552
                </p>
                <p
                  className="small-para-at-contact-i-now-asx"
                  data-aos="fade-up"
                >
                  +91 8999 46 4197
                </p>
                <p
                  className="small-para-at-contact-i-now-asx"
                  data-aos="fade-up"
                >
                  SEND AN EMAIL
                </p>
                <p
                  className="small-para-at-contact-i-now-asx"
                  data-aos="fade-up"
                >
                  sales@advertmarketers.com
                </p>
                <p
                  className="small-para-at-contact-i-now-asx"
                  data-aos="fade-up"
                >
                  contactus@advertmarketers.com
                </p>
              </div>
              <div data-aos="fade-up">
                <Image
                  src={Caontatc}
                  width={350}
                  height={350}
                  className="flx-in-nt-ckks-img"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default gdpr;
