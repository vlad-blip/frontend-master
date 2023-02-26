import styles from "./Destination.module.css";
import europa from "../assets/destination/image-europa.png";
import data from "../data.json";
import { useParams } from "react-router-dom";

const destinations = {
  Moon: 0,
  Mars: 1,
  Europa: 2,
  Titan: 3,
};

const Destination = () => {
  const { planet } = useParams();
  const index = destinations[planet];

  const dest = data.destinations[index];

  return (
    <main class="main">
      <section class="hero">
        <h5 class="heading-5 section-heading">
          <p>
            <span class="highlight">01</span> Pick your destination
          </p>
        </h5>
        <div class="section-body">
          <img src={europa} alt="" class="planet-img" />
          <div class="section-description">
            <div class="picker-item">
              <input
                type="radio"
                id={dest.name.toLowerCase()}
                name="planet"
                value={dest.name.toLowerCase()}
              />
              <label
                class="picker-btn ${dest.name.toLowerCase() === this.planet && 'picker-btn--active'}"
                for="${dest.name.toLowerCase()}"
              >
                {dest.name}
              </label>
            </div>
            <article class="planet-description">
              <h2 class="heading-2">{dest.name}</h2>
              <p class="body-text">{dest.description}</p>
              <div class="divider"></div>
              <div class="remoteness">
                <div class="distance">
                  <h6 class="subheading-2">Avg. distance</h6>
                  <p class="subheading-1">{dest.distance}</p>
                </div>
                <div class="travel-time">
                  <h6 class="subheading-2">Est. travel time</h6>
                  <p class="subheading-1">{dest.travel}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destination;
