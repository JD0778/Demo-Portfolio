import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="home-container">
      <h1> My Portfolio </h1>
      <br/>
      <h4> Welcome to my portfolio! Here you can find some of my projects and contact information. </h4>
      <br/>
      <br/>
      <br/>

      <div className="home-desc">
        <div className="card">
          <h2>About Me</h2>
          <p>
            Hi! I'm a 17-year-old high school student at Technology High School in Newark, NJ. 
            I enjoy learning about programming and exploring new technologies.           When I'm not coding, you can find me playing video games and having fun with friends.
          </p>
        </div>
        <div className="card">
          <h2>My Skills</h2>
          <p>
            My skills include HTML, CSS, JavaScript, React, and Next.js. I have experience with both front-end and back-end development, and I'm always eager to learn more and improve my skills.
          </p>
        </div>
      </div>
    </div>
  );
}
