import * as Popover from "@radix-ui/react-popover";
import { FaRegEdit } from "react-icons/fa";
import styles from "./index.module.css";
import {
    MdRemoveCircle,
    MdRemoveShoppingCart,
    MdVerified,
} from "react-icons/md";
import { supabase } from "../../../../utils/supabase";
import toast from "react-hot-toast";

type Props = {
    userID: string;
    eventID: string;
    payment: boolean;
    setrefresh: React.Dispatch<React.SetStateAction<boolean>>;
    refresh: boolean;
};

const PopoverModal = (props: Props) => {
    async function handleVerifyPayment() {
        const { data, error } = await supabase
            .from("event_user_link")
            .update({ payment: !props.payment })
            .eq("user_id", props.userID)
            .eq("event_id", props.eventID);
        if (error) {
            throw error.message;
        }
        if (data) {
            return data;
        }
    }

    const handleVerify = () => {
        toast.promise(handleVerifyPayment(), {
            loading: "Saving...",
            success: () => {
                props.setrefresh(!props.refresh);
                return <b>Data saved!</b>;
            },
            error: (error) => {
                return <b>{error}</b>;
            },
        });
    };

    return (
        <div>
            <Popover.Root>
                <Popover.Trigger className={styles.trigger}>
                    <FaRegEdit />
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content
                        className={styles.popoverContent}
                        sideOffset={-65}
                    >
                        <div>
                            {!props.payment ? (
                                <Popover.Close className={styles.close}>
                                    <span onClick={handleVerify}>
                                        <MdVerified />
                                        &nbsp;Verify Payment
                                    </span>
                                </Popover.Close>
                            ) : (
                                <Popover.Close className={styles.close}>
                                    <span onClick={handleVerify}>
                                        <MdRemoveShoppingCart />
                                        &nbsp;Remove Payment
                                    </span>
                                </Popover.Close>
                            )}
                            <hr />
                            <Popover.Close className={styles.close}>
                                <span
                                    onClick={() => {
                                        toast.success("Coming Soon...");
                                    }}
                                >
                                    <MdRemoveCircle /> &nbsp;Remove User
                                </span>
                            </Popover.Close>
                        </div>
                        <Popover.Arrow />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
};

export default PopoverModal;
