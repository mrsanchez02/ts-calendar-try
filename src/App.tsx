import './App.css';
import Week from './components/week/Week';
import { CalendarContextProvider } from './context/CalendarContext';
import { CalendarHeader } from './components/layout/header/CalendarHeader';

function App() {
  return (
    <CalendarContextProvider>
    <div className="App">
        <CalendarHeader />
      <Week />
    </div>
    </CalendarContextProvider>
  );
}

export default App;