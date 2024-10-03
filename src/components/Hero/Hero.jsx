import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, Soy Esteban</h1>
        <p className={styles.description}>
          Soy ingeniero multimedia especializado en desarrollo web fullstack, creando soluciones digitales eficientes y atractivas.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contactame!
        </a>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
