import "./main-page.scss";
import cn from "classnames";
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
                <img
                  className={cn(`item item-${index + 1}`)}
                  src={element.bgImage}
                  alt={element.bgImage}
                />
              ) : (
                <div
                  className={cn(
                    `item item-${index + 1} ${element.bgColor === "red" ? "red" : element.bgColor === "purple" ? "purple" : ""}`,
                  )}
                >
                  {element.title}
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
