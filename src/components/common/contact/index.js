import React from "react";
import { ContactData } from "../../../data/contact";
import "./social-contact.css";
function ContactMe() {
  const data = ContactData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} target="blank">
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default ContactMe;
