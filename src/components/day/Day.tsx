import { FC, useContext, useEffect, useState } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import { CalendarContextType, IDay } from "../../types";
import './days.css';

type Props = {
  Day: IDay;
};

export const Day: FC<Props> = ({ Day }) => {

  const {OnClickSelect,OnClickRemove} = useContext(CalendarContext) as CalendarContextType;
  const {day,date,selected} = Day;

  const [state, setState] = useState<IDay>(Day);

  const ToggleDay = (dia:IDay) => {
    dia.toggleSelected();
    setState({...state, selected: !selected})
    if(dia.selected){
      OnClickSelect(dia)
    } else {
      OnClickRemove(dia)
    }
  }

  useEffect(()=>{
    setState(Day)
  },[Day,Day.selected])

  return (
    <>
      <div 
        onClick={()=>ToggleDay(Day)}
        className={`dayContainer ${state.today&&`today`} ${selected&&`selected`}`}
      >
        <p className="dayContainer__day">{day}</p>
        <hr/>
        <p className="dayContainer__date">{date.day}</p>
      </div>
    </>
  );
};
