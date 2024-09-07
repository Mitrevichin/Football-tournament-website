import GroupResult from '../components/GroupResult';
import Navigation from '../components/Navigation';
import styles from './Homepage.module.css';

function Homepage() {
  return (
    <main className={styles.home}>
      <Navigation />
      <GroupResult />
    </main>
  );
}

export default Homepage;
