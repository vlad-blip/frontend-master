import styles from "./Crew.module.css";
import Layout from "../Layout/Layout";
import data from "../data.json";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const crew = {
  "Douglas Hurley": 0,
  "Mark Shuttleworth": 1,
  "Victor Glover": 2,
  "Anousheh Ansari": 3,
};

const Crew = () => {
  const [image, setImage] = useState("");

  const { crewId } = useParams();

  const index = crew[crewId];

  const crewData = data.crew[index];

  const { role, name, images, bio } = crewData;

  const importImage = () => {
    import(`../assets/crew/${images.png}.png`).then((d) => setImage(d.default));
  };

  useEffect(() => {
    importImage();
  }, [images]);

  return (
    <Layout className={styles.wrapper}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h5 className="heading-5 section-heading">
            <span className="highlight">02</span> Meet your crew
          </h5>
          <div className={styles["section-body"]}>
            <div className={styles["crew-wrapper"]}>
              <article className={styles["crew-description"]}>
                <h4 className="heading-4">{role}</h4>
                <h3 className="heading-3">{name}</h3>
                <p className="body-text">{bio}</p>
              </article>
              <li className={styles.slider}>
                {data.crew.map((crew, index) => {
                  return (
                    <Link
                      key={index}
                      className={`${styles.page} ${
                        crewId === crew.name ? styles["page--active"] : ""
                      }`}
                      to={`/Crew/${crew.name}`}
                    ></Link>
                  );
                })}
              </li>
            </div>
            <div className={styles["img-wrapper"]}>
              <img src={image} alt="" className={styles["crew-img"]} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Crew;
