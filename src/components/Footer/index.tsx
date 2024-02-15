import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
// import ScrambleText from "../ScrambleText";
import ScrambleText from "../ScrambleText";
import styles from "./index.module.css";

const Footer = () => {
	// const navigate = useNavigate();
    return (
        <div className={styles.footerWrapper}>
            {/* <div className={styles.logoContainer}>
                <img src="/logo.svg" alt="logo" onClick={() => navigate("/")} />
            </div>
            <div className={styles.footerContent}>
                <div className={styles.footerLinks}>
                    <b>EVENTS</b>
                    <a href="">
                        <ScrambleText text="Workshops" />
                    </a>
                    <a href="">
                        <ScrambleText text="Hackathons" />
                    </a>
                    <a href="">
                        <ScrambleText text="Games" />
                    </a>
                    <a href="">
                        <ScrambleText text="Competitions" />
                    </a>
                </div>
                <div className={styles.footerLinks}>
                    <b>ABOUT US</b>
                    <a href="">
                        <ScrambleText text="Team" />
                    </a>
                    <a href="">
                        <ScrambleText text="Teachers" />
                    </a>
                    <a href="">
                        <ScrambleText text="College" />
                    </a>
                    <a href="">
                        <ScrambleText text="Web devs" />
                    </a>
                </div>
                <div className={styles.footerLinks}>
                    <b>SOCIAL</b>
                    <div>
                        <a href="">
                            <BsLinkedin />
                        </a>
                        <a href="">
                            <BsInstagram />
                        </a>
                        <a href="">
                            <BsWhatsapp />
                        </a>
                    </div>
                </div>
            </div> */}
            <div className={styles.footerLink}>
                <div className={styles.linkText}>
                    <span>Get in Touch</span>
                    <span><ScrambleText text="@YUKTHI.ac.in"/></span>
                </div>
            </div>
            <div className={styles.footerContent}>
                <div className={styles.footerLinks}>
                    <b>ABOUT US</b>
                    <a href="">
                        <ScrambleText text="Team" />
                    </a>
                    <a href="">
                        <ScrambleText text="Teachers" />
                    </a>
                    <a href="">
                        <ScrambleText text="College" />
                    </a>
                    <a href="">
                        <ScrambleText text="Web devs" />
                    </a>
                </div>
            </div>
            <div className={styles.footerSocial}>
                <div className={styles.footerName}><ScrambleText text="#YUKTHI2024"/></div>
                <div className={styles.footerLinks}>
                        <a href="">
                            <BsLinkedin />
                        </a>
                        <a href="">
                            <BsInstagram />
                        </a>
                        <a href="">
                            <BsWhatsapp />
                        </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
