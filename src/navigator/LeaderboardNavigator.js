import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

import TabHeader from "./component/TabHeader";
import { ICONS, COLORS, FONTS } from "../common/enums";
import { ROUTES } from "./enums";
import { Text } from "../common/components";

const routes = {
    [ROUTES.DAY]: () => (<View><Text style={{ fontFamily: FONTS.COMFORTAA }}>DAY DATA</Text></View>),
    [ROUTES.WEEK]: () => (<View><Text style={{ fontFamily: FONTS.COMFORTAA }}>WEEK DATA</Text></View>),
    [ROUTES.MONTH]: () => (<View><Text style={{ fontFamily: FONTS.COMFORTAA }}>MONTH DATA</Text></View>),
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