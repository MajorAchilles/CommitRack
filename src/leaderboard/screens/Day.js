import React from "react";
import moment from "moment";
import { Text } from "../../common/components";
import Date from "../../common/utils/Date";
import { DATE_FORMATS } from "../../common/enums";

const Day = props => {
    return <Text>Leaderboard for {moment().format(DATE_FORMATS.DAY_MONTH)}</Text>;
}

export default Day;