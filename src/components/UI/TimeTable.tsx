"use client";
import { useState, useEffect } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import useBreakpointsStore from "@/lib/store/useBreakpointStore";
import { timeTableData } from "@/lib/data/timeTableData";

export default function TimeTable() {
    const { smallMobile, mobile, tablet, initializeBreakpoints } = useBreakpointsStore();

    useEffect(() => {
        const cleanup = initializeBreakpoints();
        return () => {
            cleanup();
        };
    }, [initializeBreakpoints]);

    const [day, setDay] = useState(1);

    return (
        <div>
            {!smallMobile && !mobile && !tablet ? (
                <>
                    <div className="grid grid-cols-3 border-b-2 border-primary pb-4 ">
                        {timeTableData.map((item) => (
                            <div
                                key={item.day}
                                onClick={() => setDay(item.day)}
                                className={`cursor-pointer font-krona-one ${day === item.day ? "text-secondary-foreground" : "text-primary-foreground"}`}
                            >
                                {`DAY ${item.day}`}
                                <br />
                                <div className="font-kumbh-sans tracking-widest">
                                    July 0{item.day}.2024
                                </div>
                            </div>
                        ))}
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
                            {timeTableData
                                .filter((item) => item.day === day)
                                .map((item) =>
                                    item.scheduleItems.map((item) => (
                                        <tr key={item.artist}>
                                            <td className="text-nowrap">
                                                <h6>
                                                    {item.startTime} - {item.endTime}
                                                </h6>
                                            </td>
                                            <td className="text-nowrap font-[roboto-serif] font-medium  text-lg 3xl:text-xl  uppercase">
                                                <div>{item.artist}</div>
                                            </td>
                                            <td className="text-nowrap font-[roboto-serif] font-medium text-lg 3xl:text-xl  uppercase">
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
                    {timeTableData.map((item) => (
                        <AccordionItem key={`day-${item.day}`} value={`day-${item.day}`}>
                            <AccordionTrigger
                                onClick={() => setDay(item.day)}
                                className={`text-xl sm:text-2xl font-kumbh-sans ${day === item.day ? "text-secondary-foreground" : "text-primary-foreground"}`}
                            >{`DAY ${item.day}`}</AccordionTrigger>
                            {item.scheduleItems.map((scheduleItem) => (
                                <AccordionContent
                                    key={scheduleItem.artist}
                                    className="text-secondary-foreground"
                                >
                                    <div key={scheduleItem.artist}>
                                        <div className="text-nowrap text-sm sm:text-normal font-thin font-roboto-serif">
                                            {scheduleItem.startTime} -{" "}
                                            {scheduleItem.endTime}
                                        </div>
                                        <div className="text-nowrap font-[roboto-serif] font-medium text-normal sm:text-lg uppercase">
                                            <div>{scheduleItem.artist}</div>
                                        </div>
                                        <div className="text-nowrap font-[roboto-serif] font-medium text-normal sm:text-lg uppercase">
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
