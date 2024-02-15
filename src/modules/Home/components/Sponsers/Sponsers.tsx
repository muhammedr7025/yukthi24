import LogoCard from "../LogoCard"
import styles from "./Sponsers.module.css"

const Sponsers = () => {
  return (
    <div className={styles.sponsersWrapper}>
      <div className={styles.sponsersCard}>
        <LogoCard
          image="https://i.ibb.co/jh0vtXs/98015594-removebg-preview.png"
          company="Mu-Learn"
        />
        <LogoCard
          image="https://learn.mulearn.org/assets/footer/twitter.webp"
          company="Twitter"
        />
        <LogoCard
          image="https://1000logos.net/wp-content/uploads/2016/11/Google-Symbol.png"
          company="Google"
        />
      </div>
    </div>
  );
}

export default Sponsers