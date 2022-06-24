import './App.css';
import moment from 'moment';
import { useEffect, useState, FC } from 'react';
import { WeekDays, monthWeek } from './helper/moment';
import Week from './components/Week';

type TWeekButtons = {
  NextWeek():void
  PreviousWeek():void
}

function App() {
  const [ActualWeek, setActualWeek] = useState<number>(0);

  const NextWeek = ():void => {
    setActualWeek(ActualWeek+1);
  }
  
  const PreviousWeek = ():void => {
    setActualWeek(ActualWeek-1);
  }

  useEffect(()=>{
    setActualWeek(moment().week())
  },[])

  return (
    <div className="App">
      <header style={{width: '100vw', color: '#fff',background:'#282c34',paddingBottom: '1.5rem'}}>
        <h1>Calendar</h1>
        <WeekButtons NextWeek={NextWeek} PreviousWeek={PreviousWeek} />
      </header>
      <Week week={WeekDays(ActualWeek)} MonthYear={monthWeek(ActualWeek)}/>
    </div>
  );
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