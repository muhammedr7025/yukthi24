import styles from "./index.module.css";

type Props = {
    text: string;
	onClick?: () => void;
	width?: string;
	icon?: React.ReactNode;
};

const Button = (props: Props) => {
    return (
        <div className={styles.buttonWrapper}>
            <div style={{ width: props.width || "130px" }}></div>
            <div onClick={props.onClick} style={{ width: props.width || "130px" }}>
                <span>{props.text}{props.icon}</span>
            </div>
        </div>
    );
};

export default Button;
