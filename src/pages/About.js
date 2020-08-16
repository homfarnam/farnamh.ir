import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

const About = (props) => {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          I am Farnam Homayounfar, I'm 23 and I am a Frontend developer for 5
          years.
        </p>
        <p>
          I am experienced with Html, CSS, Sass, JavaScript, and Reactjs/React
          native, React-Redux, Next js and, MongoDB. Also, I can program with
          Python.
        </p>
        <p>I have Some knowledge in Backend like Node js and PHP and Django.</p>
        <p>
          I am an expert in Wordpress too. I have some skills in UI/UX Design.
        </p>
        <p>Also, I can work with Zepline and Adobe XD.</p>
        <p>
          In these years I learned many things with self-study, I can learn
          anything quickly.
        </p>
      </Content>
    </div>
  );
};

export default About;
