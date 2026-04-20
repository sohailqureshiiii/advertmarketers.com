import React, { useEffect } from "react";
import localFont from "next/font/local";
import { Navbar } from "@/Components/Navigation/Navbar";
const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
import "../app/globals.css";
import Backgroundatcareers from "../public/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai.jpg";
import CareersPicLeft from "../public/careeeers.jpg";
import Image from "next/image";
import { Footer } from "@/Components/Footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
const careers = () => {
  // ----- Animation ----
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Career at AdvertMarketers</title>
        <meta
          name="description"
          content="JOIN OUR TEAM IF YOU INTERESTED, GET IN TOUCH WITH US TODAY AT hr@advertmarketers.com"
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
              Careers
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
              Inspire Challenges. Meaningful Careers
            </h4>
            <div className="width-large-at-vos" data-aos="fade-up"></div>
            <div>
              <p
                className="new-para-for-careers-afor-more-onfro new-pading-for-tops-sjx"
                data-aos="fade-up"
              >
                AdvertMarketers provides you the opportunity to work in a
                dynamic business environment, for clients located around the
                world. Our employees are given challenging responsibilities and
                the chance to grow with the company. AdvertMarketers is an equal
                opportunity employer, where personnel are nurtured, grown and
                empowered. We offer unparalleled benefits and perks, along with
                an industry standard salary package.
              </p>
              <p
                className="new-para-for-careers-afor-more-onfro"
                data-aos="fade-up"
              >
                Our passion towards excellence is what drives to achieve
                outstanding results.
              </p>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
      <div
        className="displayflexat-ns white-back-grnd-ahjhj"
        style={myFont.style}
      >
        <div className="header-layout-at-main-section">
          <div className="flx-of-two-coloms-in-mainsection">
            <div>
              <h1
                className="header-of-h-one-tag animate--fast"
                data-aos="fade-up"
              >
                JOIN OUR TEAM
              </h1>
              <h1 className="header-of-h-one-tag animate--fast"></h1>
              <p className="para-of-main-section-at-first animate--fast">
                IF YOU INTERESTED, GET IN TOUCH WITH US TODAY AT
              </p>
              <h4 className="section-header-at-home-page-view new-pading-for-tops-sjx padins-kjdssodic">
                hr@advertmarketers.com
              </h4>
            </div>
            <div data-aos="fade-up">
              <Image
                src={CareersPicLeft}
                className="img-fr-careees-page-at-cckjsd"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default careers;
