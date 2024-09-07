import GroupStageBox from '../components/GroupStageBox';
import Navigation from '../components/Navigation';
import styles from './Homepage.module.css';

function Homepage() {
  return (
    <main className={styles.home}>
      <Navigation />
      <GroupStageBox />
      <GroupStageBox />
      <GroupStageBox />
      <GroupStageBox />
      <GroupStageBox />
      <GroupStageBox />
    </main>
  );
}

export default Homepage;
