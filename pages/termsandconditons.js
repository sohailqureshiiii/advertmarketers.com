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
const termsandconditons = () => {
  // ----- Animation ----
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Terms & Conditions</title>
        <meta
          name="description"
          content="AdvertMarketers has all the rights reserved, and can modify, change, add or remove portions of the Terms of Use, 
          as it wishes, and at any time. You are advised to check out for the Terms of Use periodically for any changes."
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
              Terms & Conditions
            </h2>
          </div>{" "}
        </div>{" "}
      </div>
      <div>
        <div className="bac-white-at-carees-bottom-sh">
          <div className="displayflexat-ns " style={myFont.style}>
            <div className="header-layout-at-main-section">
              <h4
                className="section-header-at-home-page-view new-pading-for-tops-sjx"
                data-aos="fade-down"
              >
                Terms & Conditions
              </h4>
              <div className="extra-border-with" data-aos="fade-up"></div>
              <div>
                <p
                  className="new-para-for-careers-afor-more-onfro new-pading-for-tops-sjx"
                  data-aos="fade-down"
                >
                  AdvertMarketers has all the rights reserved, and can modify,
                  change, add or remove portions of the Terms of Use, as it
                  wishes, and at any time. You are advised to check out for the
                  Terms of Use periodically for any changes.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Since AdvertMarketers utilises electronic communications
                  exclusively for other businesses, it falls under the GDPR
                  consent definition of “Legitimate Interest” in Article 6.1(f)
                  of the GDPR law, which paves the way for commercial interests
                  to communicate with other commercial interests.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  In case of the site usage by you post the changes will mean
                  that you have agreed upon the changes mentioned in the site.
                  Till the time you comply with these Terms of Use,
                  AdvertMarketers gives you permission to enter and use the site
                  as a non-exclusive, personal, non-transferable, limited
                  privilege.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Content
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  The graphics, texts, visual interfaces, user interfaces,
                  logos, photographs, trademarks, artwork, and computer code
                  (collectively, “Content”), including, but not limited to the
                  design, selection, coordination, structure, expression, “look
                  and feel” and arrangement of these ‘Content’, contained on the
                  AdvertMarkets site is owned, controlled or licensed by or to
                  AdvertMarketers. It is protected by copyright, patent and
                  trademark laws, trade dress, and various other intellectual
                  property rights and unfair competition laws.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  No part of the Terms of Use in this site and no content should
                  be reproduced, republished, uploaded, posted, publicly
                  displayed, encoded, copied, translated, transmitted or
                  distributed in any way on any other website, server, computer,
                  or other modes of publication, with the permission or written
                  consent of AdvertMarketers.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You may use the information on AdvertMarketers products and
                  services (such as datasheets, knowledge-based articles, and
                  similar materials) purposely made available by AdvertMarketers
                  for downloading from the Site, provided that you (1) not
                  remove any proprietary notice language in all copies of such
                  documents, (2) use such information only for your personal,
                  non-commercial informational purpose and do not copy or post
                  such information on any networked computer or broadcast it in
                  any media, (3) make no modifications to any such information,
                  and (4) not make any additional representations or warranties
                  relating to such documents.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Usage of the Website
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You may not utilise any “robot”, “spider” or other automatic
                  devices, program, algorithm or methodology, or any similar or
                  equivalent manual process, to access, acquire, copy or monitor
                  any portion of the Site or any Content, or in any way
                  reproduce or circumvent the navigational structure or
                  presentation of the Site or any Content, to obtain or attempt
                  to obtain any materials, documents or information through any
                  means not purposely made available through the Site.
                  AdvertMarketers reserves the right to bar any such activity.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You cannot gain unauthorised access to any portion or feature
                  of the Site, or any other systems or networks connected to the
                  Site or to any AdvertMarketers server, or to any of the
                  services offered on or through the Site, by hacking, password
                  “mining” or any other illegitimate means.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You may not probe, scan, or test the vulnerability of the Site
                  or any network connected to the Site, nor breach the security
                  or authentication measures on the Site or any network
                  connected to the Site. You may not reverse look-up, trace or
                  seek to trace any information on any other user of or visitor
                  to the Site, or any other customer of AdvertMarketers,
                  including any AdvertMarketers account not owned by you, to its
                  source, or exploit the Site or any service or information made
                  available or offered by or through the Site, in any way where
                  the purpose is to reveal any information, including but not
                  limited to personal identification or information, other than
                  your own information, as provided for by the Site.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You agree that you will not take any action that imposes an
                  unreasonable or disproportionately large load on the
                  infrastructure of the Site or AdvertMarketers’s systems or
                  networks, or any systems or networks connected to the Site or
                  to AdvertMarketers.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You agree not to use any device, software or routine to
                  interfere or attempt to interfere with the proper working of
                  the Site or any transaction being conducted on the Site, or
                  with any other person’s use of the Site.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You may not forge headers or otherwise manipulate identifiers
                  in order to disguise the origin of any message or transmittal
                  you send to AdvertMarketers on or through the Site or any
                  service offered on or through the Site. You may not pretend
                  that you are, or that you represent, someone else, or
                  impersonate any other individual or entity.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You may not use the Site or any Content for any purpose that
                  is unlawful or prohibited by these Terms of Use or to solicit
                  the performance of any illegal activity or other activity
                  which infringes the rights of AdvertMarketers or others.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Other Terms and Conditions
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Additional terms and conditions may apply to purchases of
                  goods or services and to specific portions or features of the
                  Site, including contests, promotions or other similar
                  features, all of which terms are made a part of these Terms of
                  Use by this reference. You agree to abide by such other terms
                  and conditions, including where applicable representing that
                  you are of sufficient legal age to use or participate in such
                  service or feature. If there is a conflict between these Terms
                  of Use and the terms posted for or applicable to a specific
                  portion of the Site or for any service offered on or through
                  the Site, the latter terms shall control with respect to your
                  use of that portion of the Site or the specific service.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  AdvertMarketers’s obligations, if any, with regard to its
                  products and services are governed solely by the agreements
                  pursuant to which they are provided, and nothing on this Site
                  should be construed to alter such agreements.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  AdvertMarketers may make changes to any products or services
                  offered on the Site, or to the applicable prices for any such
                  products or services, at any time, without notice. The
                  materials on the Site with respect to products and services
                  may be out of date, and AdvertMarketers makes no commitment to
                  update the materials on the Site with respect to such products
                  and services.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  The following terms also govern and apply to your use of the
                  Site, and they are incorporated herein by this reference:
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Accounts, Passwords, and Security
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Certain features or services offered on or through the Site
                  may require you to open an account (including setting up an
                  AdvertMarketers ID and password). You are entirely responsible
                  for maintaining the confidentiality of the information you
                  hold for your account, including your password, and for any
                  and all activity that occurs under your account as a result of
                  your failing to keep this information secure and confidential.
                  You agree to notify AdvertMarketers immediately of any
                  unauthorized use of your account or password, or any other
                  breach of security. You may be held liable for losses incurred
                  by AdvertMarketers or any other user of or visitor to the Site
                  due to someone else using your AdvertMarketers ID, password or
                  account as a result of your failing to keep your account
                  information secure and confidential.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You may not use anyone else’s AdvertMarketers ID, password or
                  account at any time without the express permission and consent
                  of the holder of that AdvertMarketers ID, password or account.
                  AdvertMarketers cannot and will not be liable for any loss or
                  damage arising from your failure to comply with these
                  obligations.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Privacy
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  AdvertMarketers’s Privacy Policy applies to use of this Site,
                  and its terms are made a part of these Terms of Use by this
                  reference. To view AdvertMarketers’s Privacy Policy, click
                  here. Additionally, by using the Site, you acknowledge and
                  agree that Internet transmissions are never completely private
                  or secure. You understand that any message or information you
                  send to the Site may be read or intercepted by others, even if
                  there is a special notice that a particular transmission (for
                  example, credit card information) is encrypted.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Links to the ADVERTMARKETERS Site
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  This Site may contain links to other independent third-party
                  Web sites (“Linked Sites”). These Linked Sites are provided
                  solely as a convenience to our visitors. Such Linked Sites are
                  not under AdvertMarketers’s control, and AdvertMarketers is
                  not responsible for and does not endorse the content of such
                  Linked Sites, including any information or materials contained
                  on such Linked Sites. You will need to make your own
                  independent judgment regarding your interaction with these
                  Linked Sites.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Disclaimers
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  ADVERTMARKETERS DOES NOT PROMISE THAT THE SITE OR ANY CONTENT,
                  SERVICE OR FEATURE OF THE SITE WILL BE ERROR-FREE OR
                  UNINTERRUPTED, OR THAT ANY DEFECTS WILL BE CORRECTED, OR THAT
                  YOUR USE OF THE SITE WILL PROVIDE SPECIFIC RESULTS. THE SITE
                  AND ITS CONTENT ARE DELIVERED ON AN “AS-IS” AND “AS AVAILABLE”
                  BASIS. ALL INFORMATION PROVIDED ON THE SITE IS SUBJECT TO
                  CHANGE WITHOUT NOTICE. ADVERTMARKETERS CANNOT ENSURE THAT ANY
                  FILES OR OTHER DATA YOU DOWNLOAD FROM THE SITE WILL BE FREE OF
                  VIRUSES OR CONTAMINATION OR DESTRUCTIVE FEATURES.
                  ADVERTMARKETERS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
                  INCLUDING ANY WARRANTIES OF ACCURACY, NON-INFRINGEMENT,
                  MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE.
                  ADVERTMARKETERS DISCLAIMS ANY AND ALL LIABILITY FOR THE ACTS,
                  OMISSIONS, AND CONDUCT OF ANY THIRD PARTIES IN CONNECTION WITH
                  OR RELATED TO YOUR USE OF THE SITE AND/OR ANY ADVERTMARKETERS
                  SERVICES. YOU ASSUME TOTAL RESPONSIBILITY FOR YOUR USE OF THE
                  SITE AND ANY LINKED SITES. YOUR SOLE REMEDY AGAINST
                  ADVERTMARKETERS FOR DISSATISFACTION WITH THE SITE OR ANY
                  CONTENT IS TO STOP USING THE SITE OR ANY SUCH CONTENT. THIS
                  LIMITATION OF RELIEF IS A PART OF THE BARGAIN BETWEEN THE
                  PARTIES.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  The above disclaimer applies to any damages, liability or
                  injuries caused by any failure of performance, error,
                  omission, interruption, deletion, defect, delay in operation
                  or transmission, computer virus, communication line failure,
                  theft or destruction of or unauthorised access to, alteration
                  of, or use, whether for breach of contract, tort, negligence
                  or any other cause of action.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  AdvertMarketers reserves the right to do any of the following,
                  at any time, without notice: (1) to modify, suspend or
                  terminate operation of or access to the Site, or any portion
                  of the Site, for any reason; (2) to modify or change the Site,
                  or any portion of the Site, and any applicable policies or
                  terms; and (3) to interrupt the operation of the Site, or any
                  portion of the Site, as necessary to perform routine or
                  non-routine maintenance, error correction, or other changes.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Limitation of Liability
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Except where prohibited by law, in no event will
                  AdvertMarketers be liable to you for any indirect,
                  consequential, exemplary, incidental or punitive damages,
                  including lost profits, even if AdvertMarketers has been
                  advised of the possibility of such damages.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Indemnity
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You agree to indemnify and hold AdvertMarketers, its officers,
                  directors, shareholders, predecessors, successors in interest,
                  employees, agents, subsidiaries and affiliates, harmless from
                  any demands, loss, liability, claims or expenses (including
                  attorneys’ fees), made against AdvertMarketers by any third
                  party due to or arising out of or in connection with your use
                  of the Site.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Violation of These Terms of Use
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  AdvertMarketers may disclose any information we have about you
                  (including your identity) if we determine that such disclosure
                  is necessary for connection with any investigation or
                  complaint regarding your use of the Site, or to identify,
                  contact or bring legal action against someone who may be
                  causing injury to or interference with (either intentionally
                  or unintentionally) AdvertMarketers’s rights or property, or
                  the rights or property of visitors to or users of the Site,
                  including AdvertMarketers’s customers. AdvertMarketers
                  reserves the right at all times to disclose any information
                  that AdvertMarketers deems necessary to comply with any
                  applicable law, regulation, legal process, or governmental
                  request. AdvertMarketers also may disclose your information
                  when AdvertMarketers determines that applicable law requires
                  or permits such disclosure, including exchanging information
                  with other companies and organizations for fraud protection
                  purposes.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You acknowledge and agree that AdvertMarketers may preserve
                  any transmittal or communication by you with AdvertMarketers
                  through the Site or any service offered on or through the
                  Site, and may also disclose such data if required to do so by
                  law or AdvertMarketers determines that such preservation or
                  disclosure is reasonably necessary to (1) comply with legal
                  process, (2) enforce these Terms of Use, (3) respond to claims
                  that any such data violates the rights of others, or (4)
                  protect the rights, property or personal safety of
                  AdvertMarketers, its employees, users of or visitors to the
                  Site, and the public.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You agree that AdvertMarketers may, in its sole discretion and
                  without prior notice, terminate your access to the Site and/or
                  block your future access to the Site if we determine that you
                  have violated these Terms of Use or other agreements or
                  guidelines which may be associated with your use of the Site.
                  You also agree that any violation by you of these Terms of Use
                  will constitute an unlawful and unfair business practice, and
                  will cause irreparable harm to AdvertMarketers, for which
                  monetary damages would be inadequate, and you consent to
                  AdvertMarketers obtaining any injunctive or equitable relief
                  that AdvertMarketers deems necessary or appropriate in such
                  circumstances. These remedies are in addition to any other
                  remedies AdvertMarketers may have at law or in equity.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You agree that AdvertMarketers may, in its sole discretion and
                  without prior notice, terminate your access to the Site, for
                  cause, which includes (but is not limited to) (1) requests by
                  law enforcement or other government agencies, (2) a request by
                  you (self-initiated account deletions), (3) discontinuance or
                  material modification of the Site or any service offered on or
                  through the Site, or (4) unexpected technical issues or
                  problems.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  If AdvertMarketers does take any legal action against you as a
                  result of your violation of these Terms of Use,
                  AdvertMarketers will be entitled to recover from you, and you
                  agree to pay, all reasonable attorneys’ fees and costs of such
                  action, in addition to any other relief granted to
                  AdvertMarketers. You agree that AdvertMarketers will not be
                  liable to you or to any third party for termination of your
                  access to the Site as a result of any violation of these Terms
                  of Use.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Governing Law; Dispute Resolution
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You agree that all matters relating to your access to or use
                  of the Site, including all disputes, will be governed by the
                  laws of India and by the laws of Pune jurisdiction without
                  regard to its conflicts of laws provisions. Claims made under
                  the separate terms and conditions of purchase for goods and
                  services are not subject to this limitation. No recovery may
                  be sought or received for damages other than out-of-pocket
                  expenses, except that the prevailing party will be entitled to
                  costs and attorneys’ fees. In the event of any controversy or
                  dispute between AdvertMarketers and you arising out of or in
                  connection with your use of the Site, the parties shall
                  attempt, promptly and in good faith, to resolve any such
                  dispute. If we are unable to resolve any such dispute within a
                  reasonable time (not to exceed thirty (30) days), then either
                  party may submit such controversy or dispute to mediation. If
                  the dispute cannot be resolved through mediation, then the
                  parties shall be free to pursue any right or remedy available
                  to them under applicable law.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Void Where Prohibited
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  AdvertMarketers administers and operates the
                  (AdvertMarketers.com) Site from its location in India Data
                  Center; other AdvertMarketers sites may be administered and
                  operated from various locations outside India. Although the
                  Site is accessible worldwide, not all features, products or
                  services discussed, referenced, provided or offered through or
                  on the Site are available to all persons or in all geographic
                  locations, or appropriate or available for use outside India.
                  AdvertMarketers reserves the right to limit, in its sole
                  discretion, the provision and quantity of any feature,
                  product, or service to any person or geographic area. Any
                  offer for any feature, product or service made on the Site is
                  void where prohibited. If you choose to access the Site from
                  outside India, you do so on your own initiative and you are
                  solely responsible for complying with applicable local laws.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  Miscellaneous
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  You may not use or export or re-export any Content or any copy
                  or adaptation of such Content, or any product or service
                  offered on the Site, in violation of any applicable laws or
                  regulations, including without limitation India export laws
                  and regulations.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  If any of the provisions of these Terms of Use are held by a
                  court or other tribunal of competent jurisdiction to be void
                  or unenforceable, such provisions shall be limited or
                  eliminated to the minimum extent necessary and replaced with a
                  valid provision that best embodies the intent of these Terms
                  of Use, so that these Terms of Use shall remain in full force
                  and effect. These Terms of Use constitute the entire agreement
                  between you and AdvertMarketers with regard to your use of the
                  Site, and any and all other written or oral agreements or
                  understandings previously existing between you and
                  AdvertMarketers with respect to such use are hereby superseded
                  and cancelled. Other than as provided in a purchase agreement
                  you enter into with AdvertMarketers, AdvertMarketers will not
                  accept any counter-offers to these Terms of Use, and all such
                  offers are hereby categorically rejected. AdvertMarketers’s
                  failure to insist on or enforce strict performance of these
                  Terms of Use shall not be construed as a waiver by
                  AdvertMarketers of any provision or any right it has to
                  enforce these Terms of Use, nor shall any course of conduct
                  between AdvertMarketers and you or any other party be deemed
                  to modify any provision of these Terms of Use. These Terms of
                  Use shall not be interpreted or construed to confer any rights
                  or remedies on any third parties.
                </p>
                <p
                  className="new-para-for-careers-afor-more-onfro"
                  data-aos="fade-up"
                >
                  AdvertMarketers provides access to AdvertMarketers
                  international data and, therefore, may contain references or
                  cross-references to AdvertMarketers products, programs, and
                  services that are not announced in your country. Such
                  reference does not imply that AdvertMarketers in your country
                  intends to announce such products, programs, or services.
                </p>
              </div>
            </div>{" "}
          </div>
          <div
            className="background-gradient-for-flex-hjsd"
            style={myFont.style}
          >
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
      </div>
    </>
  );
};

export default termsandconditons;
