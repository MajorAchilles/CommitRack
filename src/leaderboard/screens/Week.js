import React from "react";
import moment from "moment";
import { Text } from "../../common/components";
import Date from "../../common/utils/Date";
import { DATE_FORMATS } from "../../common/enums";

const interval = Date.getWeekInterval();

const Day = props => {
    return <Text>Leaderboard for {moment(interval.after, DATE_FORMATS.YEAR_MONTH_DAY).format(DATE_FORMATS.DAY_MONTH)} to {moment(interval.before, DATE_FORMATS.YEAR_MONTH_DAY).format(DATE_FORMATS.DAY_MONTH)}</Text>;
}

export default Day;