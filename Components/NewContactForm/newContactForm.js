import React, { useState } from "react";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });
import "../../app/globals.css";
import Name from "../../public/user.svg";
import MainLogo from "../../public/mainlogo.png";
import Chat from "../../public/chat.svg";
import Mail from "../../public/mail.svg";
import Image from "next/image";
import { sendContactForm } from "@/lib/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const NewContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [bussinessEmail, setBussinessEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const onSubmit = async (e) => {
    const values = {
      // message,
      fullName,
      bussinessEmail,
      phoneNumber,
      jobTitle,
    };
    try {
      await sendContactForm(values);

      toast.success("Your message has been sent successfully!", {
        position: "top-right",
        autoClose: 2000, // Time in milliseconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log("error while submitting");
    }
  };

  return (
    <>
      <div className="main-box-of-ctnct-info-inpts-and-cnt" data-aos="fade-up">
        <div style={myFont.style} className="first-bx-f-left-ctn-dhjd">
          <div className="esr-white-line-in-side-ak">
            {" "}
            <Image src={MainLogo} height={80} width={80} />
            <p className="left-text-content-at-cnt-bx">
              Talk to our
              <br />
              Sales team
            </p>
          </div>
        </div>
        <div style={myFont.style} className="right-bx-of-a-inouts-iand-sjm">
          <div>
            <p className="fnt-sz-fr-cnt-us-akjd">Get In Touch</p>
            <p className="uyjs-sks-acs-wsdcsd-dc">
              Don't let questions linger we're just a click or call away. Reach
              out now, and let's embark on a journey of collaboration, turning
              your visions into reality.
            </p>
          </div>
          <div className="fr-mrgin-tp-sddjvdm">
            <div className="flx-in-input-at-cntx-btn-snd">
              <div className="brder-at-inpit-and-img-sect-isn">
                <input
                  placeholder="Full Name"
                  style={myFont.style}
                  className="input-fr-cnt-aph-snd"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
                <Image src={Name} />
              </div>
              <div className="brder-at-inpit-and-img-sect-isn">
                <input
                  placeholder="Bussiness Email"
                  style={myFont.style}
                  className="input-fr-cnt-aph-snd"
                  value={bussinessEmail}
                  onChange={(e) => {
                    setBussinessEmail(e.target.value);
                  }}
                />
                <Image src={Mail} height={30} />
              </div>
            </div>
            <div className="brder-at-inpit-and-img-sect-isn pad-top-akfkdos-fdk">
              <input
                placeholder="Subject"
                style={myFont.style}
                className="input-fr-cnt-aph-snd"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>
            <div className="fr-dsks-sjkds-mcks-vmk">
              <textarea
                placeholder="Write Message"
                className="for-textarea-at-cntx-sksjd"
                value={jobTitle}
                onChange={(e) => {
                  setJobTitle(e.target.value);
                }}
              />
              <Image src={Chat} className="jhdes-fr-panc-sdk" />
            </div>
            <button
              style={myFont.style}
              className="send-msg-btn-st-ancjs-bcks"
              onClick={(e) => {
                onSubmit(e);
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewContactForm;
