import moment from 'moment';

export type TodayType = {
    date: TDate
}

export type TDate = {
    day: string
    month: string
    year: string
}

export const todayIs = ():TodayType => {
    const NewDate:moment.Moment = moment();
    const today:TodayType = {
        date: {
            day: NewDate.format("D"),
            month: NewDate.format("MMM"),
            year: NewDate.format("YYYY")
        }
    }
    return today;
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
    setSelected(status:boolean):void
}

class Day implements IDay {
    constructor(
        public day:string,
        public date:TDate,
        public selected:boolean,
        public today:boolean){}

    public setSelected(status:boolean):void {
        this.selected = status
    }
}

export const monthWeek = (week:number):TypeMonthYear => {
    const currentMonth = moment().week(week).endOf('week').format("MMMM");
    const currentYear = moment().week(week).endOf('week').format("YYYY");
    const current = {
        month: currentMonth,
        year: currentYear
    }
    return current;
}

export const WeekDays = (week: number = moment().week()):IDay[] => {
    let current = moment();
    const NewDate:moment.Moment = moment().week(week).startOf('week');
    let listDays: IDay[] = [];
    for (let i = 0; i < 7; i++) {
        const day:IDay = new Day(
            NewDate.weekday(i).format("dddd"),
            {
                day: NewDate.weekday(i).format("D"),
                month: NewDate.weekday(i).format("MMM"),
                year: NewDate.weekday(i).format("YYYY")
            },
            false,
            NewDate.weekday(i).isSame(current,'date')
            )
        listDays.push(day)
    };
    return listDays;
};
