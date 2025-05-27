import React, { useEffect, useState, useRef } from "react";
import cn from "classnames";
import contactFormImg from "../../assets/img/contact-form-img.png";
import contactFormImgMobile from "../../assets/img/contact-form-img-mobile.png";
import closeIcon from "../../assets/img/close.svg";
import closeIconWhite from "../../assets/img/close-white.svg";
import "./contact-form.scss";
import { Headline1 } from "../../typography/Headlines/Headlines";
import Paragraph from "../../typography/Paragraph/Paragraph";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";

export function ContactForm(props) {
  const emptyFormData = {
    email: "",
    message: "",
    categories: [],
    budget: "",
    newsletter: false,
  };

  const categories = [
    "Animacja 3D",
    "Efekty specjalne",
    "Rich Media",
    "Video social media",
    "Reklama html5",
    "Reklama wideo TV",
    "Minigra",
    "Animacja ohh",
  ];

  const budget = [
    "< 10 tysięcy złotych",
    "10-30 tysięcy złotych",
    "> 40 tysięcy złotych",
  ];

  const [isOpen, setOpen] = useState(false);
  const [formData, setFormData] = useState(emptyFormData);

  const [formStatus, setFormStatus] = useState("typing");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setFormStatus("submitting");

    emailjs
      .send("service_n3dxwu8", "template_nb7zpja", formData, {
        publicKey: "dMXFlqJYjQehPt-C3",
      })
      .then(
        () => {
          setFormData(emptyFormData);
          setFormStatus("success");
        },
        () => {
          setFormStatus("error");
        },
      );
  };

  function onCategoryChange(e) {
    if (formData.categories?.includes(e.target.value)) {
      setFormData({
        ...formData,
        categories: formData.categories.filter((a) => a !== e.target.value),
      });
    } else {
      setFormData({
        ...formData,
        categories: [...formData.categories, e.target.value],
      });
    }
  }

  return (
    <>
      <div className={cn("contact-form-cover-bg", isOpen && "opened")} />
      <div className={cn("contact-form", isOpen && "active")}>
        <img
          src={contactFormImg}
          className="contact-form-image"
          alt="contactImg"
        />

        <div className="form-data">
          <img
            src={closeIcon}
            onClick={() => {
              setOpen(false);
              setFormStatus("typing");
            }}
            alt="closeIcon"
            className="close-icon"
          />
          <div className="md:border-b-2 border-black md:pb-2">
            <Headline1>Napisz do nas!</Headline1>
            <Paragraph small opacity>
              Zawsze szukamy nowych wyzwań 💥
              <br />
              Masz projekt, w którym Trzask może się wykazać?
            </Paragraph>
          </div>
          <img
            src={contactFormImgMobile}
            className="contact-form-image-mobile"
            alt="contactImg"
          />
          <form onSubmit={sendEmail} ref={form}>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="form-email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Twój e-mail"
            />
            <div className="additional-info">
              <Paragraph small>W czy możemy Ci pomóc?</Paragraph>
              <div className="selection">
                {categories.map((category, idx) => (
                  <div key={idx}>
                    <input
                      value={category}
                      id={category}
                      onChange={onCategoryChange}
                      type="checkbox"
                      checked={formData.categories?.includes(category)}
                    />
                    <label htmlFor={category}>{category}</label>
                  </div>
                ))}
              </div>
            </div>
            <textarea
              placeholder="Napisz więcej szczegółów, the devil is in the details ✨"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={5}
            />
            <div className="additional-info">
              <Paragraph small>Jaki masz budżet?</Paragraph>
              <div className="selection">
                {budget.map((budgetItem, idx) => (
                  <div key={idx}>
                    <input
                      value={budgetItem}
                      id={budgetItem}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      type="radio"
                      name="budget"
                      checked={formData.budget === budgetItem}
                    />
                    <label htmlFor={budgetItem}>{budgetItem}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="newsletter">
              <input
                value={formData.newsletter}
                id="newsletter"
                onChange={(e) =>
                  setFormData({ ...formData, newsletter: e.target.checked })
                }
                type="checkbox"
                checked={formData.newsletter}
              />
              <label htmlFor="newsletter">Zapisz się do Newslettera</label>
            </div>
            <button className="contact-form-button" type="submit">
              Wyślij formularz
              <Arrow />
            </button>
            {formStatus === "success" ? (
              <div className="status-info success">
                <span>Twoje zapytanie zostało wysłane, dziękujemy :)</span>
                <img
                  src={closeIconWhite}
                  onClick={() => {
                    setFormStatus("typing");
                  }}
                  alt="closeIcon"
                  className="close-icon"
                />
              </div>
            ) : formStatus === "error" ? (
              <div className="status-info error">
                <span>
                  Ups, coś poszło nie tak. Spróbuj ponownie za chwilę.
                </span>
                <img
                  src={closeIconWhite}
                  onClick={() => {
                    setFormStatus("typing");
                  }}
                  alt="closeIcon"
                  className="close-icon"
                />
              </div>
            ) : (
              formStatus === "submitting" && (
                <div className="loading-spinner">
                  <ClipLoader color="#7E58EC" size={60} />
                </div>
              )
            )}
          </form>
        </div>
      </div>
      <button className="contact-form-button" onClick={() => setOpen(true)}>
        Wyślij zapytanie
        <Arrow />
      </button>
    </>
  );
}
