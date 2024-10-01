import React, { useEffect, useState } from "react";
import image from "../images/3411109.jpg";
import "../css/Home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { BASE_URL } from "../helper";

const Home = ({ setProgress }) => {
  const [data, setdata] = useState([{}]);
  const getlink = async () => {
    setProgress(10);
    const response = await fetch(`${BASE_URL}/resumelink`, {
      method: "GET",
    });
    const json = await response.json();
    console.log(json);
    setdata(json);
    setProgress(100);
  };

  useEffect(() => {
    getlink();
  }, []);

  return (
    <div className="main">
      <div className="text">
        <h1>Kishor G S</h1>
        <Typewriter
          options={{
            strings: [
              "Java",
              "MERN",
              "Programming",
              "Frontend Developer",
              "Machine learning",
              "Data science",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: "typeWriterText",
          }}
        />
        <p>
          I am a Fullstack developer, completed my MCA at Nitte Meenakshi Institute
          Of Technology, proficient in MERN, DSA, and Machine learning. My
          passion lies in innovative software solutions and problem-solving. I
          am dedicated to continuous learning and contributing to the IT
          industry.
        </p>
        <div className="social-links">
          <Link to="https://github.com/kishorgs" target="blank">
            <i class="fa-brands fa-github fa-lg" />
          </Link>
          <Link to="https://www.linkedin.com/in/kishor-g" target="blank">
            <i class="fa-brands fa-linkedin fa-lg" />
          </Link>
          <Link to="mailto:kishorgsk.15@gmail.com" target="blank">
            <i class="fa-solid fa-envelope fa-lg" />
          </Link>
          <Link to="https://wa.me/+918748067393" target="blank">
            <i class="fa-brands fa-whatsapp fa-lg" />
          </Link>
        </div>
        <Link to={data[0].resumelink} target="blank">
          <button className="cta-btn">Download my CV</button>
        </Link>
      </div>
      <div className="image">
        <img src={image} alt="portfollio" />
      </div>
    </div>
  );
};

export default Home;
