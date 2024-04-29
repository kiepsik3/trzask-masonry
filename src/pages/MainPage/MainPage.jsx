import "./main-page.scss";
import cn from "classnames";
import { Link } from "react-router-dom";
import data from "../../data/masonry.json";

const MainPage = () => {
  return (
    <div className="main-page container 2xl:max-w-[1320px]">
      <h1 className="main-page-header">Co potrafii?</h1>
      {data.walls.map((wall, idx) => (
        <div className={cn("main-page-masonry", `set-${wall.set}`)} key={idx}>
          {wall.elements.map((element, index) => (
            <>
              {element.bgImage ? (
                <Link
                  to={`/pl/masonry/${element.slug}`}
                  className={cn(`item item-${index + 1}`)}
                >
                  <img src={element.bgImage} alt={element.bgImage} />
                </Link>
              ) : (
                <div
                  className={cn(
                    `item item-${index + 1} ${element.bgColor === "red" ? "red" : element.bgColor === "purple" ? "purple" : ""}`,
                  )}
                >
                  <h3>{element.title}</h3>
                  <p>{element.caption}</p>
                  <Link to={`/pl/masonry/${element.slug}`}>sdf</Link>
                </div>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MainPage;
