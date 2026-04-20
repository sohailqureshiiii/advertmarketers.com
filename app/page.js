"use client";
import { Navbar } from "@/Components/Navigation/Navbar";
import Image from "next/image";
import HomePageLeft from "../public/myaccount.shopisthan.com-signup.png";
import Whoweare from "../public/who-we-are.jpg";
import MediaAgencies from "../public/mediaagencies.jpg";
import Business from "../public/handshake-close-up-executives.jpg";
import TechCompo from "../public/person-working-with-floating-screens.jpg";
import Caontatc from "../public/dfghnm.jpg";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import { Footer } from "@/Components/Footer/footer";
const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { CountUp } from "use-count-up";
import Head from "next/head";

export default function Home() {
  const [show, setShow] = useState(false);

  // FAQ----
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);

  // ----- Animation ----

  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <>
      <div style={myFont.style}>
        <Navbar />
      </div>
      {/* ------------- Section one -----------  */}
      <div
        className="displayflexat-ns extra-tp-marg-insdj"
        style={myFont.style}
      >
        <div className="header-layout-at-main-section">
          <div className="flx-of-two-coloms-in-mainsection">
            <div data-aos="fade-up">
              <h1 className="header-of-h-one-tag animate--fast">
                Think quality leads
              </h1>
              <h1 className="header-of-h-one-tag animate--slow">
                Think AdvertMarketers{" "}
              </h1>
              <p className="para-of-main-section-at-first animate--slowtwo">
                The search for quality leads is never-ending, but with the right
                solutions, your business can reach the pinnacle of success.
              </p>
              <div className="disply-flx-at-buttons-section-at-main">
                <Link href="/contactus">
                  <button
                    className="contact-us-btn-at-buttons-sections"
                    style={myFont.style}
                  >
                    Contact Us
                  </button>
                </Link>
                <Link href="/About">
                  <button
                    className="know-more-btln-at-main-section-home"
                    style={myFont.style}
                  >
                    Know more
                  </button>
                </Link>
              </div>
            </div>
            <div data-aos="fade-up">
              <Image
                width={600}
                src={HomePageLeft}
                className="left-first-image-at-top-section-of-websites-sd"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* ----------------- Section two --------------- */}
      <div className="displayflexat-ns" style={myFont.style}>
        <div className="header-layout-at-main-section" data-aos="fade-up">
          <h4 className="section-header-at-home-page-view">WHO WE ARE</h4>
          <div className="border-of-bottom-at-section-header"></div>
          <div className="flx-of-two-coloms-in-mainsection margin-top-at-secound">
            <div data-aos="fade-up">
              <h2 className="header-number-two-at-secound-section ds-none-at-mob-view">
                We Provide The <br />
                Solutions To Grow
                <br /> Your Business
              </h2>
              <h2 className="header-number-two-mobile-view-sect">
                We Provide The Solutions
                <br /> To Grow Your Business
              </h2>
              <p className="para-at-secound-section-who-are-in-main-homepage">
                AdvertMarketers registered with the name of AM CODE PVT LTD and
                with our 20+ years of rich experience, AdvertMarketers bridges
                the gap between the demand for quality leads and delivering the
                best leads to your enterprise. Our experience in the B2B arena
                has helped us collaborate with clients and deliver high-quality
                data, metrics, and analytics that drives value and satisfaction.
                Focused on offering exceptional lead generation and demand
                generation services, we’ve worked in tandem with renowned
                agencies, publishers, and technology organisations.
              </p>
            </div>
            <Image
              src={Whoweare}
              data-aos="fade-up"
              className="widht-fr-left-rigt-img-snd"
            />
          </div>
        </div>
      </div>
      {/* ----------------- Section three --------------- */}
      <div className="displayflexat-ns" style={myFont.style}>
        <div className="extra-padding-for-botom-third-sections">
          <div className="header-layout-at-main-section ">
            <h4 className="section-header-at-home-page-view" data-aos="fade-up">
              ACHIEVEMENTS
            </h4>
            <div
              className="border-of-bottom-at-section-header"
              data-aos="fade-up"
            ></div>
            <h3
              className="third-section-of-third-para-at-hd"
              data-aos="fade-up"
            >
              AdvertMarketers goes the distance in giving its clients what they
              rightly deserve unparalleled and sales-focused services.
            </h3>
            <div className="flx-direction-of-number-of-achivements">
              <h4
                className="header-at-third-section-part-achivemnts ds-none-at-mob-view"
                data-aos="fade-up"
              >
                Business
                <br />
                Performance
                <br />
                increase
              </h4>
              <h4
                className="header-number-two-mobile-view-sect "
                data-aos="fade-up"
              >
                Business Performance increase
              </h4>
              <div
                className="flx-direction--at-numbers-section-sffa"
                data-aos="fade-up"
              >
                <div className="container-with-left-border-and-intenal-padd">
                  <p className="paara-header0-at-nubers-sect-ion-sdf">
                    <CountUp isCounting end={27} duration={3.2} />+
                  </p>
                  <p>
                    Happy Satisfied
                    <br />
                    customers
                  </p>
                </div>
                <div className="container-with-left-border-and-intenal-padd">
                  <p className="paara-header0-at-nubers-sect-ion-sdf">
                    {" "}
                    <CountUp isCounting end={76} duration={3.2} />M
                  </p>
                  <p>
                    Contacts in
                    <br />
                    Database
                  </p>
                </div>
                <div className="container-with-left-border-and-intenal-padd">
                  <p className="paara-header0-at-nubers-sect-ion-sdf">
                    {" "}
                    <CountUp isCounting end={100} duration={3.2} />k
                  </p>
                  <p>
                    Quality Leads
                    <br />
                    Per Month
                  </p>
                </div>
                <div className="container-with-left-border-and-intenal-padd">
                  <p className="paara-header0-at-nubers-sect-ion-sdf">
                    {" "}
                    <CountUp isCounting end={200} duration={3.2} />+
                  </p>
                  <p>
                    Campaigns Deliver
                    <br />
                    Monthly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------- Section fourth ---------------  */}
      <div className="vsion-and-aim-padding-top-extra">
        <div className="displayflexat-ns" style={myFont.style}>
          <div className="header-layout-at-main-section">
            <h4 className="section-header-at-home-page-view" data-aos="fade-up">
              OUR VISION AND MISSION{" "}
            </h4>
            <div className="extra-border-with" data-aos="fade-up"></div>
          </div>
        </div>
        <div
          className="backgroud-orange-at-fourth-section-in-os"
          style={myFont.style}
        >
          <div className="displayflexat-ns">
            <div className="header-layout-at-main-section padding-bottom-at-orangesec">
              <div className="flx-for-misson-and-vison-section-area">
                <div data-aos="fade-up">
                  <h5 className="header-of-our-vision-white-clor">
                    OUR VISION
                  </h5>
                  <div className="border-section-white-down-at-vison"></div>
                  <p className="para-at-vision-sjks-sknd">
                    We strive to become the leading provider of qualified leads
                    and databases for renowned B2B enterprises.
                  </p>
                </div>
                <div data-aos="fade-up" className="tp-moblr-skjdo">
                  <h5 className="header-of-our-vision-white-clor">
                    OUR MISSION
                  </h5>
                  <div className="border-section-white-down-at-vison"></div>
                  <p className="para-at-vision-sjks-sknd">
                    Our aim is to stay true to our commitment and offer
                    exceptional experiences that delight our customers and
                    satisfy our employees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- Section Five -------  */}
      <div className="extra-padding-for-botom-third-sections">
        <div className="displayflexat-ns" style={myFont.style}>
          <div className="header-layout-at-main-section">
            <h4 className="section-header-at-home-page-view" data-aos="fade-up">
              WHAT MAKES US DIFFERENT
            </h4>
            <div className="extra-border-with" data-aos="fade-up"></div>
            <div className="flx-for-three-rows-in-whatmakesdifferent">
              <div data-aos="fade-up">
                <h3 className="third-section--header-at-makes-diff">
                  Empowering 15 Media Agencies in Successful Marketing Campaign
                  Executions
                </h3>
                <p className="para-at-third-section-of-whatmakesusdiff">
                  We've proudly assisted 15 media agencies worldwide in
                  executing impactful marketing campaigns. Our collaboration has
                  empowered these agencies to navigate the dynamic media
                  landscape, ensuring their campaigns not only meet but exceed
                  expectations. As a trusted partner, we're dedicated to driving
                  marketing success on a global scale.
                </p>
              </div>
              <div data-aos="fade-up">
                <Image
                  src={MediaAgencies}
                  // 635
                  className="widht-jr-kjhj-sjmf-wkams"
                />
              </div>
            </div>
            <div className="flx-for-three-rows-in-whatmakesdifferent flx-direction-for-third-scound-section">
              <div data-aos="fade-up">
                <h3 className="third-section--header-at-makes-diff">
                  Exemplary Performance: Achieving Over 93% Repeat Business
                </h3>
                <p className="para-at-third-section-of-whatmakesusdiff">
                  Our exceptional performance speaks volumes as we've garnered
                  more than a 93% rate of repeat business, a testament to the
                  consistent delivery of excellence. Clients return time and
                  again, acknowledging our commitment to unparalleled service
                  and job well done. This remarkable level of repeat business
                  underscores our dedication to exceeding expectations and
                  building lasting partnerships.
                </p>
              </div>
              <div data-aos="fade-up">
                <Image
                  src={Business}
                  // width={635}
                  className="widht-jr-kjhj-sjmf-wkams"
                />
              </div>
            </div>
            <div className="flx-for-three-rows-in-whatmakesdifferent">
              <div data-aos="fade-up">
                <h3 className="third-section--header-at-makes-diff">
                  Driving Success: Assisting 24 Tech Enterprises in Sales and
                  Marketing Strategies
                </h3>
                <p className="para-at-third-section-of-whatmakesusdiff">
                  Having aided 24 tech enterprises, we've been instrumental in
                  refining and implementing impactful sales and marketing
                  strategies. Our tailored approach has fueled their growth,
                  navigating the competitive tech landscape with confidence.
                  This marks a testament to our commitment to ensuring their
                  sustained success in the dynamic world of technology.
                </p>
              </div>
              <div data-aos="fade-up">
                <Image
                  src={TechCompo}
                  // width={600}
                  className="widht-jr-sdvlsksd-kvmlsmc"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- Section Six -------  */}
      <div className="background-gradient-for-flex-hjsd" style={myFont.style}>
        <div className="displayflexat-ns clasdi-sjds-sdnd">
          <div className="header-layout-at-main-section padd-inde-sjkds">
            <div data-aos="fade-up">
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
              <p className="small-para-at-contact-i-now-asx" data-aos="fade-up">
                +91 8087 14 4552
              </p>
              <p className="small-para-at-contact-i-now-asx" data-aos="fade-up">
                +91 8999 46 4197
              </p>
              <p className="small-para-at-contact-i-now-asx" data-aos="fade-up">
                SEND AN EMAIL
              </p>
              <Link
                href="mailto:sales@advertmarketers.com"
                className="small-para-at-contact-i-now-asx"
                data-aos="fade-up"
              >
                sales@advertmarketers.com
              </Link>
              <p className="small-para-at-contact-i-now-asx" data-aos="fade-up">
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
      {/* ---------- Section Six -------  */}
      <div className="displayflexat-ns" style={myFont.style}>
        <div className="header-layout-at-main-section">
          <h4 className="section-header-at-home-page-view" data-aos="fade-up">
            FREQUENTLY ASKED QUESTION
          </h4>
          <div className="width-large-at-vos" data-aos="fade-up"></div>
          <h4 className="got-ques-header-at-faqs" data-aos="fade-up">
            Got Questions ? We've Got Answers.{" "}
          </h4>
          <div>
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-up"
            ></div>
            <div
              data-aos="fade-up"
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq1(!faq1)}
            >
              <p className="white-txt-at-faq-sect">
                What is Demand Generation, and how can it benefit my B2B
                business?
              </p>
              {faq1 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq1 ? (
              <p className="faq-answer-at-faq-sectionsk">
                Demand generation is a marketing strategy aimed at creating
                awareness and interest in your products or services among
                potential B2B customers. It involves various tactics like
                content marketing, email campaigns, social media, and SEO to
                attract leads and drive them through the sales funnel.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-up"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq2(!faq2)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                How can Sales Development Services enhance my B2B lead
                generation efforts?
              </p>
              {faq2 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq2 ? (
              <p className="faq-answer-at-faq-sectionsk">
                Sales Development Services focus on identifying and qualifying
                potential leads through outbound prospecting and personalized
                communication. These services help in warming up prospects,
                understanding their needs, and setting appointments for your
                sales team to close deals more effectively.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-up"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq3(!faq3)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                What are Database Services in the context of B2B marketing, and
                why are they essential?
              </p>
              {faq3 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq3 ? (
              <p className="faq-answer-at-faq-sectionsk">
                Database services involve maintaining and updating a clean,
                accurate, and up-to-date database of potential B2B customers and
                leads. This database is crucial for targeted marketing
                campaigns, personalized communications, and effective lead
                nurturing, ultimately improving your conversion rates and ROI.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-up"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq4(!faq4)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                How can Digital Marketing benefit my B2B business, and what
                specific strategies are employed in this field?
              </p>
              {faq4 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq4 ? (
              <p className="faq-answer-at-faq-sectionsk">
                Digital marketing encompasses various online marketing
                strategies like search engine optimization (SEO), content
                marketing, pay-per-click (PPC) advertising, social media
                marketing, email marketing, and more. These strategies help B2B
                businesses reach their target audience, generate leads, and
                increase brand visibility and credibility in the digital space.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-up"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq5(!faq5)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                What metrics should I track to measure the effectiveness of my
                B2B marketing and sales efforts?
              </p>
              {faq5 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq5 ? (
              <p className="faq-answer-at-faq-sectionsk">
                To gauge the success of your B2B marketing and sales campaigns,
                track metrics such as lead conversion rate, customer acquisition
                cost (CAC), customer lifetime value (CLV), return on investment
                (ROI), click-through rates (CTR), website traffic, and
                engagement on various digital channels. These metrics provide
                valuable insights into the performance and efficiency of your
                marketing strategies and help in making data-driven decisions.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-up"
            ></div>
          </div>
        </div>{" "}
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </>
  );
}
