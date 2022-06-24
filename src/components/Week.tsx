import { FC, useEffect, useState } from "react";
import { Day } from "./Day";
import {IDay,TypeMonthYear} from '../helper/moment';

type Props = {
    week: IDay[]
    MonthYear: TypeMonthYear
}

const Style:object = {
    display:'flex',
    justifyContent:'center',
    width: '100vw',
    height: '75vh',
    background:'#34eb80',
    overflow: 'scroll'
}

const Week:FC<Props> = ({week,MonthYear}) => {

    const [days, setDays]= useState<IDay[]>(week);

    useEffect(()=>{
        setDays(week)
    },[week])

    return (
        <div>
            <h3>{MonthYear.month}</h3>
            <div style={Style}>
                {days?.map((day,index)=>(
                    <Day key={index} Day={day} />
                ))}
            </div>
        </div>
    );
};

export default Week;