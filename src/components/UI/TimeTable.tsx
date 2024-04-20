import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/UI/accordion";
import { useScreenBreakPoint } from "@/context/useScreenBreakPoints";

interface ScheduleItem {
    startTime: string;
    endTime: string;
    artist: string;
    label: string;
}

interface ScheduleProps {
    day: number;
    scheduleItems: ScheduleItem[];
}

const schedule: ScheduleProps[] = [
    {
        day: 1,
        scheduleItems: [
            {
                startTime: "1:00 PM",
                endTime: "1:45 PM",
                artist: "Mark The Twinley",
                label: "The Basement",
            },
            {
                startTime: "2:00 PM",
                endTime: "2:45 PM",
                artist: "Luna Skyler",
                label: "The Underground",
            },
            {
                startTime: "3:00 PM",
                endTime: "3:45 PM",
                artist: "Kairos Sound",
                label: "Dreamscape",
            },
            {
                startTime: "4:00 PM",
                endTime: "4:45 PM",
                artist: "Echo Pulse",
                label: "The Warehouse",
            },
            {
                startTime: "5:00 PM",
                endTime: "5:45 PM",
                artist: "Neptune Groove",
                label: "The Groove Lounge",
            },
            {
                startTime: "6:00 PM",
                endTime: "6:45 PM",
                artist: "Aurora Boreal",
                label: "The Chill Zone",
            },
            {
                startTime: "7:00 PM",
                endTime: "7:45 PM",
                artist: "Rogue Wave",
                label: "Bass Haven",
            },
            {
                startTime: "8:00 PM",
                endTime: "8:45 PM",
                artist: "Solar Flare",
                label: "The Beat Factory",
            },
            {
                startTime: "9:00 PM",
                endTime: "9:45 PM",
                artist: "Nightshade",
                label: "The Trap Zone",
            },
            {
                startTime: "10:00 PM",
                endTime: "10:45 PM",
                artist: "Mystic Mirage",
                label: "Neon Paradise",
            },
            {
                startTime: "11:00 PM",
                endTime: "11:45 PM",
                artist: "Eclipse Realm",
                label: "The Hard Room",
            },
        ],
    },
    {
        day: 2,
        scheduleItems: [
            {
                startTime: "1:00 PM",
                endTime: "1:45 PM",
                artist: "Zephyr Waves",
                label: "Sunset Serenade",
            },
            {
                startTime: "2:00 PM",
                endTime: "2:45 PM",
                artist: "Celestial Harmony",
                label: "Galactic Groove",
            },
            {
                startTime: "3:00 PM",
                endTime: "3:45 PM",
                artist: "Nebula Symphony",
                label: "Stellar Stage",
            },
            {
                startTime: "4:00 PM",
                endTime: "4:45 PM",
                artist: "Cosmic Fusion",
                label: "Nebula Nexus",
            },
            {
                startTime: "5:00 PM",
                endTime: "5:45 PM",
                artist: "Lunar Reverie",
                label: "Moonlit Lounge",
            },
            {
                startTime: "6:00 PM",
                endTime: "6:45 PM",
                artist: "Starlight Sonata",
                label: "Astral Abyss",
            },
            {
                startTime: "7:00 PM",
                endTime: "7:45 PM",
                artist: "Galactic Beats",
                label: "Cosmos Corner",
            },
            {
                startTime: "8:00 PM",
                endTime: "8:45 PM",
                artist: "Aurora Rhythm",
                label: "Northern Lights",
            },
            {
                startTime: "9:00 PM",
                endTime: "9:45 PM",
                artist: "Supernova Sounds",
                label: "Eclipse Arena",
            },
            {
                startTime: "10:00 PM",
                endTime: "10:45 PM",
                artist: "Celestial Pulse",
                label: "Starlit Sanctuary",
            },
            {
                startTime: "11:00 PM",
                endTime: "11:45 PM",
                artist: "Galaxy Groove",
                label: "Nova Nexus",
            },
        ],
    },
    {
        day: 3,
        scheduleItems: [
            {
                startTime: "1:00 PM",
                endTime: "1:45 PM",
                artist: "Mystic Melodies",
                label: "Enchanted Forest",
            },
            {
                startTime: "2:00 PM",
                endTime: "2:45 PM",
                artist: "Echoes of Eternity",
                label: "Whispering Waters",
            },
            {
                startTime: "3:00 PM",
                endTime: "3:45 PM",
                artist: "Serenity Serenade",
                label: "Tranquil Terrace",
            },
            {
                startTime: "4:00 PM",
                endTime: "4:45 PM",
                artist: "Zen Zephyr",
                label: "Peaceful Pavilion",
            },
            {
                startTime: "5:00 PM",
                endTime: "5:45 PM",
                artist: "Harmony Haven",
                label: "Calm Cove",
            },
            {
                startTime: "6:00 PM",
                endTime: "6:45 PM",
                artist: "Ethereal Echo",
                label: "Tranquility Terrace",
            },
            {
                startTime: "7:00 PM",
                endTime: "7:45 PM",
                artist: "Moonlit Melodies",
                label: "Lunar Lounge",
            },
            {
                startTime: "8:00 PM",
                endTime: "8:45 PM",
                artist: "Twilight Tune",
                label: "Dusk Delight",
            },
            {
                startTime: "9:00 PM",
                endTime: "9:45 PM",
                artist: "Starlit Sonata",
                label: "Starry Stage",
            },
            {
                startTime: "10:00 PM",
                endTime: "10:45 PM",
                artist: "Mystic Mirage",
                label: "Magic Meadow",
            },
            {
                startTime: "11:00 PM",
                endTime: "11:45 PM",
                artist: "Celestial Serenade",
                label: "Starlit Symphony",
            },
        ],
    },
];

