import React from "react";
import "./home.css";
import { Typewriter } from "react-simple-typewriter";
import CV from "../../assets/PrathipanCV.pdf";

const Home = () => {
  return (
    <section className="container mr-md-1">
      <div className="main-content">
        <h1 className="title">
          I'm <span className="name">PRATHIPAN</span>
        </h1>
        <h1 className="subheading">
          I'm
          <span className="subtitle">
            <Typewriter
              words={[" Engineer", " Software developer", " Web developer"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="about-content">
          I'm Prathipan.I'm currently working as an Analyst in HCL Technologies. Intrested in working with web applications.
          I'm continuously practicing  front end web applications and having some basic knowledge on backend technology.
        </p>
        <a download="" href={CV} className="button mt-5">
          Download CV
        </a>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/prathipan-p-8b6a28124/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="uil uil-linkedin social-icon"></i>
          </a>
          <a
            href="https://github.com/Prathipan"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="uil uil-github social-icon"></i>
          </a>
          <a
            href="https://www.instagram.com/praveen_24_/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="uil uil-instagram social-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
