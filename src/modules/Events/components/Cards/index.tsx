import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

const Cards = (props: Event) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/events/${props.id}`);
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src={props.image} alt="no image avilable" />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <span>{props.name}</span>
                    <span>{props.category}</span>
                </div>
                <div className={styles.iconContainer}>
                    <button onClick={handleClick}>
                        <span>VIEW</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
