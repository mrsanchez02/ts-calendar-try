import { FC, useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import { CalendarContextType } from "../../types";
import './weekbuttons.css';

export const WeekButtons:FC = () => {
    const {PreviousWeek, NextWeek} = useContext(CalendarContext) as CalendarContextType;
    return (
      <div className="btnGroup">
        <button className="btn" onClick={()=>PreviousWeek()}>Previous</button>
        <button className="btn" onClick={()=>NextWeek()}>Next</button>
      </div>
    )
  }