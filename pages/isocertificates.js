import React, { useEffect } from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
import "../app/globals.css";
import Image from "next/image";
import CertificateOne from "../public/certificateonee.png";
import CertificateTwo from "../public/certificatetwoo.png";
import CertificateThree from "../public/certificatethreee.png";
import Caontatc from "../public/dfghnm.jpg";
import { Footer } from "@/Components/Footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { Navbar } from "@/Components/Navigation/Navbar";
const IsoCertificates = () => {
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
        {/* <Image
          src={Backgroundatcareers}
          className="background-for-carees-page-at-isdkjs"
        /> */}
      </div>
      <div style={myFont.style} className="backgd-fr-blck-inks">
        <div className="displayflexat-ns adhujw-awdojkm" style={myFont.style}>
          <div className="header-layout-at-main-section ">
            <h2 className="header-of-careers-and-other-pages-of-insd">
              {" "}
              Data Access & Data Rectification
            </h2>
          </div>{" "}
        </div>{" "}
      </div>
      <div className="bac-white-at-carees-bottom-sh">
        <div className="displayflexat-ns " style={myFont.style}>
          <div className="header-layout-at-main-section adhujw-awdojkm">
            <h4
              className="section-header-at-home-page-view new-pading-for-tops-sjx"
              data-aos="fade-down"
            >
              We are Certified and Compliant with :
            </h4>
            <div className="extra-border-with" data-aos="fade-up"></div>
            <div>
              <p
                className="new-para-for-careers-afor-more-onfro new-pading-for-tops-sjx"
                data-aos="fade-up"
              >
                ISO 9001:2015
                <br />
                (Quality Management System)
              </p>
              <p
                className="new-para-for-careers-afor-more-onfro new-pading-for-tops-sjx"
                data-aos="fade-up"
              >
                ISO 27001:2022
                <br />
                (Information Security Management System)
              </p>
              <p
                className="new-para-for-careers-afor-more-onfro new-pading-for-tops-sjx"
                data-aos="fade-up"
              >
                ISO/IEC 27001:2025
                <br />
                (Information Security, cyber security and privacy protect -
                Privacy Information Management System - Requirements and
                guidance )
              </p>
              <div className="awdkad-awjkenad-awdajdknm">
                <Image src={CertificateOne} className="aduj-wjdadmacawadfa" />
                <Image src={CertificateTwo} className="aduj-wjdadmacawadfa" />
                <Image src={CertificateThree} className="aduj-wjdadmacawadfa" />
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

export default IsoCertificates;
