import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import Tilt from "react-parallax-tilt";

type Props = {
    name: string;
    link: string;
    url: string;
};

const Card = (props: Props) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => {
                navigate(props.url);
            }}
        >
            <Tilt
                className={styles.cardWrapper}
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
            >
                <div>
                    <span>{props.name}</span>
                </div>
                <div className={styles.cardBg}>
                    <div className={styles.imageContainer}>
                        <img src={props.link} alt={props.name} />
                    </div>
                </div>
            </Tilt>
        </div>
    );
};

export default Card;
