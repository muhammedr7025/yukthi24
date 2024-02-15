import styles from "./AboutTitle.module.css";

type Props = {
    title: string;
}

const AboutTitle = (props:Props) => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutBar}>
                <div></div>
            </div>
            <div className={styles.aboutTitle}>{props.title}</div>
            <div className={styles.aboutContact}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default AboutTitle;
