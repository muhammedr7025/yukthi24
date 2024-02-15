import styles from "../index.module.css";

type Props = {
    data: Event;
};

const EventRules = ({ data }: Props) => {
    return (
        <div>
            <span className={styles.title}>Rules :</span>
            {data.rules.map((rule) => (
                <ul>
                    <li className={styles.normal} key={rule}>
                        {rule}
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default EventRules;
