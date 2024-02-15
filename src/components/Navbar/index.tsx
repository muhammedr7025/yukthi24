import styles from "./index.module.css";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CgMenuLeft } from "react-icons/cg";
import NavModal from "./components/NavModal";
import { useEffect, useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [profile, setProfile] = useState(false);

	async function getProfile() {
		const session = await supabase.auth.getSession();
		setProfile(session.data.session?.access_token ? true : false);
	}

	useEffect(() => {
		getProfile();
	}, [])

    async function handleClick() {
        const session = await supabase.auth.getSession();
        if (session.data.session?.access_token) {
            navigate("/profile");
        } else {
            let { error } = await supabase.auth.signOut();
            if (error) {
                toast.error("Error signing out:");
            }
            navigate("/signin");
        }
    }

    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.menu}>
                <CgMenuLeft onClick={() => setIsOpen(true)} />
                <NavModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className={styles.navMiddle}>
                {/* <b>AGNIYATHRA &apos;24</b> */}
                <img
                    src="/logo.svg"
                    width={70}
                    alt="Logo"
                    onClick={() => navigate("/")}
                />
            </div>
            <div onClick={handleClick} className={styles.profile}>
                {profile ? (
                    <div className={styles.profilePic} title="Profile">
                        <img src="/ghostboi.webp" alt="Profile Picture" />
                    </div>
                ) : (
                    <button>Sign in</button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
