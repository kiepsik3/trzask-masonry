import "./contact.scss";
import { Headline1 } from "../../typography/Headlines/Headlines";
import piotrGif from "../../assets/img/contact/team-piotr.gif";
import joannaGif from "../../assets/img/contact/team-joanna.gif";
import Paragraph from "../../typography/Paragraph/Paragraph";
import { Helmet } from "react-helmet";
import React from "react";

export function Contact(props) {
  return (
    <>
      <Helmet>
        <title>TRZ / KONTAKT</title>
        <meta
          name="description"
          content="Profesjonalne studio animacji specjalizujące się w reklamie internetowej. Tworzymy interaktywne rich media, grywalne playable ads, gry na landing page'ach, reklamy video oraz spektakularne animacje wszelkiej maści."
        />
        <meta name="keywords" content={props.homepageKeywords.join(", ")} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="contact">
        <div className="contact-container">
          <Headline1>
            Jeśli szukasz profesjonalnego studia animacji do zadań specjalnych -
            to właśnie je znalazłeś!
          </Headline1>
          <div className="items">
            <div className="item">
              <img src={piotrGif} alt="piotrGif" />
              <Paragraph small>
                Nasz kontakt w <span>Lublinie:</span>
                <br />
                Piotr - Owner and Head of Trzask
                <br />
                +48 664 938 983
                <br />
                <a href="mailto:piotr@trzask.com">piotr@trzask.com</a>
                <br />
                <br />
                <a
                  href="https://maps.app.goo.gl/dSNB2262wpqCxYJu9"
                  target="_blank"
                >
                  Cicha 4/3,
                  <br />
                  20-057 Lublin, Polska
                </a>
              </Paragraph>
            </div>

            <div className="item">
              <img src={joannaGif} alt="joannaGif" />
              <Paragraph small>
                i pięknej <span>Warszawie</span>
                <br />
                Joanna - Business Development Director
                <br />
                +48 604 908 431
                <br />
                <a href="mailto:joanna@trzask.com">joanna@trzask.com</a>
                <br />
                <br />
                <span>Socialmedia:</span>
                <div className="socialMediaLinks">
                  <a
                    href="https://www.instagram.com/trzaskstudio/"
                    target="_blank"
                  >
                    @insta
                  </a>
                  <a
                    href="https://www.linkedin.com/company/trzaskstudio"
                    target="_blank"
                  >
                    @linked
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCCgVKfDGxxWt-PHsZwz2NDQ"
                    target="_blank"
                  >
                    @youtube
                  </a>
                </div>
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
