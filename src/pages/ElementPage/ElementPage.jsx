import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./element-page.scss";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Link } from "react-router-dom";
import cn from "classnames";
import { FaArrowLeft } from "react-icons/fa";
import { MasonryWall } from "../../components/MasonryWall/MasonryWall";
import { ReactComponent as Arrow } from "../../assets/img/arrow.svg";
import { Helmet } from "react-helmet";
import Text from "../../components/Text/Text";
import Image from "../../components/Image/Image";
import Video from "../../components/Video/Video";

const ElementPage = (props) => {
  const { slug } = useParams();

  const [visible, setVisible] = useState(false);
  const [pinned, setPinned] = useState(true);
  useScrollPosition(
    ({ currPos, prevPos }) => {
      if (currPos.y === prevPos.y) {
        return;
      }

      const windowHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      currPos.y > 99 ? setVisible(true) : setVisible(false);
      currPos.y > prevPos.y && currPos.y > 0
        ? setPinned(false)
        : currPos.y + windowHeight < pageHeight && setPinned(true);
    },
    [visible],
    undefined,
    true,
    0,
  );

  const element = props.walls
    ?.flatMap((w) => w.elements)
    .find((e) => e.slug === slug);

  return (
    <>
      <Helmet>
        <title>{`TRZ / SKILLS ${element?.title ? `/ ${element.title}` : ""}`}</title>
        <meta name="description" content={element?.description} />
        <meta name="keywords" content={element?.keywords?.join(", ")} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="element-page container 2xl:max-w-[1320px]">
        <div
          className={cn(
            "container 2xl:max-w-[1320px] element-page-link-header",
            visible && "visible",
            pinned && "pinned",
          )}
        >
          <Link to="/pl" className="element-page-link">
            <FaArrowLeft />
            Lista
          </Link>
        </div>
        <div className="element-page-header">
          <Link to="/pl" className="element-page-link">
            <FaArrowLeft />
            Lista
          </Link>
          <div>
            <h1>{element?.title}</h1>
            <h3>{element?.caption}</h3>
            <p>{element?.description}</p>
          </div>
        </div>

        {element?.elements && (
          <MasonryWall data={element.elements} set="element" />
        )}

        <div className="sections">
          {element?.content?.map((section, idx) => (
            <div className="section" key={idx}>
              {section.text && (
                <div className="text">
                  <h2>{section.text.title}</h2>
                  {section.text.description.map((d) => (
                    <Text text={d} />
                  ))}
                </div>
              )}
              {section.img && <Image {...section.img} />}
              {section.video && <Video {...section.video} />}
            </div>
          ))}
        </div>

        {element?.otherSkills && (
          <div className="other-skills">
            <h2>Pozostałe skille</h2>
            <div className="skills-masonry">
              {element.otherSkills.map((skill, index) => (
                <Link
                  to={`/pl/skills/${skill.slug}`}
                  className={cn(`skill skill-${index + 1}`)}
                  key={index}
                >
                  <h3>{skill.title}</h3>
                  <p>{skill.caption}</p>
                  <button>
                    Więcej
                    <Arrow />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ElementPage;
