import { Navbar } from "@/Components/Navigation/Navbar";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../Fonts/Montserrat-Medium.ttf" });
import "../app/globals.css";
import Image from "next/image";
import Caontatc from "../public/dfghnm.jpg";
import Backgroundatcareers from "../public/blurred-soft-people-meeting-table-business-people-talking-modern-office-generative-ai.jpg";
import { Footer } from "@/Components/Footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const Policies = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);
  const [faq8, setFaq8] = useState(false);
  const [faq9, setFaq9] = useState(false);
  const [faq10, setFaq10] = useState(false);
  const [faq11, setFaq11] = useState(false);
  const [faq12, setFaq12] = useState(false);
  const [faq13, setFaq13] = useState(false);
  // ----- Animation ----
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Our Policies</title>
        <meta
          name="description"
          content="Thank you for choosing to be part of our community at 
          AM Code LLC (“Company“, “we“, “us“, “our“). We are committed to
          protecting your personal information and your right to privacy.
          If you have any questions or concerns about this privacy notice,
          or our practices with regards to your personal information, 
          please contact us at policies@advertmarketers.com."
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
              Our Policies
            </h2>
          </div>{" "}
        </div>{" "}
      </div>
      <div className="bac-white-at-carees-bottom-sh">
        <div className="displayflexat-ns adhujw-awdojkm" style={myFont.style}>
          <div className="header-layout-at-main-section">
            <h4
              className="section-header-at-home-page-view new-pading-for-tops-sjx"
              data-aos="fade-down"
            >
              Our Policies
            </h4>
            <div
              className="border-of-bottom-at-section-header"
              data-aos="fade-up"
            ></div>
            <div>
              <p
                className="new-para-for-careers-afor-more-onfro new-pading-for-tops-sjx"
                data-aos="fade-up"
              >
                Thank you for choosing to be part of our community at AM Code
                LLC (“Company“, “we“, “us“, “our“). We are committed to
                protecting your personal information and your right to privacy.
                If you have any questions or concerns about this privacy notice,
                or our practices with regards to your personal information,
                please contact us at policies@advertmarketers.com.
              </p>
              <p
                className="new-para-for-careers-afor-more-onfro"
                data-aos="fade-up"
              >
                When you visit our website https://www.advertmarketers.com (the
                “Website“), and more generally, use any of our services (the
                “Services“, which include the Website), we appreciate that you
                are trusting us with your personal information. We take your
                privacy very seriously. In this privacy notice, we seek to
                explain to you in the clearest way possible what information we
                collect, how we use it and what rights you have in relation to
                it. We hope you take some time to read through it carefully, as
                it is important. If there are any terms in this privacy notice
                that you do not agree with, please discontinue use of our
                Services immediately.
              </p>
              <p
                className="new-para-for-careers-afor-more-onfro"
                data-aos="fade-up"
              >
                This privacy notice applies to all information collected through
                our Services (which, as described above, includes our Website),
                as well as, any related services, sales, marketing or events.
              </p>
              <h4 className="got-ques-header-at-faqs" data-aos="fade-up">
                Please read this privacy notice carefully as it will help you
                understand what we do with the information that we collect.
              </h4>
            </div>
          </div>{" "}
        </div>
        <div className="displayflexat-ns " style={myFont.style}>
          <div className="header-layout-at-main-section">
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq1(!faq1)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                1. WHAT INFORMATION DO WE COLLECT?
              </p>
              {faq1 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq1 ? (
              <p className="faq-answer-at-faq-sectionsk">
                Information automatically collected In Short: Some information —
                such as your Internet Protocol (IP) address and/or browser and
                device characteristics — is collected automatically when you
                visit our Website. We automatically collect certain information
                when you visit, use or navigate the Website. This information
                does not reveal your specific identity (like your name or
                contact information) but may include device and usage
                information, such as your IP address, browser and device
                characteristics, operating system, language preferences,
                referring URLs, device name, country, location, information
                about how and when you use our Website and other technical
                information. This information is primarily needed to maintain
                the security and operation of our Website, and for our internal
                analytics and reporting purposes. The information we collect
                includes: Location Data. We collect location data such as
                information about your device’s location, which can be either
                precise or imprecise. How much information we collect depends on
                the type and settings of the device you use to access the
                Website. For example, we may use GPS and other technologies to
                collect geolocation data that tells us your current location
                (based on your IP address). You can opt out of allowing us to
                collect this information either by refusing access to the
                information or by disabling your Location setting on your
                device. Note however, if you choose to opt out, you may not be
                able to use certain aspects of the Services.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq2(!faq2)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                2. HOW DO WE USE YOUR INFORMATION?
              </p>
              {faq2 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq2 ? (
              <p className="faq-answer-at-faq-sectionsk">
                In Short: We process your information for purposes based on
                legitimate business interests, the fulfillment of our contract
                with you, compliance with our legal obligations, and/or your
                consent. We use personal information collected via our Website
                for a variety of business purposes described below. We process
                your personal information for these purposes in reliance on our
                legitimate business interests, in order to enter into or perform
                a contract with you, with your consent, and/or for compliance
                with our legal obligations. We indicate the specific processing
                grounds we rely on next to each purpose listed below. We use the
                information we collect or receive: To send you marketing and
                promotional communications. We and/or our third-party marketing
                partners may use the personal information you send to us for our
                marketing purposes, if this is in accordance with your marketing
                preferences. For example, when expressing an interest in
                obtaining information about us or our Website, subscribing to
                marketing or otherwise contacting us, we will collect personal
                information from you. You can opt-out of our marketing emails at
                any time (see the “WHAT ARE YOUR PRIVACY RIGHTS?” below).
                Deliver targeted advertising to you. We may use your information
                to develop and display personalized content and advertising (and
                work with third parties who do so) tailored to your interests
                and/or location and to measure its effectiveness.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq3(!faq3)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
              </p>
              {faq3 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq3 ? (
              <p className="faq-answer-at-faq-sectionsk">
                In Short: We only share information with your consent, to comply
                with laws, to provide you with services, to protect your rights,
                or to fulfill business obligations. <br />
                We may process or share your data that we hold based on the
                following legal basis:
                <li>
                  Consent: We may process your data if you have given us
                  specific consent to use your personal information for a
                  specific purpose.
                </li>
                <li>
                  Legitimate Interests: We may process your data when it is
                  reasonably necessary to achieve our legitimate business
                  interests.
                </li>
                <li>
                  Performance of a Contract: Where we have entered into a
                  contract with you, we may process your personal information to
                  fulfill the terms of our contract.
                </li>
                <li>
                  Legal Obligations: We may disclose your information where we
                  are legally required to do so in order to comply with
                  applicable law, governmental requests, a judicial proceeding,
                  court order, or legal process, such as in response to a court
                  order or a subpoena (including in response to public
                  authorities to meet national security or law enforcement
                  requirements).
                </li>
                <li>
                  Vital Interests: We may disclose your information where we
                  believe it is necessary to investigate, prevent, or take
                  action regarding potential violations of our policies,
                  suspected fraud, situations involving potential threats to the
                  safety of any person and illegal activities, or as evidence in
                  litigation in which we are involved.
                </li>
                More specifically, we may need to process your data or share
                your personal information in the following situations:
                <li>
                  Business Transfers. We may share or transfer your information
                  in connection with, or during negotiations of, any merger,
                  sale of company assets, financing, or acquisition of all or a
                  portion of our business to another company.
                </li>
                <li>
                  {" "}
                  Affiliates. We may share your information with our affiliates,
                  in which case we will require those affiliates to honor this
                  privacy notice. Affiliates include our parent company and any
                  subsidiaries, joint venture partners or other companies that
                  we control or that are under common control with us.
                </li>
                <li>
                  Business Partners. We may share your information with our
                  business partners to offer you certain products, services or
                  promotions.
                </li>
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq4(!faq4)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                4. HOW DO WE HANDLE YOUR SOCIAL LOGINS ?
              </p>
              {faq4 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq4 ? (
              <p className="faq-answer-at-faq-sectionsk">
                n Short: If you choose to register or log in to our services
                using a social media account, we may have access to certain
                information about you. Our Website offers you the ability to
                register and login using your third-party social media account
                details (like your Facebook or Twitter logins). Where you choose
                to do this, we will receive certain profile information about
                you from your social media provider. The profile information we
                receive may vary depending on the social media provider
                concerned, but will often include your name, email address,
                friends list, profile picture as well as other information you
                choose to make public on such social media platform. We will use
                the information we receive only for the purposes that are
                described in this privacy notice or that are otherwise made
                clear to you on the relevant Website. Please note that we do not
                control, and are not responsible for, other uses of your
                personal information by your third-party social media provider.
                We recommend that you review their privacy notice to understand
                how they collect, use and share your personal information, and
                how you can set your privacy preferences on their sites and
                apps.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq5(!faq5)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY ?
              </p>
              {faq5 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq5 ? (
              <p className="faq-answer-at-faq-sectionsk">
                In Short: We may transfer, store, and process your information
                in countries other than your own. Our servers are located in. If
                you are accessing our Website from outside, please be aware that
                your information may be transferred to, stored, and processed by
                us in our facilities and by those third parties with whom we may
                share your personal information (see “WILL YOUR INFORMATION BE
                SHARED WITH ANYONE?” above), in and other countries.
                <br />
                If you are a resident in the European Economic Area (EEA) or
                United Kingdom (UK), then these countries may not necessarily
                have data protection laws or other similar laws as comprehensive
                as those in your country. We will however take all necessary
                measures to protect your personal information in accordance with
                this privacy notice and applicable law.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq6(!faq6)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                6. HOW LONG DO WE KEEP YOUR INFORMATION ?
              </p>
              {faq6 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq6 ? (
              <p className="faq-answer-at-faq-sectionsk">
                In Short: We keep your information for as long as necessary to
                fulfill the purposes outlined in this privacy notice unless
                otherwise required by law. We will only keep your personal
                information for as long as it is necessary for the purposes set
                out in this privacy notice, unless a longer retention period is
                required or permitted by law (such as tax, accounting or other
                legal requirements). No purpose in this notice will require us
                keeping your personal information for longer than 6 months. When
                we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq7(!faq7)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                7. HOW DO WE KEEP YOUR INFORMATION SAFE ?
              </p>
              {faq7 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq7 ? (
              <p className="faq-answer-at-faq-sectionsk">
                In Short: We aim to protect your personal information through a
                system of organizational and technical security measures. We
                have implemented appropriate technical and organizational
                security measures designed to protect the security of any
                personal information we process. However, despite our safeguards
                and efforts to secure your information, no electronic
                transmission over the Internet or information storage technology
                can be guaranteed to be 100% secure, so we cannot promise or
                guarantee that hackers, cybercriminals, or other unauthorized
                third parties will not be able to defeat our security, and
                improperly collect, access, steal, or modify your information.
                Although we will do our best to protect your personal
                information, transmission of personal information to and from
                our Website is at your own risk. You should only access the
                Website within a secure environment.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq8(!faq8)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                8. DO WE COLLECT INFORMATION FROM MINORS ?
              </p>
              {faq8 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq8 ? (
              <p className="faq-answer-at-faq-sectionsk">
                In Short: We do not knowingly collect data from or market to
                children under 18 years of age. We do not knowingly solicit data
                from or market to children under 18 years of age. By using the
                Website, you represent that you are at least 18 or that you are
                the parent or guardian of such a minor and consent to such minor
                dependent’s use of the Website. If we learn that personal
                information from users less than 18 years of age has been
                collected, we will deactivate the account and take reasonable
                measures to promptly delete such data from our records. If you
                become aware of any data we may have collected from children
                under age 18, please contact us at policies@advertmarketers.com.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq9(!faq9)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                9. WHAT ARE YOUR PRIVACY RIGHTS ?
              </p>
              {faq9 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq9 ? (
              <p className="faq-answer-at-faq-sectionsk">
                In Short: You may review, change, or terminate your account at
                any time.
                <br />
                If you are a resident in the EEA or UK and you believe we are
                unlawfully processing your personal information, you also have
                the right to complain to your local data protection supervisory
                authority. You can find their contact details here:
                http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
                <br />
                If you are a resident in Switzerland, the contact details for
                the data protection authorities are available here:
                https://www.edoeb.admin.ch/edoeb/en/home.html.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq10(!faq10)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                10. CONTROLS FOR DO-NOT-TRACK FEATURES
              </p>
              {faq10 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq10 ? (
              <p className="faq-answer-at-faq-sectionsk">
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track (“DNT”) feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this privacy notice.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq11(!faq11)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS ?
              </p>
              {faq11 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq11 ? (
              <p className="faq-answer-at-faq-sectionsk">
                In Short: Yes, if you are a resident of California, you are
                granted specific rights regarding access to your personal
                information.
                <br />
                California Civil Code Section 1798.83, also known as the “Shine
                The Light” law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us using the
                contact information provided below.
                <br />
                If you are under 18 years of age, reside in California, and have
                a registered account with the Website, you have the right to
                request removal of unwanted data that you publicly post on the
                Website. To request removal of such data, please contact us
                using the contact information provided below, and include the
                email address associated with your account and a statement that
                you reside in California. We will make sure the data is not
                publicly displayed on the Website, but please be aware that the
                data may not be completely or comprehensively removed from all
                our systems (e.g. backups, etc.).
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq12(!faq12)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                12. DO WE MAKE UPDATES TO THIS NOTICE ?
              </p>
              {faq12 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq12 ? (
              <p className="faq-answer-at-faq-sectionsk">
                In Short: Yes, we will update this notice as necessary to stay
                compliant with relevant laws.
                <br />
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated “Revised” date and the
                updated version will be effective as soon as it is accessible.
                If we make material changes to this privacy notice, we may
                notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy notice frequently to be informed of
                how we are protecting your information.
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
            <div
              className="flx-fr-faq-questionand-plus"
              onClick={() => setFaq13(!faq13)}
              data-aos="fade-up"
            >
              <p className="white-txt-at-faq-sect">
                13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE ?
              </p>
              {faq13 ? (
                <p className="white-txt-at-faq-sect extralarge-font">-</p>
              ) : (
                <p className="white-txt-at-faq-sect extralarge-font">+</p>
              )}
            </div>
            {faq13 ? (
              <p className="faq-answer-at-faq-sectionsk">
                If you have questions or comments about this notice, you may
                contact our Data Protection Officer (DPO), DPO, by email at
                policies@advertmarketers.com, by phone at 615-745-9811, or by
                post to:
                <br />
                AM Code LLC
                <br />
                DPO
                <br />
                1267 Willis St.
                <br />
                STE 200
                <br />
                Redding, CA 96001
                <br />
                United States
              </p>
            ) : null}
            <div
              className="cntr-btwn-lines-at-faq-sec"
              data-aos="fade-down"
            ></div>
          </div>
        </div>{" "}
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

export default Policies;
