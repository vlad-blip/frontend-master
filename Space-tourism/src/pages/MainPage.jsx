import styles from "./MainPage.module.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <Layout className={styles.wrapper}>
      <main class="main">
        <section class="hero">
          <div class="section-text">
            <h5 class="heading-5">So, you want to travel to</h5>
            <h1 class="heading-1">Space</h1>
            <p class="body-text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div class={styles.section_cta}>
            <Link to="/Destination/Moon" class={styles.btn_main}>
              Explore
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default MainPage;
