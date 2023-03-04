import styles from "./Technology.module.css";
import Layout from "../Layout/Layout";
import data from "../data.json";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const technology = {
  "Launch vehicle": 0,
  Spaceport: 1,
  "Space capsule": 2,
};

const Technology = () => {
  const [pictures, setPictures] = useState({
    portrait: "",
    landscape: "",
  });

  const { technologyId } = useParams();

  const index = technology[technologyId];

  const technologyData = data.technology[index];
  const { name, images, description } = technologyData;

  const importImage = () => {
    import(`../assets/technology/${images.portrait}.jpg`).then((d) =>
      setPictures((prev) => {
        return { ...prev, portrait: d.default };
      })
    );
    import(`../assets/technology/${images.landscape}.jpg`).then((d) =>
      setPictures((prev) => {
        return { ...prev, landscape: d.default };
      })
    );
  };

  useEffect(() => {
    importImage();
  }, [images]);
  return (
    <Layout className={styles.wrapper}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h5 className="heading-5 section-heading">
            <span className="highlight">03</span> Space Launch 101
          </h5>
          <div className={styles["section-body"]}>
            <div className={styles["launch-wrapper"]}>
              <ul className={styles.slider}>
                {data.technology.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={`/Technology/${item.name}`}
                      className={`${styles.page} ${
                        technologyId === item.name ? styles["page--active"] : ""
                      }`}
                      data-page={i}
                    >
                      {i}
                    </Link>
                  </li>
                ))}
              </ul>
              <article className={styles["launch-description"]}>
                <h4 className="heading-5">The terminology...</h4>
                <h3 className="heading-3">{name}</h3>
                <p className="body-text">{description}</p>
              </article>
            </div>
            <picture>
              <source
                srcSet={pictures.landscape}
                media="(max-width:768px)"
                className={styles.landscape}
              />
              <img
                srcSet={pictures.portrait}
                alt={name}
                className={`${styles["vehicle-img"]} ${styles.portrait}`}
              />
            </picture>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Technology;
