import { Schedule } from "./Schedule";

export interface TimeTable {
    day: number;
    scheduleItems: Schedule[];
}
