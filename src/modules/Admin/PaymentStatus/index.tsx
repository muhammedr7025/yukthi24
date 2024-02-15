import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "../../../utils/supabase";
import { useParams } from "react-router";
import Loader from "../../../components/Loader";
import styles from "./index.module.css";
import Navbar from "../../../components/Navbar";
import Header from "../../../components/Header";
import PopoverModal from "./Popover";
import Footer from "../../../components/Footer";

const PaymentStatus = () => {
    const { id } = useParams();
    const [data, setData] = useState<UserEvent[]>([]);
    const [event, setEvent] = useState<Event>();
	const [refresh, setRefresh] = useState(false);

    async function fetchData() {
        let { data: events, error: eventError } = await supabase
            .from("events")
            .select("name")

            // Filters
            .eq("id", id);
        if (events) {
            setEvent(events[0] as unknown as Event);
        }
        if (eventError) {
            toast.error(eventError.message);
            throw eventError;
        }
        let { data: eventData, error } = await supabase
            .from("event_user_link")
            .select(
                "id, user_id, event_id, payment, events(name, date, category), user_view(email, raw_user_meta_data)"
            )
            // Filters
            .eq("event_id", id);
        if (eventData) {
            setData(eventData as unknown as UserEvent[]);
            return eventData;
        } else if (error) {
            toast.error(error.message);
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, [refresh]);

    return (
        <>
            <Navbar />
            <Header title={event?.name as string} />
            <div className={styles.paymentStatusWrapper}>
                {data.length > 0 ? (
                    <div className={styles.tableWrapper}>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>College</th>
                                    <th>Payment</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((event, index) => (
                                    <tr key={event.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            {
                                                event.user_view
                                                    .raw_user_meta_data.name
                                            }
                                        </td>
                                        <td>
                                            {
                                                event.user_view
                                                    .raw_user_meta_data.phone
                                            }
                                        </td>
                                        <td>{event.user_view.email}</td>
                                        <td>
                                            {
                                                event.user_view
                                                    .raw_user_meta_data.college
                                            }
                                        </td>
                                        <td>
                                            {event.payment ? (
                                                <div className={styles.success}>
                                                    success
                                                </div>
                                            ) : (
                                                <div className={styles.pending}>
                                                    pending
                                                </div>
                                            )}
                                        </td>
                                        <td>
                                            <div>
                                                <PopoverModal
                                                    key={event.id}
                                                    userID={event.user_id}
                                                    eventID={event.event_id}
                                                    payment={event.payment}
													setrefresh={setRefresh}
													refresh={refresh}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <Loader />
                )}
            </div>
            <Footer />
        </>
    );
};

export default PaymentStatus;
