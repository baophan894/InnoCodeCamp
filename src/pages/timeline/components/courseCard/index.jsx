import "./";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timeLineData from "../../../../data/timeline";
import { Scrollbars } from "react-custom-scrollbars";
import { useState } from "react";

const TimelineCard = () => {
  const [iconStyles, setIconStyles] = useState({}); // Initialize with an empty object or appropriate initial value

  const handleIconStyleChange = (elementKey) => {
    const updatedStyles = {
      ...iconStyles,
      [elementKey]: { ...iconStyles[elementKey], background: "black" },
    };
    setIconStyles(updatedStyles);
  };
  return (
    <Scrollbars style={{ height: 800 }}>
      <h2 className="text-4xl font-bold text-blue-500">Quay về lịch sử</h2>

      <div className="">
        <VerticalTimeline lineColor="black">
          {timeLineData.map((element) => {
            element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={iconStyles[element.key]}
                contentStyle={{
                  background: "linear-gradient(to right, #c02942, #e25860)",
                  color: "#fff",
                  transition: "background-color 0.3s ease-in-out",
                }}
              >
                <span
                  className="checkmark-overlay"
                  onMouseOver={() => (element.completed = true)}
                  onMouseOut={() => (element.completed = false)}
                >
                  <span className="checkmark">✓</span> {/* Checkmark icon */}
                </span>
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>

                <button
                  onClick={() => handleIconStyleChange(element.key)}
                  href="#"
                  className="float-right mt-10 hover:bg-red-500 my-1 mr-4 inline-block rounded bg-slate-500 bg-opacity-[30%] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-100 md:px-9 lg:px-6 xl:px-9"
                >
                  Chi tiết
                </button>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </Scrollbars>
  );
};
export default TimelineCard;
