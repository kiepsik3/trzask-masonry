import React, { useEffect, useState } from "react";
import jsonp from "jsonp";
import monster from "../../assets/img/monster.svg";
import monsterDown from "../../assets/img/monsterDown.svg";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import "./newsletter.scss";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("typing");
  const [termsOfConditions, setTermsOfConditions] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  const isMobile = width < 768;

  const onSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://trzask.us12.list-manage.com/subscribe/post?u=6f64c1c2d6aee545eabb88d69&amp;id=83049566fd&amp;f_id=0047eee3f0";
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      if (data.result === "success") {
        setStatus("success");
      } else {
        setStatus("error");
      }
    });
  };

  return (
    <div className="newsletter-wrapper">
      <div className="container newsletter 2xl:max-w-[1320px]">
        {status === "typing" ? (
          <>
            <div className="info max-w-[286px]">
              <h2>
                Zapisz się
                <br />
                do newslettera!
              </h2>
              <p>Odkryj garść szalonych pomysłów Trzaska.</p>
            </div>
            <img src={isMobile ? monsterDown : monster} alt="monster" />
            <form onSubmit={onSubmit}>
              <input
                type="email"
                name="EMAIL"
                placeholder="Twój e-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <button
                type="submit"
                disabled={!termsOfConditions || email.length === 0}
              >
                Zapisz się
                <Arrow />
              </button>
              <div className="checkbox">
                <input
                  checked={termsOfConditions}
                  id="terms"
                  name="terms"
                  onChange={() => setTermsOfConditions(!termsOfConditions)}
                  type="checkbox"
                  required
                />
                <label htmlFor="terms">
                  Akceptuję <a href="#">Regulamin</a> i{" "}
                  <a href="#">Politykę prywatności</a>
                </label>
              </div>
            </form>
          </>
        ) : status === "success" ? (
          <div className="info mx-auto text-center max-w-max">
            <h2>Dziękujemy!</h2>
            <p>Pomyślnie zostałeś zapisany do naszego Newslettera.</p>
          </div>
        ) : (
          <div className="info mx-auto text-center max-w-auto">
            <h2>Ups!</h2>
            <p>Coś poszło nie tak. Spróbuj ponownie później.</p>
          </div>
        )}
      </div>
    </div>
  );
}
