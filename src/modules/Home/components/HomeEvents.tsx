import { useState, useEffect } from "react";
import Button from "../../../components/Button";
// import Card from "../../../components/Card";
import { ArrowBig } from "../../../utils/svgComponents";
import styles from "../index.module.css";
import { Link } from "react-router-dom";

const HomeEvents = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={styles.eventsContainer}>
            <div className={styles.eventCardContainer}>
                {/* <div className={styles.eventCard}>
                    <Card
                        name={"Hackathon"}
                        link={
                            "https://i.pinimg.com/originals/4e/89/55/4e8955c4305e7e633a587729b6bbb66c.jpg"
                        }
                        url={"/hackathon"}
                    />
                </div>
                <div className={styles.eventCard}>
                    <Card
                        name={"Hackathon"}
                        link={
                            "https://i.pinimg.com/originals/4e/89/55/4e8955c4305e7e633a587729b6bbb66c.jpg"
                        }
                        url={"/hackathon"}
                    />
                </div>
                <div className={styles.eventCard}>
                    <Card
                        name={"Hackathon"}
                        link={
                            "https://i.pinimg.com/originals/4e/89/55/4e8955c4305e7e633a587729b6bbb66c.jpg"
                        }
                        url={"/hackathon"}
                    />
                </div> */}
            </div>
            <div className={styles.moreEvents}>
                <Link to="/events">
                    <Button
                        text="EXPLORE EVENTS"
                        width={isSmallScreen ? "85vw" : "40vw"}
                        icon={<ArrowBig />}
                    />
                </Link>
            </div>
        </div>
    );
};

export default HomeEvents;
