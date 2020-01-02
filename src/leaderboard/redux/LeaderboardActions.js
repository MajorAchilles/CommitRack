import LeaderboardActionTypes from "./LeaderboardActionTypes";
import API from "../../common/utils/API";
import { URLS } from "../../common/enums";
import headers from "../../common/enums/Config";
import Date from "../../common/utils/Date";

const LeaderboardActions = {
    startNetworkFetch: () => dispatch => dispatch({ type: LeaderboardActionTypes.START_COMMIT_DATA_FETCH }),
    
    endNetworkFetch: () => dispatch => dispatch({ type: LeaderboardActionTypes.END_COMMIT_DATA_FETCH }),
    
    failNetworkFetch: () => dispatch => dispatch({ type: LeaderboardActionTypes.FAIL_COMMIT_DATA_FETCH }),

    loadMembers: members => dispatch => dispatch({ type: LeaderboardActionTypes.LOAD_MEMBERS, payload: members }),

    // loadCommitData: commits => dispatch => dispatch({ type: LeaderboardActionTypes.LOAD_COMMIT_DATA, payload: commits }),

    loadCommitDataForDay: commits => dispatch => dispatch({ type: LeaderboardActionTypes.LOAD_DAY_RANKINGS, payload: commits }),

    loadCommitDataForWeek: commits => dispatch => dispatch({ type: LeaderboardActionTypes.LOAD_WEEK_RANKINGS, payload: commits }),

    loadCommitDataForMonth: commits => dispatch => dispatch({ type: LeaderboardActionTypes.LOAD_MONTH_RANKINGS, payload: commits }),
    
    getMembers: () => async dispatch => {
        dispatch(LeaderboardActions.startNetworkFetch());
        try {
            const members = await API.get(URLS.GET_MEMBERS, headers);
            dispatch(LeaderboardActions.endNetworkFetch());
            dispatch(LeaderboardActions.loadMembers(members));
            dispatch(LeaderboardActions.getMemberCommitsForDay());
            dispatch(LeaderboardActions.getMemberCommitsForWeek());
            dispatch(LeaderboardActions.getMemberCommitsForMonth());
        } catch {
            dispatch(LeaderboardActions.failNetworkFetch());
        }
    },

    getMemberCommitsForDay: () => async (dispatch, getState) => {
        const { 
            leaderboard: { groupMembers }
        } = getState();

        dispatch(LeaderboardActions.startNetworkFetch());
        const interval = Date.getDayInterval();

        Promise.all(
            groupMembers.map(member => {
                console.log(URLS.USER_COMMIT_DATA(member.id, interval.after, interval.before));
                return API.get(URLS.USER_COMMIT_DATA(member.id, interval.after, interval.before), headers);
            })
        )
            .then(commitLists => {
                const commitsByUsers = commitLists.map(
                    (commitList, index) => ({
                        userId: groupMembers[index].id,
                        name: groupMembers[index].name,
                        commits: commitList.error ? [] : commitList,
                        count: commitList.error ? 0 : commitList.length
                    })
                );

                dispatch(LeaderboardActions.loadCommitDataForDay(commitsByUsers));
                dispatch(LeaderboardActions.endNetworkFetch());
            })
            .catch((error) => dispatch(LeaderboardActions.failNetworkFetch(error.toString())));
    },

    getMemberCommitsForWeek: () => async (dispatch, getState) => {
        const { 
            leaderboard: { groupMembers }
        } = getState();

        dispatch(LeaderboardActions.startNetworkFetch());
        const interval = Date.getWeekInterval();

        Promise.all(
            groupMembers.map(member => {
                console.log(URLS.USER_COMMIT_DATA(member.id, interval.after, interval.before));
                return API.get(URLS.USER_COMMIT_DATA(member.id, interval.after, interval.before), headers);
            })
        )
            .then(commitLists => {
                const commitsByUsers = commitLists.map(
                    (commitList, index) => ({
                        userId: groupMembers[index].id,
                        name: groupMembers[index].name,
                        commits: commitList.error ? [] : commitList,
                        count: commitList.error ? 0 : commitList.length
                    })
                );

                dispatch(LeaderboardActions.loadCommitDataForWeek(commitsByUsers));
                dispatch(LeaderboardActions.endNetworkFetch());
            })
            .catch((error) => dispatch(LeaderboardActions.failNetworkFetch(error.toString())));
    },

    getMemberCommitsForMonth: () => async (dispatch, getState) => {
        const { 
            leaderboard: { groupMembers }
        } = getState();

        dispatch(LeaderboardActions.startNetworkFetch());
        const interval = Date.getMonthInterval();

        Promise.all(
            groupMembers.map(member => {
                console.log(URLS.USER_COMMIT_DATA(member.id, interval.after, interval.before));
                return API.get(URLS.USER_COMMIT_DATA(member.id, interval.after, interval.before), headers);
            })
        )
            .then(commitLists => {
                const commitsByUsers = commitLists.map(
                    (commitList, index) => ({
                        userId: groupMembers[index].id,
                        name: groupMembers[index].name,
                        commits: commitList.error ? [] : commitList,
                        count: commitList.error ? 0 : commitList.length
                    })
                );

                dispatch(LeaderboardActions.loadCommitDataForMonth(commitsByUsers));
                dispatch(LeaderboardActions.endNetworkFetch());
            })
            .catch((error) => dispatch(LeaderboardActions.failNetworkFetch(error.toString())));
    }
};

export default LeaderboardActions;