import { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import Navbar from "../../../../components/Navbar";
import { supabase } from "../../../../utils/supabase";
import { useParams } from "react-router-dom";
import Loader from "../../../../components/Loader";
import Footer from "../../../../components/Footer";
import styles from "./index.module.css";
import EventDetailsInfo from "./components/EventDetails";
import Button from "../../../../components/Button";
import toast from "react-hot-toast";
import { User } from "@supabase/supabase-js";
import EventRules from "./components/EventRules";

const EventDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState<Event>();

    async function fetchData() {
        let { data: events, error } = await supabase
            .from("events")
            .select("*")
            .eq("url", id);

        if (events) {
            setData(events[0]);
        } else if (error) {
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const register = async (user: User) => {
        let { data: event_user_link, error } = await supabase
            .from("event_user_link")
            .select("*")

            // Filters
            .eq("event_id", data?.id)
            .eq("user_id", user.id);

        if (event_user_link && event_user_link?.length === 0) {
            const { data: eventLink, error } = await supabase
                .from("event_user_link")
                .insert([{ event_id: data?.id, user_id: user.id }])
                .select();
            if (error) {
                throw error.message;
            }
            if (eventLink) {
                return "Registered successfully";
            }
        } else if (event_user_link && event_user_link?.length > 0) {
            throw "Already Registered";
        } else if (error) {
            throw error.message;
        } else {
            throw "Something went wrong";
        }
    };

    const handleRegister = () => {
        const user = JSON.parse(localStorage.getItem("user") as string);
        if (user) {
            toast.promise(register(user.user), {
                loading: "Loading...",
                success: (response) => {
                    return <b>{response}</b>;
                },
                error: (error) => {
                    return <b>{error}</b>;
                },
            });
        } else {
            console.log("Please login to register");
            toast.error("Please login to register");
        }
    };

    return (
        <>
            <Navbar />
            {isSmallScreen ? (
                <Header title={data?.name as string} size={"20vw"} />
            ) : (
                <Header title={data?.name as string} />
            )}

            <div className={styles.eventDetailsWrapper}>
                {data ? (
                    <div>
                        <div className={styles.eventDetailsCard}>
                            {/* Left side of card  */}
                            <div className={styles.imageContainer}>
                                <img src={data.image} alt={data.name} />
                            </div>

                            {/* Right side of card  */}
                            <div className={styles.eventDetails}>
                                <EventDetailsInfo data={data} />
                                <div className={styles.buttonContainer}>
                                    <Button
                                        text="Register"
                                        width={isSmallScreen ? "75vw" : "45vw"}
                                        onClick={handleRegister}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* rules section  */}
                        <div className={styles.rulesWrapper}>
							<EventRules data={data}/>
                        </div>
                    </div>
                ) : (
                    <Loader />
                )}
            </div>
            <Footer />
        </>
    );
};

export default EventDetails;
