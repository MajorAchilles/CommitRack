import React from "react"
import { View } from "react-native";
import LeaderboardNavigator from "./LeaderboardNavigator"
import { COLORS } from "../common/enums";
import styles from "./styles/NavigatorWrapperStyles";

const NavigatorWrapper = () => {
    return (
        <View style={styles.appContainer}>
            <LeaderboardNavigator/>
        </View>
    )
}

export default NavigatorWrapper;
