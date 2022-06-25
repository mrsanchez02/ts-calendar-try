import { WeekButtons } from '../weekbuttons/WeekButtons';
import './calendarheader.css';
import {CalendarContextType } from '../../types';
import { CalendarContext } from "../../context/CalendarContext";
import { useContext } from 'react';

export const CalendarHeader = () => {

  const { MonthYear} = useContext(CalendarContext) as CalendarContextType;

    return (
      <header className='header'>
        <div className="header-title">
          <h1>Calendar</h1>
        </div>
        <div className="header-week-selector">
          <h3>{MonthYear.month} - {MonthYear.year}</h3>
          <WeekButtons />
        </div>
      </header>
    )
}