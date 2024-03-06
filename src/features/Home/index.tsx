import { FC } from "react";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <div>
        <div>WELCOME TO HOME PAGE</div>
        <div>
          Click
          <Link to={"/about"}> HERE </Link>
          to go to ABOUT PAGE
        </div>
      </div>
    </div>
  );
};

export default Home;
