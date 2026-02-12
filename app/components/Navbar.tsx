import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className={styles.navbar}>
    <p>Jaden De Almeida</p>
      <ul className={styles.list}>
        <li>Home</li>
        <li>About Me</li>
        <Link href="/projects"><li>Projects</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;