interface ScheduleProps {
    startTime: string;
    endTime: string;
    artist: string;
    label: string;
}

const schedule: ScheduleProps[] = [
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
    {
        startTime: "12:00 AM",
        endTime: "12:45 AM",
        artist: "Stardust Dreamer",
        label: "The Cosmos Stage",
    },
    {
        startTime: "1:00 AM",
        endTime: "1:45 AM",
        artist: "Vortex Pulse",
        label: "The Techno Arena",
    },
    {
        startTime: "2:00 AM",
        endTime: "2:45 AM",
        artist: "Celestial Storm",
        label: "The Mainstage",
    },
    {
        startTime: "3:00 AM",
        endTime: "3:45 AM",
        artist: "Astral Drift",
        label: "The Afterparty",
    },
];

export default function TimeTable() {
    return (
        <table className="text-secondary-foreground border-separate border-spacing-y-12">
            <thead>
                <tr className="border">
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
                {schedule.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <h6>
                                {item.startTime} - {item.endTime}
                            </h6>
                        </td>
                        <td>
                            <h4>{item.artist}</h4>
                        </td>
                        <td>
                            <h4>{item.label}</h4>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
