import moment from 'moment';

export interface IDay {
    day: string
    date: TDate
    selected: boolean
    today: boolean
}

export type IToday = {
    date: {
        day: string
        month: string
        year: string
    }
}

export type TDate = {
    day: string
    month: string
    year: string
}

export const todayIs = ():IToday => {
    const NewDate:moment.Moment = moment();
    const today:IToday = {
        date: {
            day: NewDate.format("D"),
            month: NewDate.format("MMM"),
            year: NewDate.format("YYYY")
        }
    }
    return today;
}


export const WeekDays = (week: number = moment().week()):IDay[] => {
    let current = moment();
    const NewDate:moment.Moment = moment().week(week).startOf('week');
    let listDays: object[] = [];
    for (let i = 0; i < 7; i++) {
        let day:IDay = { 
            day: NewDate.weekday(i).format("dddd"),
            date: {
                day: NewDate.weekday(i).format("D"),
                month: NewDate.weekday(i).format("MMM"),
                year: NewDate.weekday(i).format("YYYY")
            }, 
            selected: false, 
            today: NewDate.weekday(i).isSame(current,'date')
        };
        listDays.push(day)
    };
    return listDays;
};

