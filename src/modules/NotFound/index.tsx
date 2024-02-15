import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import MarqueeComponenet from "../Home/components/MarqueeComponent";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.notFoundWrapper}>
            <div>404 Page Not Found</div>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
               <span>Home</span>
            </button>
            <div className={styles.marqueeContainerTwo}>
                    <MarqueeComponenet />
            </div>
        </div>
    );
};

export default NotFound;
