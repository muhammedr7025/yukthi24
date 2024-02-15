import React, { useState, useEffect } from 'react';
import styles from "../index.module.css"

interface CountdownProps {
    targetDate: Date;
}

const padWithZero = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = targetDate.getTime() - new Date().getTime();

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return {
                days: padWithZero(days),
                hours: padWithZero(hours),
                minutes: padWithZero(minutes),
                seconds: padWithZero(seconds),
            };
        } else {
            return { days: '00', hours: '00', minutes: '00', seconds: '00' };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft);
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className={styles.countdownWrapper}>
            <div className={styles.countdown}>
                <span className={styles.number}>{timeLeft.days}</span>
                <span>Days</span>
            </div>
            <div className={styles.countdown}>
                <span className={styles.number}>{timeLeft.hours}</span>
                <span>Hours</span>
            </div>
            <div className={styles.countdown}>
                <span className={styles.number}>{timeLeft.minutes}</span>
                <span>Minutes</span>
            </div>
            <div className={styles.countdown}>
                <span className={styles.number}>{timeLeft.seconds}</span>
                <span>Seconds</span>
            </div>
			<div className={styles.date}>
				<b>March</b>
				<span>15, 16</span>
			</div>
        </div>
    );
};

export default Countdown;
