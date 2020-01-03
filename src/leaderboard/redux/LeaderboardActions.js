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

    loadCommitData: commits => dispatch => dispatch({ type: LeaderboardActionTypes.LOAD_COMMIT_DATA, payload: commits }),

    loadCommitDataForDay: commits => dispatch => dispatch({ type: LeaderboardActionTypes.LOAD_DAY_RANKINGS, payload: commits }),

    loadCommitDataForWeek: commits => dispatch => dispatch({ type: LeaderboardActionTypes.LOAD_WEEK_RANKINGS, payload: commits }),

    loadCommitDataForMonth: commits => dispatch => dispatch({ type: LeaderboardActionTypes.LOAD_MONTH_RANKINGS, payload: commits }),
    
    getMembers: () => async dispatch => {
        dispatch(LeaderboardActions.startNetworkFetch());
        try {
            const members = await API.get(URLS.GET_MEMBERS, headers);
            dispatch(LeaderboardActions.endNetworkFetch());
            dispatch(LeaderboardActions.loadMembers(members));
            dispatch(LeaderboardActions.getMemberCommits());
        } catch {
            dispatch(LeaderboardActions.failNetworkFetch());
        }
    },

    getMemberCommits: () => async (dispatch, getState) => {
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

                dispatch(LeaderboardActions.loadCommitData(commitsByUsers));
                dispatch(LeaderboardActions.processDayData(commitsByUsers));
                dispatch(LeaderboardActions.processWeekData(commitsByUsers));
                dispatch(LeaderboardActions.processMonthData(commitsByUsers));
                dispatch(LeaderboardActions.endNetworkFetch());
            })
            .catch((error) => dispatch(LeaderboardActions.failNetworkFetch(error.toString())));
    },

    processDayData: allCommits => async dispatch => {

    },

    processWeekData: allCommits => async dispatch => {
    },

    processMonthData: commitAndUserData => async dispatch => {
        dispatch(LeaderboardActions.loadCommitDataForMonth(commitAndUserData));
    }
};

export default LeaderboardActions;