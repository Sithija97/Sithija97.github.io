import React from "react";
import { FaPhoneSquareAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <React.Fragment>
      <section className="contacts">
        <h1>Contact</h1>
        <ul>
          <li>
            <a href="tel:0770689521">
              <FaPhoneSquareAlt /> +94 (0) 770 689 521
            </a>
          </li>
          <li>
            <a href="mailto:nsithijashehara@gmail.com">
              <FaEnvelope /> nsithijashehara@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
};

export default Contact;
