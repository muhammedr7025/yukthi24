import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import styles from "./index.module.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

const Events = () => {
    const [data, setData] = useState<Event[]>([]);
	const [filter, setFilter] = useState<
        "all" | "hackathon" | "workshop" | "competition"
    >("all");

    async function fetchData() {
        let { data: events, error } = await supabase.from("events").select("*");

        if (events) {
            setData(events);
        } else if (error) {
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <Header title="Events" />
            <div className={styles.eventsWrapper}>
                <div className={styles.filters}>
                    <Button text="ALL" onClick={() => setFilter("all")} />
                    <Button
                        text="HACKATHON"
                        onClick={() => setFilter("hackathon")}
                    />
                    <Button
                        text="WORKSHOP"
                        onClick={() => setFilter("workshop")}
                    />
                    <Button
                        text="COMPETITION"
                        onClick={() => setFilter("competition")}
                    />
                </div>
                <div className={styles.eventContainer}>
                    {data.length > 0 ? (
                        data.map((event) =>
                            filter === "all" ? (
                                <Card
                                    key={event.id}
                                    name={event.name}
                                    link={event.image}
                                    url={`/events/${event.url}`}
                                />
                            ) : filter === event.category ? (
                                <Card
                                    key={event.id}
                                    name={event.name}
                                    link={event.image}
                                    url={event.url}
                                />
                            ) : null
                        )
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Events;
