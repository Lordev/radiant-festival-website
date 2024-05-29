import React, { useState, useEffect, useCallback } from "react";

interface CountdownTimerProps {
    endDate: Date;
}

const CountdownTimer = ({ endDate }: CountdownTimerProps) => {
    const calculateTimeLeft = useCallback(() => {
        const difference = +new Date(endDate) - +new Date();

        interface timeLeftProps {
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
        }

        let timeLeft: timeLeftProps = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }, [endDate]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents: React.ReactNode[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        const value = timeLeft[interval as keyof typeof timeLeft];
        const formattedValue =
            value !== undefined ? (value < 10 ? `0${value}` : `${value}`) : "00";

        timerComponents.push(
            <div key={interval}>
                <div>
                    <h3 className="text-lg sm:text-2xl lg:text-5xl font-semibold text-center text-white uppercase max-w-[362px]">
                        {formattedValue}
                    </h3>
                    <span>{interval}</span>
                </div>
                <h3 className="items-center flex text-lg sm:text-2xl lg:text-5xl font-semibold last:hidden">
                    :
                </h3>
            </div>
        );
    });

    return (
        <div className="flex gap-2 sm:gap-6 flex-wrap justify-center">
            {timerComponents.length ? timerComponents : <span>Countdown finished!</span>}
        </div>
    );
};

export default CountdownTimer;
