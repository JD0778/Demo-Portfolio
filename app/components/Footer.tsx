import styles from '../styles/Footer.module.css';


function Footer() {
  return (
    <footer className={styles.footer}>
        <a href="https://chatgpt.com">Help</a>
        <p style={{color:'white'}}>Socials: Instagram X FaceBook</p>
    </footer>
  );
}

export default Footer;