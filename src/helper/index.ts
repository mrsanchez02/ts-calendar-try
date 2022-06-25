import moment from 'moment';
import {TDate,TypeMonthYear,IDay} from '../types'

class Day implements IDay {
    constructor(
        public day:string,
        public date:TDate,
        public selected:boolean,
        public today:boolean){}

    public toggleSelected () {
        this.selected = !this.selected;
    }
}

export const GetWeekDays = (week: number = moment().week()):IDay[] => {
    let current:moment.Moment = moment();
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
            NewDate.weekday(i).isSame(current,'dates')
            )
        listDays.push(day)
    };
    return listDays;
};

export const GetMonthYear = (week:number):TypeMonthYear => {
    const current = moment().week(week).endOf('week')
    const currentMonth = {
        month: current.format("MMM"),
        year: current.format("YYYY")
    }
    return currentMonth;
}

export const CurrentWeek = ():number => moment().week();