import './App.css';
import moment from 'moment';
import { useEffect, useState, FC } from 'react';
import { todayIs, WeekDays } from './helper/moment';
import Week from './components/Week';

function App() {
  const [todayDate, setTodayDate] = useState<any>("");
  const [ActualWeek, setActualWeek] = useState<number>(0);
  const [week, setWeek]= useState<any>([]);

  const NextWeek = ():void => {
    setActualWeek(ActualWeek+1);
  }
  
  const PreviousWeek = ():void => {
    setActualWeek(ActualWeek-1);
  }

  const BringWeek = (week:number) => {
    let dateOnWeek = moment().week(week).weekday();
    console.log(dateOnWeek);
  }

  useEffect(()=>{
    setWeek(WeekDays());
    setActualWeek(moment().week())
    return BringWeek(ActualWeek);
  },[])



  return (
    <div className="App">
      <h1>Works!</h1>
      <Fecha todayDate={todayDate} week={ActualWeek} />
      <WeekButtons NextWeek={NextWeek} PreviousWeek={PreviousWeek} />

      <Week week={WeekDays()}/>
    </div>
  );
}

type TFecha = {
  todayDate: any
  week: number
}

const Fecha:FC<TFecha> = ({todayDate ,week}) => {
  
  return (
    <div>
      <h2>Here's the date!</h2>
      {todayDate}
      <p>is the week number: {week}</p>
    </div>
  )
}

type TWeekButtons = {
  NextWeek():void
  PreviousWeek():void
}

const WeekButtons:FC<TWeekButtons> = ({PreviousWeek, NextWeek}) => {

  return (
    <>
      <button onClick={PreviousWeek}>Previous</button>
      <button onClick={NextWeek}>Next</button>
    </>
  )
}

export default App;