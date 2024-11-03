import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";
import emailjs from "emailjs-com";

function Contact() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const displayMessage = (msg, isError = false) => {
    setMessage(msg);
    setError(isError);
    setTimeout(() => {
      setMessage("");
      setError(false);
    }, 3000);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Input validation
    if (!formdata.name) {
      displayMessage("Name is required", true);
    } else if (!formdata.email) {
      displayMessage("Email is required", true);
    } else if (!formdata.subject) {
      displayMessage("Subject is required", true);
    } else if (!formdata.message) {
      displayMessage("Message is required", true);
    } else {
      setError(false);

      // Sending email through EmailJS
      emailjs
        .send(
          "service_nci8v0a", // Your Service ID
          "template_jemoh47", // Your Template ID
          {
            from_name: formdata.name,
            from_email: formdata.email,
            subject: formdata.subject,
            message: formdata.message,
          },
          "GJnMUMwQOPljl-3vT", // Your Private Key / User ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            displayMessage("Your message has been sent!");

            // Clear the form
            setFormdata({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            console.log("FAILED...", error);
            displayMessage(
              "Failed to send message, please try again later.",
              true,
            );
          },
        );
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const numberFormatter = (number) => {
    const phnNumber = number;
    return phnNumber;
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  useEffect(() => {
    axios.get("/api/contactinfo").then((response) => {
      setPhoneNumbers(response.data.phoneNumbers);
      setEmailAddress(response.data.emailAddress);
      setAddress(response.data.address);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Contact - Bilawal React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Bilawal React Personal Portfolio Template Contact Page"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Contact Me" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-contact-formwrapper">
                  <h4>Get In Touch</h4>
                  <form
                    action="#"
                    className="mi-form mi-contact-form"
                    onSubmit={submitHandler}>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-name">
                        Enter your name*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="contact-form-name"
                        value={formdata.name}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-email">
                        Enter your email*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="email"
                        id="contact-form-email"
                        value={formdata.email}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-subject">
                        Enter your subject*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="subject"
                        id="contact-form-subject"
                        value={formdata.subject}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-message">
                        Enter your Message*
                      </label>
                      <textarea
                        onChange={handleChange}
                        name="message"
                        id="contact-form-message"
                        cols="30"
                        rows="6"
                        value={formdata.message}></textarea>
                    </div>
                    <div className="mi-form-field">
                      <button className="mi-button" type="submit">
                        Send Mail
                      </button>
                    </div>
                  </form>
                  {handleAlerts()}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-contact-info">
                  {!phoneNumbers ? null : (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Phone />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Phone</h6>
                        {phoneNumbers.map((phoneNumber) => (
                          <p key={phoneNumber}>
                            <a href={numberFormatter(phoneNumber)}>
                              {phoneNumber}
                            </a>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  {!emailAddress ? null : (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Mail />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Email</h6>
                        {emailAddress.map((email) => (
                          <p key={email}>
                            <a href={`mailto:${email}`}>{email}</a>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  {!phoneNumbers ? null : (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.MapPin />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Address</h6>
                        <p>{address}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Contact;
