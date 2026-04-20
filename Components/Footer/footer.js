import React from "react";
import MainLogo from "../../public/mainlogo.png";
import LinkedIn from "../../public/linkedin.svg";
import Faceboook from "../../public/facebook.svg";
import IndianFlag from "../../public/india.png";
import USAFlag from "../../public/united-states.png";
import Twitter from "../../public/social.svg";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
import "../../app/globals.css";

export const Footer = () => {
  return (
    <>
      {" "}
      <div className="back-grond-for-footer-at-bottom-end">
        <div
          className="displayflexat-ns padding-toop-for-footer"
          style={myFont.style}
        >
          <div className="header-layout-at-main-section flxin-for-sdfg">
            <div className="white-box-with-background-on-footer-left">
              <div>
                <Image src={MainLogo} width={150} />
                <h2 className="header-at-footer-for-company-logo">
                  AdvertMarketers
                </h2>
                <div>
                  <p className="secound-para-header-at-footer-line">
                    Think Quality
                  </p>
                  <p className="secound-para-header-at-footer-line">
                    Think AdvertMarketers
                  </p>
                </div>
              </div>
              <p className="folow-us-header-at-footer-in-botttom">Follow Us</p>
              <div className="flx-in-for-follow-btn-at-bottom-last-end">
                <Link
                  href={
                    "https://www.linkedin.com/company/advertmarketers/?viewAsMember=true"
                  }
                >
                  <Image src={LinkedIn} width={20} />
                </Link>
                <Link href={"https://www.facebook.com/advertmarketerspvtltd/"}>
                  <Image src={Faceboook} width={20} />
                </Link>
                <Link href={"https://twitter.com/advertmarketers"}>
                  <Image src={Twitter} width={20} />
                </Link>
              </div>
            </div>
            <div className="padding-for-the-adress-and-other-opt-at-footer">
              <div className="flx-in-use-full-loink-and-servoces">
                <div>
                  <div className="usefull-links-in-fotters-sectios-cjhs">
                    Useful Links
                  </div>
                  <div className="botom-line-of-luse-fil-links-snidr"></div>
                  <div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/careers">Careers</Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/policies">Our Policies</Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/gdpr">GDPR</Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/termsandconditons">Terms & Conditions</Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/dataaccessdatarectification">
                        Data Access & <br />
                        Data Rectification
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="usefull-links-in-fotters-sectios-cjhs">
                    Services
                  </div>
                  <div className="botom-line-of-luse-fil-links-snidr"></div>
                  <div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/service/account-based-marketing">
                        DEMAND GENERATION
                      </Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/service/appointment-generation">
                        SALES DEVELOPMENT
                      </Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/service/b2b-list-building">
                        DATABASE SERVICES
                      </Link>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <Link href="/service/email-marketing">
                        DIGITAL MARKETING
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="usefull-links-in-fotters-sectios-cjhs">
                    Contact Us
                  </div>
                  <div className="botom-line-of-luse-fil-links-snidr"></div>
                  <div>
                    <div className="links-name-at-footer-secctions-djs">
                      <li>+91 8087 14 4552</li>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <li>+91 8999 46 4197</li>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <li>sales@advertmarketers.com </li>
                    </div>
                    <div className="links-name-at-footer-secctions-djs">
                      <li>contactus@advertmarketers.com</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="displayflexat-ns">
          <div className="wid-sjdkf-wfw-wjepfw-rwsd">
            <div className="big-width-border-at-vskjskmf-dkf"></div>
            <div style={myFont.style}>
              <div className="dis-dss-sddjk-webksd-zcnd">
                <div>
                  <div className="flx-for-img-and-office-country">
                    <h2 className="service-header-at-footer-section">
                      India Office
                    </h2>
                    <Image
                      src={IndianFlag}
                      width={30}
                      height={30}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <p className="adress-para-at-footer-sd">
                      Office Number 102, Pentagon Tower 03, Magarpatta City,
                      Pune – 411028
                    </p>
                  </div>
                </div>
                <div className="tp-in-ftr-mobile-view-only">
                  <div>
                    <div className="flx-for-img-and-office-country">
                      <h2 className="service-header-at-footer-section">
                        USA OFFICE
                      </h2>
                      <Image
                        src={USAFlag}
                        width={30}
                        height={30}
                        alt="Picture of the author"
                      />
                    </div>
                    <div>
                      <p className="adress-para-at-footer-sd">
                        1267 Willis St., STE 200, Redding, California 96001
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="displayflexat-ns">
          <div className="wid-sjdkf-wfw-wjepfw-rwsd">
            <div className="big-width-border-at-vskjskmf-dkf"></div>
          </div>
        </div>
        <div className="displayflexat-ns">
          <div className="wid-sjdkf-wfw-wjepfw-rwsd">
            <p className="udsjdoicsklslkm">
              © Copyright 2026. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <div>
                <p className="adress-header-at-bottom-footer">India Adress</p>
                <p className="adress-para-at-footer-sd">
                  Office 1 – Office Number 504, Pentagon Tower 04, Magarpatta
                  City, Pune – 411028
                </p>
                <p className="adress-header-at-bottom-footer">USA Address</p>
                <p className="adress-para-at-footer-sd">
                  
                </p>
                <div className="flx-in-email-and-call-for-footer">
                  <div>
                    <p className="adress-header-at-bottom-footer">
                      CALL US NOW
                    </p>
                    <p className="adress-para-at-footer-sd">+91 8087 14 4552</p>
                    <p className="adress-para-at-footer-sd">+91 8999 46 4197</p>
                  </div>
                  <div>
                    <p className="adress-header-at-bottom-footer">
                      SEND AN EMAIL
                    </p>
                    <p className="adress-para-at-footer-sd">
                      sales@advertmarketers.com
                    </p>
                    <p className="adress-para-at-footer-sd">
                      contactus@advertmarketers.com
                    </p>
                  </div>
                </div>
              </div> */
}
