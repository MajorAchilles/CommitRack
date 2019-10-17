import React, { useEffect } from "react"
import { View } from "react-native";
import { connect } from "react-redux";

import LeaderboardNavigator from "./LeaderboardNavigator"
import styles from "./styles/NavigatorWrapperStyles";
import LeaderboardActions from "../leaderboard/redux/LeaderboardActions";

const NavigatorWrapper = props => {
    const {
        loadMembers
    } = props;

    useEffect(() => {
        loadMembers();
    }, []);

    return (
        <View style={styles.appContainer}>
            <LeaderboardNavigator/>
        </View>
    )
}

const mapDispatchToProps = dispatch => ({
    loadMembers: () => dispatch(LeaderboardActions.getMembers())
});

export default connect(
    null,
    mapDispatchToProps
)(NavigatorWrapper);
