import { FC, useEffect, useState } from "react";
import { IDay } from "../helper/moment";
import './days.css';

type Props = {
  Day: IDay;
};

export const Day: FC<Props> = ({ Day }) => {

  const {day,date,selected,today,changeStatus} = Day;

  useEffect(() => {
    console.log(Day)
  }, [Day])
  

  return (
    <>
      <div 
        onClick={()=>changeStatus()}
        className={`dayContainer ${today&&`today`} ${selected&&`selected`}`}
      >
        <p>{day}</p>
        <hr/>
        <p>{date.day}</p>
      </div>
    </>
  );
};
