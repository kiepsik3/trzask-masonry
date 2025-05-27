import "./about.scss";
import { Headline1, Headline3 } from "../../typography/Headlines/Headlines";
import Paragraph from "../../typography/Paragraph/Paragraph";
import Button from "../../components/Button/Button";
import { Helmet } from "react-helmet";
import React from "react";

export default function About(props) {
  return (
    <>
      <Helmet>
        <title>TRZ / O NAS</title>
        <meta
          name="description"
          content="Profesjonalne studio animacji specjalizujące się w reklamie internetowej. Tworzymy interaktywne rich media, grywalne playable ads, gry na landing page'ach, reklamy video oraz spektakularne animacje wszelkiej maści."
        />
        <meta name="keywords" content={props.homepageKeywords.join(", ")} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="about">
        <section className="visual-header">
          <img src="../images/about/trzask_inside_top-1.jpg" />
        </section>
        <section className="our-mission">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <Headline1>Cześć!</Headline1>
                <Headline3>
                  Jesteśmy Twoim przewodnikiem w świecie reklamy internetowej
                </Headline3>
                <Paragraph>
                  Trzask jest profesjonalnym studiem animacji specjalizującym
                  się w reklamie internetowej. Zajmujemy się wszystkim, co jest
                  z nią związane - tworzymy interaktywne{" "}
                  <a href="/pl/case-studies/przetworki">rich media</a>,{" "}
                  <a href="/pl/case-studies/tiger">grywalne playable ads</a>,{" "}
                  <a href="/pl/case-studies/dooti-donuts">
                    gry na landing page'ach
                  </a>
                  , <a href="/pl/blog/G2A">reklamy video</a> oraz{" "}
                  <a href="/pl/blog/Cyberpunk-2077">spektakularne animacje</a>{" "}
                  wszelkiej maści.
                </Paragraph>

                <Paragraph>
                  Kierujemy się zasadą mówiącą: czas i jakość ponad wszystko.
                  Wiemy, jak ważne jest to dla naszych klientów, dlatego nasze
                  projekty wykonujemy z prędkością światła mając na uwadze, by
                  każdy z nich był niepowtarzalny i wyjątkowy.
                </Paragraph>
              </div>
            </div>
            <img src="../images/about/element.svg" />
            <img src="../images/about/element2.svg" />
          </div>
        </section>

        <section className="bg-section">
          <video autoPlay loop muted>
            <source src="../video/trzask_aboutus.mp4" type="video/mp4" />
            Your browser does not support the HTML5 Video element.
          </video>
          <img src="../images/about/trzask_inside02b@2x.png" />
        </section>

        <section className="clients">
          <div className="container">
            <Headline1>Z kim pracujemy?</Headline1>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/1_bmw.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/2_cdproject.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/3_ddb.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/4_k2.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/5_techland.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/6_life.png" />
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/7_maspex.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/8_isobar.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/9_artegence.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/10_leo.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/11_wawel.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/12_ogilvy.png" />
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/13_mindshare.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/14_saatchi.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/15_starcom.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/16_stokson.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/17_wavemaker.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/18_wunderman.png" />
              </div>
            </div>
          </div>
        </section>

        <section className="collage">
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-last order-md-first">
                <img src="../images/about/studio-13.jpg" />
              </div>
              <div className="col-lg-4 offset-lg-1 col-md-6 text-centered">
                <Paragraph>
                  Projektujemy reklamy dla wszystkich branż, a zwłaszcza FMCG,
                  Motoryzacji, Bankowości, Telekomunikacji, Elektroniki i
                  Gamingu. Ten ostatni jest nam szczególnie bliski, ponieważ
                  jesteśmy graczami i świetnie rozumiemy świat tej grupy
                  docelowej.
                </Paragraph>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 offset-lg-1 col-md-6">
                <img src="../images/about/monster.svg" className="svg" />
                <img src="../images/about/asap_tresc03-450x675@2x.png" />
              </div>
              <div className="col-md-6 offset-lg-1 img-with-text">
                <img src="../images/about/trzask_inside01new@2x.png" />
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <Paragraph>
                      Od ponad 14 lat działamy z największymi markami nie tylko
                      w Polsce, ale i na świecie. Efekty naszej pracy można
                      zobaczyć w Stanach Zjednoczonych, Holandii, Belgii czy
                      Zjednoczonych Emiratach Arabskich.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img src="../images/about/element3.svg" />
          <img src="../images/about/element4.svg" />
        </section>

        <section className="clients">
          <div className="container">
            <Headline1>Animowaliśmy dla nich!</Headline1>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/1_lowicz.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/2_kitkat.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/3_ikea.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/4_lego.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/5_kinder.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/6_tymbark.png" />
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/7_playstation.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/8_marvel.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/9_disney.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/19_huawei.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/11_netflix.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/20_dying.png" />
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/13_cyberpunk.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/14_toyota.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/15_porsche.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/16_toystory.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/17_thelast.png" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <img src="../images/about/18_goodyear.png" />
              </div>
            </div>
          </div>
        </section>

        <section className="must-see">
          <Headline3>Musisz zobaczyć!</Headline3>
          <div className="must-see-buttons">
            <Button
              label="Dzień z życia studia"
              href="/pl/blog/trzask-a-day-in-the-life/"
            />

            <Button
              label="Wywiad z Piotrem (CEO)"
              href="/pl/blog/Dreams-that-make-it-into-reality"
            />

            <Button label="Trzask stories" href="/pl/case-studies/" />
          </div>
        </section>
      </div>
    </>
  );
}
