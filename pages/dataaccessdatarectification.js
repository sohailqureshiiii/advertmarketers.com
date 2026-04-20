import React, { useEffect } from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
import "../app/globals.css";
import Image from "next/image";
import Backgroundatcareers from "../public/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai.jpg";
import Caontatc from "../public/dfghnm.jpg";
import { Footer } from "@/Components/Footer/footer";
import { Input } from "@/Components/Inputs/Input";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { Navbar } from "@/Components/Navigation/Navbar";
const Dataaccessdatarectification = () => {
  // ----- Animation ----
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Data Access & Data Rectification AdvertMarketers</title>
        <meta
          name="description"
          content="For any data access requests or in case you wish to rectify any data that we have on you, we’ll get in touch with you. Provide us with your email id."
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
            <h2 className="header-of-careers-and-other-pages-of-insd">
              {" "}
              Data Access & Data Rectification
            </h2>
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
              Data Access & Data Rectification
            </h4>
            <div className="extra-border-with" data-aos="fade-up"></div>
            <div>
              <p
                className="new-para-for-careers-afor-more-onfro new-pading-for-tops-sjx"
                data-aos="fade-up"
              >
                For any data access requests or in case you wish to rectify any
                data that we have on you, we’ll get in touch with you. Provide
                us with your email id.
              </p>
              <div>
                <div
                  className="container-for-contact-us-form"
                  data-aos="fade-up"
                >
                  <div className="continer-of-inputs-at-contact-us-form">
                    <div className="container-for-inputs">
                      <Input title="Your Name (required)" placeholder="" />
                    </div>
                    <div className="container-for-inputs">
                      <Input title="Your Email (required)" placeholder="" />
                    </div>
                    <div className="container-for-inputs">
                      <Input title="Subject" placeholder="" />
                    </div>
                    <div className="container-for-inputs">
                      <Input title="Job Title" placeholder="" />
                    </div>
                    <p className="title-for-input-atha">Message</p>
                    <textarea
                      className="text-area-for-message-jsd"
                      placeholder="Message"
                    />{" "}
                    <button
                      style={myFont.style}
                      className="btn-for-submit-at-contact-screen"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div
          className="background-gradient-for-flex-hjsd"
          style={myFont.style}
          data-aos="fade-up"
        >
          <div className="displayflexat-ns clasdi-sjds-sdnd">
            <div className="header-layout-at-main-section padd-inde-sjkds">
              <div>
                <h3
                  className="bringyour-header-at-contactsection"
                  data-aos="fade-right"
                >
                  Bring your business to a new quality level!
                </h3>
                <h3 className="get-in-touch-header-at-sj" data-aos="fade-right">
                  Get in touch now!
                </h3>
                <p className="doen-para-at-call-us-nwos" data-aos="fade-right">
                  CALL US NOW
                </p>
                <p
                  className="small-para-at-contact-i-now-asx"
                  data-aos="fade-right"
                >
                  +91 8999 46 4197
                </p>
                <p
                  className="small-para-at-contact-i-now-asx"
                  data-aos="fade-right"
                >
                  +91 8087 14 4552
                </p>
                <p
                  className="small-para-at-contact-i-now-asx"
                  data-aos="fade-right"
                >
                  SEND AN EMAIL
                </p>
                <p
                  className="small-para-at-contact-i-now-asx"
                  data-aos="fade-right"
                >
                  sales@advertmarketers.com
                </p>
                <p
                  className="small-para-at-contact-i-now-asx"
                  data-aos="fade-right"
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

export default Dataaccessdatarectification;
