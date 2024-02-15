import styles from "./index.module.css";

const MarqueeComponenet = () => {
    return (
        <div className={styles.marquee}>
            <div className={styles.marqueeGroup}>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
            </div>
            <div className={styles.marqueeGroup} aria-hidden="true">
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
                <span>Caution&nbsp;&nbsp;//</span>
            </div>
        </div>
    );
};

export default MarqueeComponenet;
