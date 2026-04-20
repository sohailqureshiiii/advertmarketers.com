import React, { useEffect } from "react";
import localFont from "next/font/local";
import { Navbar } from "@/Components/Navigation/Navbar";
const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
import "../app/globals.css";
import { CountUp } from "use-count-up";
import Link from "next/link";
import TeamsImg from "../public/group.svg";
import ExperienceImg from "../public/quality.svg";
import SuccessImg from "../public/growth.svg";
import Image from "next/image";
import { Footer } from "@/Components/Footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import NewContactForm from "@/Components/NewContactForm/newContactForm";
import Head from "next/head";

const About = () => {
  // ----- Animation ----

  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <>
      <Head>
        <title>About AdvertMarketers</title>
        <meta
          name="description"
          content="Choose our B2B services for expert lead generation, tailored
            solutions, and exceptional results. We drive growth, increase ROI,
            and deliver outstanding value. Partner with us for a thriving
            business."
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
      <div
        className="displayflexat-ns extra-tp-marg-insdj"
        style={myFont.style}
      >
        <div className="header-layout-at-main-section">
          <h1
            className="hone-large-title-fr-hdr-in-main-layout"
            data-aos="fade-down"
          >
            We are in the business of
          </h1>
          <h1
            className="hone-large-title-fr-hdr-in-main-layout"
            data-aos="fade-down"
          >
            Seamless B2B Solutions
          </h1>
          <p className="para-at-main-layout-atnew-sec" data-aos="fade-up">
            Choose our B2B services for expert lead generation, tailored
            solutions, and exceptional results. We drive growth, increase ROI,
            and deliver outstanding value. Partner with us for a thriving
            business.
          </p>
          <p className="third-para-header-at-ijnck" data-aos="fade-down">
            ACHIEVEMENTS
          </p>
        </div>
      </div>
      <div style={myFont.style} data-aos="fade-up">
        <div
          className="Counts-section-container-at-home-layout"
          style={{ marginTop: "0" }}
        >
          <div className="container-for-sinlge-count-ahome-layout">
            <h2 className="counts-of-new-hdr-sfs">
              <CountUp isCounting end={76387536} duration={3.2} />
            </h2>
            <p className="para-at-count-at-about">Leads Generated</p>
          </div>
          <div className="container-for-sinlge-count-ahome-layout">
            <h2 className="counts-of-new-hdr-sfs" data-val="7,526">
              <CountUp isCounting end={7526} duration={3.2} />
            </h2>
            <p className="para-at-count-at-about">Campaigns Launched</p>
          </div>
          <div className="container-for-sinlge-count-ahome-layout">
            <h2 className="counts-of-new-hdr-sfs" data-val="M">
              <CountUp isCounting end={60} duration={3.2} />M
            </h2>
            <p className="para-at-count-at-about">Audience Reached</p>
          </div>
          <div className="container-for-sinlge-count-ahome-layout no-border-at-right">
            <h2 className="counts-of-new-hdr-sfs">
              {" "}
              <CountUp isCounting end={97.6} duration={3.2} />%
            </h2>
            <p className="para-at-count-at-about">Client Satisfaction</p>
          </div>
        </div>
      </div>
      <div className="top-minus-padd-in-mobile-view" style={myFont.style}>
        <div className="displayflexat-ns with-backgrnd-blck">
          <div className="widtgh-fr-dms-center-layout">
            <div className="display-flx-with-about-dems-andblx">
              <div className="flx-in-of-hder-and-line">
                <h2 className="about-hdr-at-in-jka" data-aos="fade-up">
                  About AdvertMarketers
                </h2>
                <div
                  className="line-btwn-about-and-dhdr"
                  data-aos="fade-up"
                ></div>
              </div>
              <div className="width-for-left-section-at-sjk">
                <h2
                  className="hdr-aof-htwo-tag-at-about-sec"
                  data-aos="fade-up"
                >
                  Unveiling Our Story and Vision
                </h2>
                <p
                  className="para-at-about-sec-of-home-paly"
                  data-aos="fade-up"
                >
                  The search for quality leads is never-ending, but with the
                  right solutions, your business can reach the pinnacle of
                  success.
                </p>
                <p
                  className="para-at-about-sec-of-home-paly"
                  data-aos="fade-up"
                >
                  AdvertMarketers registered with the name of AM CODE PVT LTD
                  and with our 20+ years of rich experience, AdvertMarketers
                  bridges the gap between the demand for quality leads and
                  delivering the best leads to your enterprise. Our experience
                  in the B2B arena has helped us collaborate with clients and
                  deliver high-quality data, metrics, and analytics that drives
                  value and satisfaction. Focused on offering exceptional lead
                  generation and demand generation services, we’ve worked in
                  tandem with renowned agencies, publishers, and technology
                  organisations.
                </p>
                <Link href="/contactus" data-aos="fade-up">
                  <button
                    data-aos="fade-up"
                    // className="lets-cnt-btn-at-main-layout"
                    style={myFont.style}
                    className="contac-us-page-btn-cta-sjm margin-noleft"
                  >
                    Lets Connect
                  </button>
                </Link>
                <div className="display-block-btns-of-call-back-and-contact padobjdsosdv-sk">
                  <Link href="/contactus">
                    <button
                      style={myFont.style}
                      // className="lets-cnt-btn-at-main-layout"
                      className="lets-connect-atmobile-view-sect"
                    >
                      Lets Connect
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={myFont.style}>
        <p className="third-para-header-at-ijnck" data-aos="fade-up">
          WHY CHOOSE US
        </p>
        <h1
          className="hone-large-title-fr-hdr-in-main-layout pad-left-for-hdr-in-mob only-center-this-dhr"
          data-aos="fade-up"
        >
          The Right Decision for
        </h1>
        <h1
          className="hone-large-title-fr-hdr-in-main-layout pad-left-for-hdr-in-mob only-center-this-dhr"
          data-aos="fade-up"
        >
          Your Marketing Strategy
        </h1>
      </div>
      <div className="efioefkls-esolk-dsk" style={myFont.style}>
        {" "}
        <div className="flx-section-wihtjd">
          <div className="flx-with-img-and-hdr-and-para">
            <div className="flx-fr-im-of-hwye-dis">
              <div className="border-for-backgrnd-img-left" data-aos="fade-up">
                <Image
                  src={TeamsImg}
                  width={50}
                  height={50}
                  alt="AdvertMarketers"
                />
              </div>
            </div>
            <div>
              <h5 className="hdr-at-three-section-of-why" data-aos="fade-up">
                Professional Team
              </h5>
              <p
                className="para-at-three-section-of-why-choose-us"
                data-aos="fade-up"
              >
                HUMBLE, YET HONORED. Thats how our team defines themselves.
                We’ve also earned a few accolades. Sure, rewards and recognition
                are nice, but we don’t do it for the bragging rights.
              </p>
            </div>
          </div>
          <div className="flx-with-img-and-hdr-and-para">
            <div className="flx-fr-im-of-hwye-dis">
              <div className="border-for-backgrnd-img-left" data-aos="fade-up">
                <Image
                  src={ExperienceImg}
                  width={50}
                  height={50}
                  alt="AdvertMarketers"
                />
              </div>{" "}
            </div>
            <div>
              <h5 className="hdr-at-three-section-of-why" data-aos="fade-up">
                Years Experience
              </h5>
              <p
                className="para-at-three-section-of-why-choose-us"
                data-aos="fade-up"
              >
                We've learned in past 17 years that it's not about the tactics
                but the strategy. And that's made all difference. We've helped
                57+ businesses who need an outsourced team of experts to carry
                out their marketing vision
              </p>
            </div>
          </div>
          <div className="flx-with-img-and-hdr-and-para">
            <div className="flx-fr-im-of-hwye-dis">
              {" "}
              <div className="border-for-backgrnd-img-left" data-aos="fade-up">
                <Image
                  src={SuccessImg}
                  width={50}
                  height={50}
                  alt="AdvertMarketers"
                />
              </div>{" "}
            </div>
            <div>
              <h5 className="hdr-at-three-section-of-why" data-aos="fade-up">
                Success Guaranteed
              </h5>
              <p
                className="para-at-three-section-of-why-choose-us"
                data-aos="fade-up"
              >
                We at AdvertMarketers help you undertake your marketing and
                sales initiatives by recognising your buyers’ persona and their
                intentions to purchase. That's why we have a recurring business
                ratio of 96.8%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="displayflexat-ns " style={myFont.style}>
          <div className="header-layout-at-main-section">
            <NewContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

// export function generateMetadata({ params }) {
//   return {
//     title: "ABOUT ADVERTMARKETERS",
//     description:
//       "With our 20+ years of rich experience, AdvertMarketers bridges the gap between the demand for quality leads and delivering the best leads to your enterprise. Our experience in the B2B arena has helped us collaborate with clients and deliver high-quality data, metrics, and analytics that drives value and satisfaction. AdvertMarketers goes the distance in giving its clients what they rightly deserve—unparalleled and sales-focused services.",
//   };
// }
