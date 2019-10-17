import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

import TabHeader from "./component/TabHeader";
import { ICONS, COLORS, FONTS } from "../common/enums";
import { ROUTES } from "./enums";
import Day from "../leaderboard/screens/Day";
import Week from "../leaderboard/screens/Week";
import Month from "../leaderboard/screens/Month";

const routes = {
    [ROUTES.DAY]: Day,
    [ROUTES.WEEK]: Week,
    [ROUTES.MONTH]: Month,
};

const routeIconMap = {
    [ROUTES.DAY]: ICONS.CALENDAR_DAY,
    [ROUTES.WEEK]: ICONS.CALENDAR_WEEK,
    [ROUTES.MONTH]: ICONS.CALENDAR_MONTH
};

const getTabBar = (text, color) => {
    return (
        <TabHeader
          headerText={text}
          icon={routeIconMap[text]}
          color={color}
        />
    );
};

const defaultNavigationOptions = ({navigation}) => ({
    tabBarIcon: ({ tintColor }) => getTabBar(navigation.state.routeName, tintColor),
    tabBarOptions: {
        showLabel: false,
        activeTintColor: COLORS.ACTIVE_ELEMENT.BLUE,
        inactiveTintColor: COLORS.INACTIVE_ELEMENT.LIGHT_BLUE
    }
});

export default createAppContainer(
    createBottomTabNavigator(routes, { defaultNavigationOptions })
);