import { IoMdCloseCircleOutline } from "react-icons/io";
import styles from "../index.module.css";
import NavCards from "./NavCards";
import { NavItems } from "../services/NavItems";
import { RoleCheckerFunction } from "../../../services/RoleChecker";

type Props = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavModal = (props: Props) => {
    return (
        props.isOpen && (
            <div
                className={styles.navModalWrapper}
                onClick={() => props.setIsOpen(false)}
            >
                <div className={styles.navModalContents}>
                    <button
                        className={styles.closeButton}
                        onClick={() => props.setIsOpen(false)}
                    >
                        <IoMdCloseCircleOutline />
                    </button>
                    <div className={styles.navItems}>
                        {NavItems.map((item) =>
                            item.roles ? (
                                <RoleCheckerFunction roles={item.roles}>
									<NavCards
										key={item.index}
										text={item.text}
										link={item.link}
										icon={item.icon}
										index={item.index}
										onclick={() => props.setIsOpen(false)}
									/>
								</RoleCheckerFunction>
                            ) : (
                                <NavCards
                                    key={item.index}
                                    text={item.text}
                                    link={item.link}
                                    icon={item.icon}
                                    index={item.index}
                                    onclick={() => props.setIsOpen(false)}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    );
};

export default NavModal;
