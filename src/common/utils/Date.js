import moment from "moment";
import { DATE_FORMATS } from "../enums";

const getDayInterval = () => ({
    after: moment().subtract(1, "day").format(DATE_FORMATS.YEAR_MONTH_DAY),
    before: moment().add(1, "day").format(DATE_FORMATS.YEAR_MONTH_DAY)
});

const getWeekInterval = () => ({
    after: moment().subtract(1, "week").subtract(1, "day").format(DATE_FORMATS.YEAR_MONTH_DAY),
    before: moment().add(1, "day").format(DATE_FORMATS.YEAR_MONTH_DAY)
});

const getMonthInterval = () => ({
    after: moment().subtract(1,"months").subtract(1, "day").format(DATE_FORMATS.YEAR_MONTH_DAY),
    before: moment().add(1,"day").format(DATE_FORMATS.YEAR_MONTH_DAY),
});


export default {
    getDayInterval,
    getWeekInterval,
    getMonthInterval
};