import { FC, useContext, useEffect, useState } from "react";
import { Day } from "../day/Day";
import {CalendarContextType, IDay} from '../../types';
import { CalendarContext } from "../../context/CalendarContext";
import "./week.css";

const Week:FC = () => {

    const { WeekDays} = useContext(CalendarContext) as CalendarContextType;
    const [days, setDays] = useState<IDay[]>(WeekDays);

    useEffect(()=>{
        setDays(WeekDays)
    },[WeekDays])

    return (
            <div className="week_container">
                {days.map((day,index)=>(
                    <Day key={index} Day={day} />
                ))}
            </div>
    );
};

export default Week;