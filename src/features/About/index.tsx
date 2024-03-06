import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './about.module.scss';

const About: FC = () => {
  return (
    <div className={styles.about}>
      <div>
        <div>WELCOME TO HOME PAGE</div>
        <div>
          Click
          <Link to={'/'}> HERE </Link>
          to go to HOME PAGE
        </div>
      </div>
    </div>
  );
};

export default About;
