import TimelineCard from "../timeline/components/courseCard";
import HomePageStyle from "./HomePageStyle";

const HomePage = () => {
  return (
    <HomePageStyle>
      <div className="home-page">
        <TimelineCard />
      </div>
    </HomePageStyle>
  );
};
export default HomePage;
