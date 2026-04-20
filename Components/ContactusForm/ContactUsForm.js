import React, { useState } from "react";
import localFont from "next/font/local";
import { Input } from "../Inputs/Input";
const myFont = localFont({ src: "../../Fonts/Montserrat-Medium.ttf" });

const ContactUsForm = () => {
  // const [message, setMessage] = useState("");
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
      <div className="container-for-contact-us-form">
        <h2 className="header-for-contact-us-form">Send us a message</h2>
        <div className="continer-of-inputs-at-contact-us-form">
          <div className="container-for-inputs">
            <Input title="Full Name" placeholder="" name="fullName" />
          </div>
          <div className="container-for-inputs">
            <Input title="Bussiness Email" placeholder="" />
          </div>
          <div className="container-for-inputs">
            <Input title="Phone Number" placeholder="" />
          </div>
          <div className="container-for-inputs">
            <Input title="Job Title" placeholder="" />
          </div>
          <button
            style={myFont.style}
            className="btn-for-submit-at-contact-screen"
          >
            Submit
          </button>
          <p className="terms-and-privacy-text-ahdjsn">
            By submitting this form, you are agreeing to AdvertMarketers's
            <br /> Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
