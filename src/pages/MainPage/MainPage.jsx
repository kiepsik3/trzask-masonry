import "./main-page.scss";
import { MasonryWall } from "../../components/MasonryWall/MasonryWall";

const MainPage = (props) => {
  return (
    <div className="main-page container 2xl:max-w-[1320px]">
      <h1 className="main-page-header">Co potrafii?</h1>
      {props.walls?.map((wall, idx) => (
        <MasonryWall data={wall.elements} set={wall.set} key={idx} />
      ))}
    </div>
  );
};

export default MainPage;
