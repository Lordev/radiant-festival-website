import { NextResponse } from "next/server";

export async function GET() {
    try {
        const currentTime = new Date();
        const endDate = new Date(process.env.END_DATE_EVENT!);
        if (!currentTime || !endDate) {
            return NextResponse.json({ error: "unable to fetch time" }, { status: 400 });
        }

        const difference = endDate.getTime() - currentTime.getTime();
        if (difference < 0) {
            return NextResponse.json({ error: "event has ended" }, { status: 400 });
        }

        const timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };

        const timeLeftString = `${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`;

        const timeLeftStringFormatted = `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;

        const timeLeftStringFormattedShort = `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`;

        return NextResponse.json({ currentTime, endDate, difference });
    } catch (error) {
        console.error("Error fetching time:", error);
    }
}
