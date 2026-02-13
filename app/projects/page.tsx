import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import rectangle from "../../public/Rectangle.png";

export default function Projects() {
    return (
        <div>
            <h1> Projects </h1>
            <h4> Here you can find some of my projects. </h4>
            <br/>

            <div className="project_container">

                <div className="project">
                    <div>
                        <h4>Tea Cozy</h4>
                        <p>Recreating a template from an image, in React</p>
                    </div>
                    <img src={rectangle.src} alt="Rectangle"/>
                </div>

                <div className="project">
                    <div>
                        <h4>Library Website</h4>
                        <p>A custom made website that could be used for a library to keep track of books</p>
                    </div>
                    <img src={rectangle.src} alt="Rectangle"/>
                </div>

                <div className="project">
                    <div>
                        <h4>OurBlooms</h4>
                        <p>A flower selling website. more detailed options and better functionality </p>
                    </div>
                    <img src={rectangle.src} alt="Rectangle"/>
                </div>

                <div className="project">
                    <div>
                        <h4>CTE Webpage</h4>
                        <p>A new page for the NPS website that tries to keep the style of the website</p>
                    </div>
                    <img src={rectangle.src} alt="Rectangle"/>
                </div>

            </div>
        </div>
    );
}