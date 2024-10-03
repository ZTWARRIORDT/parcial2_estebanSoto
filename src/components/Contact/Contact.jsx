import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contácto</h2>
        <p></p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ztwarriordt@gmail.com">ztwarriordt@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/instagram.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.instagram.com/zt_soto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram/zt_soto</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/ZTWARRIORDT">github.com/ZTWARRIORDT</a>
        </li>
      </ul>
    </footer>
  );
};
