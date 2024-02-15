import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Navbar from "../../components/Navbar";
import { supabase } from "../../utils/supabase";
import styles from "../Events/index.module.css";

const Admin = () => {
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
            <Header title="Admin" />
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
                                    url={`/payment-status/${event.id}`}
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

export default Admin;
