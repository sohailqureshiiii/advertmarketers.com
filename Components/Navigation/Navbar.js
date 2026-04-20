"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MainLogo from "../../public/mainlogo.png";
import Hamburger from "../../public/hamburgerig.png";
import { useRouter } from "next/navigation";
import DropdownMenu from "../DropdownService/DropdownService";
import localFont from "next/font/local";
import NavModal from "../NavBarModal/NavBarModal";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
import "../../app/globals.css";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="background-for-home-navigationbar">
        <div className="layout-box-fr-navigation-sub-bx">
          <Link href="/">
            <div className="layout-box-fr-logo-in-jdwla">
              <Image src={MainLogo} width={"100%"} height={60} />
            </div>{" "}
          </Link>
          <div className="lx-in-ul-plus-list">
            <ul className="ul-list-for-navtion-at-home-screen-ajk">
              <li
                className={
                  router.pathname == "/"
                    ? "nav-tabs-links-at-Homescreen"
                    : "Inactive-nav-tabs-links-at-Homescreen"
                }
              >
                <Link href="/"> Home</Link>
              </li>
              <li
                className={
                  router.pathname == "/About"
                    ? "nav-tabs-links-at-Homescreen"
                    : "Inactive-nav-tabs-links-at-Homescreen"
                }
              >
                <Link href="/About"> Why Us</Link>
              </li>
              <li className="Inactive-nav-tabs-links-at-Homescreen">
                <DropdownMenu
                  menu={
                    <Link href="/service/account-based-marketing">
                      Services
                    </Link>
                  }
                >
                  <div className="internal-box-for-drop-down-in-navbar">
                    <div>
                      <h5 className="header-at-drp-dwn-at-navbar">
                        Demand Generation
                      </h5>
                      <a href="/service/account-based-marketing">
                        <p className="list-of-under-services-at-dropdwn">
                          Account Based Marketing
                        </p>
                      </a>
                      <a href="/service/content-marketing">
                        <p className="list-of-under-services-at-dropdwn">
                          Content Marketing
                        </p>
                      </a>
                      <a href="/service/event-promotion">
                        <p className="list-of-under-services-at-dropdwn">
                          Event Promotion
                        </p>
                      </a>
                      <a href="/service/marketing-qualified-lead">
                        <p className="list-of-under-services-at-dropdwn">
                          Marketing Qualified Lead (MQL)
                        </p>
                      </a>
                    </div>
                    <div>
                      <h5 className="header-at-drp-dwn-at-navbar">
                        Sales Development
                      </h5>
                      <a href="/service/appointment-generation">
                        <p className="list-of-under-services-at-dropdwn">
                          Appointment Generation
                        </p>
                      </a>
                      <a href="/service/bant-lead">
                        <p className="list-of-under-services-at-dropdwn">
                          BANT Lead
                        </p>
                      </a>
                      <a href="/service/confirmed-call-back">
                        <p className="list-of-under-services-at-dropdwn">
                          Confirmed Call Back
                        </p>
                      </a>
                      <a href="/service/sales-qualified-lead">
                        <p className="list-of-under-services-at-dropdwn">
                          Sales Qualified Lead
                        </p>
                      </a>
                    </div>
                    <div>
                      <h5 className="header-at-drp-dwn-at-navbar">
                        Database Services
                      </h5>
                      <a href="/service/b2b-list-building">
                        <p className="list-of-under-services-at-dropdwn">
                          B2B List Building
                        </p>
                      </a>
                      <a href="/service/database-cleansing">
                        <p className="list-of-under-services-at-dropdwn">
                          Database Cleansing
                        </p>
                      </a>
                      <a href="/service/install-database">
                        <p className="list-of-under-services-at-dropdwn">
                          Install Database
                        </p>
                      </a>
                    </div>
                    <div>
                      <h5 className="header-at-drp-dwn-at-navbar">
                        Digital Marketing
                      </h5>
                      <a href="/service/email-marketing">
                        <p className="list-of-under-services-at-dropdwn">
                          Email Marketing
                        </p>
                      </a>
                      <a href="/service/market-research">
                        <p className="list-of-under-services-at-dropdwn">
                          Market Research
                        </p>
                      </a>
                      <a href="/service/seo-services">
                        <p className="list-of-under-services-at-dropdwn">
                          SEO Services
                        </p>
                      </a>
                    </div>
                  </div>
                </DropdownMenu>
              </li>
              <li
                className={
                  router.pathname == "/careers"
                    ? "nav-tabs-links-at-Homescreen"
                    : "Inactive-nav-tabs-links-at-Homescreen"
                }
              >
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
            <Link href="/contactus">
              <button
                className="btn-at-homepage-navbar-jsd"
                style={myFont.style}
              >
                Contact us
              </button>
            </Link>
          </div>
          <div
            className="display-none-at-hamburger-iohs"
            onClick={() => setShow(true)}
          >
            <Image src={Hamburger} width={25} height={25} />
          </div>
        </div>
      </div>
      <NavModal visible={show} onClose={() => setShow(false)}></NavModal>
    </>
  );
};
