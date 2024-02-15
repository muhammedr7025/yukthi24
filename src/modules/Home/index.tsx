import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import Marquee from "./components/Marquee";
import { HeroBgLeft, HeroBgRight } from "../../utils/svgComponents";
import Countdown from "./components/Countdown";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeEvents from "./components/HomeEvents";
import AboutTitle from "./components/AboutTitle/AboutTitle";
import Sponsers from "./components/Sponsers/Sponsers";

const Home = () => {
    const date = new Date("2024-03-15T12:00:00");

    return (
        <div className={styles.HomeWrapper}>
            <Navbar />
            <div className={styles.HeroWrapper}>
                <div className={styles.heroBgElements}>
                    <HeroBgLeft className={styles.heroBgLeft} />
                    <HeroBgRight className={styles.heroBgRight} />
                </div>
                <div className={styles.heroText}>
                    <span>YUKTHI</span>
                </div>
                <div>
                    <Countdown targetDate={date} />
                </div>
                <div className={styles.marqueeContainer}>
                    <Marquee />
                </div>
            </div>
            <div className={styles.eventsWrapper}>
                <Header title="Events" />
                <HomeEvents />
            </div>
            <div className={styles.sponsersContainer}>
                <AboutTitle title="SPONSERS" />
                <Sponsers />
            </div>
            {/* <div>
                <AboutTitle title="About" />
                <div className={styles.aboutWrapper}>
                    <div>
                        <span>hey !</span>
                        <span>
                            Welcome to the technological extravaganza at Sree
                            Narayana Guru Institute of Science And Technology!
                            Our annual Techfest is a celebration of innovation,
                            creativity, and a passion for technology.
                        </span>
                        <span>
                            Our mission is to inspire, educate, and connect
                            individuals who are driven by a curiosity to explore
                            the limitless realms of technology. From captivating
                            keynote speakers to hands-on workshops, the event is
                            crafted to cater to diverse interests within the
                            vast landscape of science and technology.
                        </span>
                    </div>
                    <div className={styles.aboutSeprator}></div>
                    <div >
                     At SNIST Techfest, we bring together bright minds, tech enthusiasts, and industry experts to create a platform where ideas flourish and possibilities unfold. With a rich history of fostering talent and igniting curiosity, our Techfest has become a melting pot of cutting-edge advancements and revolutionary breakthroughs.
                    </div>
                </div>
                <div className={styles.marqueeContainerTwo}>
                    <MarqueeComponenet />
                </div>
            </div> */}
            <Footer />
        </div>
    );
};

export default Home;
