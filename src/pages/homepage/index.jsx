import AboutUs from "../../components/aboutUs";
import BlogList from "../blogList";
import TimelineScreen from "../timeline";

import HomePageStyle from "./HomePageStyle";

const HomePage = () => {
  return (
    <HomePageStyle>
      <div className="home-page">
        {/* <div className="relative overflow-hidden rounded-lg w-full aspect-video">
          <video
            className="h-full w-full object-cover custom-video "
            controls
            autoPlay
            muted
          >
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div> */}
        <TimelineScreen />
        <AboutUs />
        <BlogList />
      </div>
    </HomePageStyle>
  );
};
export default HomePage;
