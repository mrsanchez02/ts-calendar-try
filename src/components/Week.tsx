import React, { FC, useEffect, useState } from "react";
import { Day } from "./Day";
import {IToday} from '../helper/moment';

type Props = {
    week: IToday[]
}

const Week:FC<Props> = ({week}) => {

    const [days, setDays]= useState<IToday[]>(week);

    useEffect(()=>{
        console.log(days);
        days.map(day=>{
            console.log(day?.date)
        })
    },[])
    

    return (
        <>
        <h1>Week</h1>
        </>
    );
};

export default Week;