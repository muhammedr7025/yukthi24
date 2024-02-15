import { FaHome } from "react-icons/fa";
import { MdContacts, MdEmojiEvents, MdPayment } from "react-icons/md";
import { Roles } from "../../../services/Roles";

export const NavItems = [
    {
        text: "Home",
        link: "/",
        icon: FaHome,
        index: 1,
    },
    {
        text: "Events",
        link: "/events",
        icon: MdEmojiEvents,
        index: 2,
    },
    {
        text: "Contacts",
        link: "/contacts",
        icon: MdContacts,
        index: 3,
    },
    {
        text: "Payment-Status",
        link: "/payment-status",
        icon: MdPayment,
        index: 4,
		roles: [Roles.ADMIN],
    },
];