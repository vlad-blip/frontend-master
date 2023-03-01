import styles from "./Destination.module.css";
import europa from "../assets/destination/image-europa.png";
import data from "../data.json";
import Layout from "../Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";

const destinations = {
  Moon: 0,
  Mars: 1,
  Europa: 2,
  Titan: 3,
};

const Destination = () => {
  const { planet } = useParams();
  const navigate = useNavigate();

  const index = destinations[planet];

  const dest = data.destinations[index];

  const inputHandler = (planet) => {
    navigate(`/Destination/${planet}`);
  };
  return (
    <Layout className={styles.wrapper}>
      <main class={styles.main}>
        <section class={styles.hero}>
          <h5 class="heading-5 section-heading">
            <p>
              <span class="highlight">01</span> Pick your destination
            </p>
          </h5>
          <div class={styles["section-body"]}>
            <img src={europa} alt="" class={styles["planet-img"]} />
            <div class={styles["section-description"]}>
              <div class={styles["planet-picker"]}>
                {data.destinations.map((dest) => (
                  <>
                    <input
                      type="radio"
                      id={dest.name}
                      name={dest.name}
                      value={dest.name}
                    />
                    <label
                      class={`${styles["picker-btn"]} ${
                        dest.name === planet ? styles["picker-btn--active"] : ""
                      }`}
                      for={dest.name}
                      onClick={inputHandler.bind(null, dest.name)}
                    >
                      {dest.name}
                    </label>
                  </>
                ))}
              </div>
              <article class={styles["planet-description"]}>
                <h2 class="heading-2">{dest.name}</h2>
                <p class="body-text">{dest.description}</p>
                <div class={styles.divider}></div>
                <div class={styles.remoteness}>
                  <div class={styles.distance}>
                    <h6 class="subheading-2">Avg. distance</h6>
                    <p class="subheading-1">{dest.distance}</p>
                  </div>
                  <div class={styles["travel-time"]}>
                    <h6 class="subheading-2">Est. travel time</h6>
                    <p class="subheading-1">{dest.travel}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Destination;
