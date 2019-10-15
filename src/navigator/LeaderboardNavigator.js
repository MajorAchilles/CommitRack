import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import TabHeader from "./component/TabHeader";
import { ICONS, COLORS } from "../common/enums";
import { ROUTES } from "./enums";

const routes = {
    [ROUTES.DAY]: () => (<View><Text>SOMEDAY</Text></View>),
    [ROUTES.WEEK]: () => (<View><Text>SOMEWEEK</Text></View>),
    [ROUTES.MONTH]: () => (<View><Text>SOMEMONTH</Text></View>),
}

const getTabBar = (text, color) => {
    const routeIconMap = {
        [ROUTES.DAY]: ICONS.CALENDAR_DAY,
        [ROUTES.WEEK]: ICONS.CALENDAR_WEEK,
        [ROUTES.MONTH]: ICONS.CALENDAR_MONTH
    };

    return (
        <TabHeader
          headerText={text}
          icon={routeIconMap[text]}
          color={color}
        />
    );
};

const defaultNavigationOptions = ({navigation}) => ({
    // tabBarIcon: ({ tintColor }) => <Text>{navigation.state.routeName + tintColor}</Text>,
    tabBarIcon: (args) => {
        console.log(args);
        return getTabBar(navigation.state.routeName, args.tintColor);
    },
    tabBarOptions: {
        showLabel: false,
        activeTintColor: COLORS.ACTIVE_ELEMENT.BLUE,
        inactiveTintColor: COLORS.INACTIVE_ELEMENT.LIGHT_BLUE
    }
});

export default createAppContainer(
    createBottomTabNavigator(routes, { defaultNavigationOptions })
);