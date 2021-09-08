import React, {useState, useEffect} from "react";
import Count from "./Count";

const Countdown = () => {
    
    const [endDate] = useState(Date.now() + (14 * 24 * 60 * 60 * 1000));

    const calcTimeLeft = () => {
        const now = Date.now();
        const left = endDate - now;

        return (left <= 0 ? {days: "00", hours: "00", minutes: "00", seconds: "00"} :
            {days: String(Math.floor(left / (1000 * 60 * 60 * 24))).padStart(2, "0"),
            hours: String(Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0"),
            minutes: String(Math.floor((left % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
            seconds: String(Math.floor((left % (1000 * 60)) / 1000)).padStart(2, "0")
        }
        )  
    }

    const [days, setDays] = useState(calcTimeLeft().days);
    const [hours, setHours] = useState(calcTimeLeft().hours);
    const [minutes, setMinutes] = useState(calcTimeLeft().minutes);
    const [seconds, setSeconds] = useState(calcTimeLeft().seconds);

    const setTimeLeft = (left) => {
        setDays(left.days);
        setHours(left.hours);
        setMinutes(left.minutes);
        setSeconds(left.seconds);
    }

    useEffect(() => {
        const c = setTimeout(() => {
            setTimeLeft(calcTimeLeft());
        }, 1000);
        
        return () => clearTimeout(c);
    });

    return (
        <div className="container">
            <div className="countdown">
                <Count unit="days" num={days}/>
                <Count unit="hours" num={hours}/>
                <Count unit="minutes" num={minutes}/>
                <Count unit="seconds" num={seconds}/>
            </div>
        </div>
    );
}

export default Countdown;