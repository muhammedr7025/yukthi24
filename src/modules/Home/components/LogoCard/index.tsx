import styles from './index.module.css'
type Props = {
    image : string;
    company: string;
}

const LogoCard = (props: Props) => {
  return (
    <div className={styles.logoWrapper}>
        <img src={props.image} alt="no image available" />
        <span>{props.company}</span>
    </div>
  )
}

export default LogoCard