export default function TimeTable() {
    const { mobile } = useScreenBreakPoint();

    const [day, setDay] = useState(1);

    return (
        <div>
            {!mobile ? (
                <>
                    <div className="grid grid-cols-3 border-b-2 border-primary pb-4">
                        <div
                            onClick={() => setDay(1)}
                            className={`cursor-pointer   ${day === 1 ? "text-secondary-foreground" : "text-primary-foreground"}`}
                        >
                            {`DAY ${schedule[0].day}`}
                            <br />
                            may 01.2024
                        </div>
                        <div
                            onClick={() => setDay(2)}
                            className={`cursor-pointer   ${day === 2 ? "text-secondary-foreground" : "text-primary-foreground"}`}
                        >
                            {`DAY ${schedule[1].day}`}
                            <br />
                            may 02.2024
                        </div>
                        <div
                            onClick={() => setDay(3)}
                            className={`cursor-pointer ${day === 3 ? "text-secondary-foreground" : "text-primary-foreground"}`}
                        >
                            {`DAY ${schedule[2].day}`} <br />
                            may 03.2024
                        </div>
                    </div>

                    <table className="text-secondary-foreground border-separate border-spacing-y-8 w-full table-fixed">
                        <thead className="border-b-[1px] border-secondary-foreground">
                            <tr>
                                <th>
                                    <h3>Time</h3>
                                </th>
                                <th>
                                    <h3>Artist</h3>
                                </th>
                                <th>
                                    <h3>Label</h3>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {schedule
                                .filter((item) => item.day === day)
                                .map((item) =>
                                    item.scheduleItems.map((item) => (
                                        <tr key={item.artist}>
                                            <td className="text-nowrap">
                                                <h6>
                                                    {item.startTime} - {item.endTime}
                                                </h6>
                                            </td>
                                            <td className="text-nowrap font-[roboto-serif] font-medium text-xl  uppercase">
                                                <div>{item.artist}</div>
                                            </td>
                                            <td className="text-nowrap font-[roboto-serif] font-medium text-xl  uppercase">
                                                <div>{item.label}</div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                        </tbody>
                    </table>
                </>
            ) : (
                <Accordion type="single" collapsible defaultValue={`day-${day}`}>
                    {schedule.map((item) => (
                        <AccordionItem key={`day-${item.day}`} value={`day-${item.day}`}>
                            <AccordionTrigger
                                onClick={() => setDay(item.day)}
                                className={`text-2xl ${day === item.day ? "text-secondary-foreground" : "text-primary-foreground"}`}
                            >{`DAY ${item.day}`}</AccordionTrigger>
                            {item.scheduleItems.map((scheduleItem) => (
                                <AccordionContent
                                    key={scheduleItem.artist}
                                    className="text-secondary-foreground"
                                >
                                    <div key={scheduleItem.artist}>
                                        <div className="text-nowrap ">
                                            <h6 className="text-normal">
                                                {scheduleItem.startTime} -{" "}
                                                {scheduleItem.endTime}
                                            </h6>
                                        </div>
                                        <div className="text-nowrap font-[roboto-serif] font-medium text-lg uppercase">
                                            <div>{scheduleItem.artist}</div>
                                        </div>
                                        <div className="text-nowrap font-[roboto-serif] font-medium text-lg uppercase">
                                            <div>{scheduleItem.label}</div>
                                        </div>
                                    </div>
                                </AccordionContent>
                            ))}
                        </AccordionItem>
                    ))}
                </Accordion>
            )}
        </div>
    );
}
