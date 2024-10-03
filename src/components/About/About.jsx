import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Acerca de Mí</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Habilidades Blandas</h3>
              <p>
              Me destaco por mi capacidad de trabajo en equipo, comunicación efectiva y resolución de problemas. Tengo una mentalidad abierta, lo que me permite adaptarme a diferentes situaciones y entornos de trabajo. Además, soy proactivo, con una fuerte orientación a resultados, lo que me impulsa a cumplir los objetivos con eficiencia. La empatía y la colaboración son fundamentales en mi enfoque, lo que me permite trabajar de manera efectiva con colegas y clientes.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Habilidades Duras</h3>
              <p>
              Cuento con amplios conocimientos en desarrollo web fullstack, dominando tanto tecnologías frontend como HTML, CSS, JavaScript y frameworks como React, así como lenguajes backend como Node.js, Python y PHP. Manejo bases de datos relacionales y no relacionales, como MySQL y MongoDB, además de tener experiencia en la creación de APIs RESTful y GraphQL. Mis habilidades incluyen también el uso de herramientas de control de versiones como Git, y la implementación de prácticas de DevOps para la automatización de procesos de despliegue.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Actualmente</h3>
              <p>
              Estoy profundizando mis conocimientos en tecnologías de cloud computing y arquitectura de microservicios, con el objetivo de optimizar la escalabilidad y eficiencia de las aplicaciones que desarrollo. Además, estoy explorando herramientas de automatización y CI/CD para mejorar los procesos de integración y despliegue continuo.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
