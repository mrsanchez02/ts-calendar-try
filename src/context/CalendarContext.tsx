import React, { createContext, useState } from "react";
import { CurrentWeek, GetWeekDays, GetMonthYear } from "../helper";
import { CalendarContextType, IDay, TypeMonthYear } from "../types";

type ChildrenProps = {
  children: React.ReactNode;
};

export const CalendarContext = createContext<CalendarContextType | null>(null);

export const CalendarContextProvider = ({ children }: ChildrenProps) => {
  const [ActualWeek, setActualWeek] = useState<number>(CurrentWeek);
  const [WeekDays, setWeekDays] = useState<IDay[]>(GetWeekDays(ActualWeek));
  const [SelectedDays, setSelectedDays] = useState<IDay[]>([]);
  const [MonthYear, setMonthYear] = useState<TypeMonthYear>(GetMonthYear(ActualWeek));

  const UpdateView = () => {
    setMonthYear(GetMonthYear(ActualWeek));
  };

  const NextWeek = (): void => {
    setActualWeek(ActualWeek + 1);
    setWeekDays(GetWeekDays(ActualWeek + 1));
    UpdateView();
  };

  const PreviousWeek = (): void => {
    setActualWeek(ActualWeek - 1);
    setWeekDays(GetWeekDays(ActualWeek - 1));
    UpdateView();
  };

  const OnClickSelect = (day: IDay): void => {
    setSelectedDays([...SelectedDays, day]);
  };

  const OnClickRemove = (day: IDay): void => {
    const newList: IDay[] = SelectedDays.filter((d) => d.date !== day.date);
    setSelectedDays(newList);
  };

  return (
    <CalendarContext.Provider
      value={{
        ActualWeek,
        WeekDays,
        NextWeek,
        PreviousWeek,
        OnClickSelect,
        OnClickRemove,
        SelectedDays,
        MonthYear,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
