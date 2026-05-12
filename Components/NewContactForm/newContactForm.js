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
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      console.log("Submitting form with data:", { fullName, bussinessEmail, subject, message });
      if (!fullName || !bussinessEmail || !subject) {
        console.log("Validation failed: Missing required fields");
        toast.error("Please fill in all required fields.", {
          position: "top-right"
        });
        return;
      }



      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, bussinessEmail, subject, message }),
      });
      const json = await res.json();


      if (json.message) {
        toast.success(json.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error(json.message || (res.ok ? "We have received your details and will contact you soon." : "Failed to send message."), {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      if (res.ok) {
        setFullName("");
        setBussinessEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      console.log("error while submitting", error);
    } finally {
      setIsSubmitting(false);
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
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
            <div className="fr-dsks-sjkds-mcks-vmk">
              <textarea
                placeholder="Write Message"
                className="for-textarea-at-cntx-sksjd"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
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
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default NewContactForm;
