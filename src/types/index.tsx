export type ActionType = 
{type: 'GET_ACTUAL_WEEK'} |
{type: 'NEXT_WEEK'} |
{type: 'PREVIOUS_WEEK'} 

export interface IDay {
    day: string
    date: TDate
    selected: boolean
    today: boolean
    toggleSelected():any
}

export type TDate = {
    day: string
    month: string
    year: string
}

export type TypeMonthYear = {
    month: string
    year: string
}

export interface IDay {
    day: string
    date: TDate
    selected: boolean
    today: boolean
    toggleSelected():void
}


export type TWeekButtons = {
    NextWeek():void|undefined
    PreviousWeek():void|undefined
}

export type CalendarContextType = {
    ActualWeek: number
    WeekDays: IDay[]
    NextWeek:()=>void
    PreviousWeek:()=>void
    OnClickSelect:(day:IDay)=>void
    OnClickRemove:(day:IDay)=>void
    MonthYear:TypeMonthYear
    SelectedDays:IDay[]
}