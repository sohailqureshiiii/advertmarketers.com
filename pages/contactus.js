import { Navbar } from "@/Components/Navigation/Navbar";
import React, { useEffect } from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
import "../app/globals.css";
import Backgroundatcareers from "../public/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai.jpg";
import Address from "../public/adress.svg";
import Phone from "../public/phone-call.svg";
import Mail from "../public/mail.svg";
import Image from "next/image";
import { Footer } from "@/Components/Footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import NewContactForm from "@/Components/NewContactForm/newContactForm";
import Head from "next/head";

const contactus = () => {
  // ----- Animation ----
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Contact AdvertMarketers</title>
        <meta
          name="description"
          content="Don't let questions linger we're just a click or call away. Reach out now, and let's embark on a journey of collaboration, turning your visions into reality."
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
              Contact Us
            </h2>
          </div>{" "}
        </div>{" "}
      </div>
      <div className="bac-white-at-carees-bottom-sh">
        <div className="displayflexat-ns " style={myFont.style}>
          <div className="header-layout-at-main-section">
            <div
              className="main-divison-box-for-contacts-at-box-amial-s"
              data-aos="fade-up"
            >
              <div className="main-width-for-enter-ineer-box-sj">
                <div className="flx-in-for-img-in-cntct-boc-sj">
                  <Image src={Mail} />
                </div>
                <div className="fr-mrgin-tp-at-ctnt-bx">
                  <p className="flx-at-text-center-ins-shskn">
                    sales@advertmarketers.com
                  </p>
                  <p className="flx-at-text-center-ins-shskn">
                    contactus@advertmarketers.com
                  </p>
                </div>
              </div>
              <div className="main-width-for-enter-ineer-box-sj">
                <div className="flx-in-for-img-in-cntct-boc-sj">
                  <Image src={Address} />
                </div>
                <div className="fr-mrgin-tp-at-ctnt-bx">
                  <p className="flx-at-text-center-ins-shskn">
                    India Address Office 1 – Office Number 504, Pentagon Tower
                    04, Magarpatta City, Pune – 411028
                    <br />
                    1267 Willis St., STE 200, Redding, California 96001 United
                    States
                  </p>
                  {/* <p className="flx-at-text-center-ins-shskn">
                    USA Address 1267 Willis St., STE 200, Redding, California
                    96001 United States
                  </p> */}
                </div>
              </div>
              <div className="main-width-for-enter-ineer-box-sj">
                <div className="flx-in-for-img-in-cntct-boc-sj">
                  <Image src={Phone} />
                </div>
                <div className="fr-mrgin-tp-at-ctnt-bx">
                  <p className="flx-at-text-center-ins-shskn">+91 8999464197</p>
                  <p className="flx-at-text-center-ins-shskn">+91 7083235282</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="displayflexat-ns " style={myFont.style}>
          <div className="header-layout-at-main-section">
            <NewContactForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default contactus;
