import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
const HomePage = () => {
  return (
    <React.Fragment>
      <section className="homepage">
        <div className="overlay">
          <h1>Sithija Shehara</h1>
          <p>Full Stack Developer</p>

          <ul>
            <li>
              <a href="" target="_blank" rel="noopennernoreferrer">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopennernoreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopennernoreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopennernoreferrer">
                <FaDev />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
