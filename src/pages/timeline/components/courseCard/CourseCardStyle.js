import styled from "styled-components";
const CourseCardStyle = styled.div`
  body {
    background: #3da3d5;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    color: rgb(53, 53, 53);
  }

  .title {
    font-size: 15em;
    text-align: center;
    font-family: "Bebas Neue", sans-serif;
  }

  h3 {
    padding-top: 0.25em;
  }

  .vertical-timeline-element-content {
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 2em 3em !important;
  }

  .date {
    color: rgb(201, 251, 255);
  }

  #description {
    margin: 1.5em 0 2em 0;
  }

  .button {
    text-decoration: none;
    padding: 0.5em 1em;
    border-radius: 5px;
    color: white;
  }

  .workButton {
    background-color: #06d6a0;
  }

  .workButton:hover {
    background-color: #0ac593;
  }

  .schoolButton {
    background-color: #f9c74f;
  }

  .schoolButton:hover {
    background-color: #f3bc3c;
  }

  @media only screen and (max-width: 1700px) {
    .vertical-timeline-element-date {
      display: block !important;
      float: none !important;
      color: rgb(44, 44, 44);
      margin-top: 1.5em;
    }
  }
`;
export default CourseCardStyle;
