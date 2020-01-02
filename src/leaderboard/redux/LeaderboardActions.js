import LeaderboardActionTypes from "./LeaderboardActionTypes";
import API from "../../common/utils/API";
import { URLS } from "../../common/enums";
import headers from "../../common/enums/Config";

const LeaderboardActions = {
    startNetworkFetch: () => dispatch => dispatch({ type: LeaderboardActionTypes.START_COMMIT_DATA_FETCH }),
    
    endNetworkFetch: () => dispatch => dispatch({ type: LeaderboardActionTypes.END_COMMIT_DATA_FETCH }),
    
    failNetworkFetch: ( ) => dispatch => dispatch({ type: LeaderboardActionTypes.FAIL_COMMIT_DATA_FETCH }),

    loadMembers: members => dispatch => dispatch({ type: LeaderboardActionTypes.LOAD_MEMBERS, payload: members }),

    loadCommitData: commits => dispatch => dispatch({ type: LeaderboardActionTypes.LOAD_COMMIT_DATA, payload: commits }),
    
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
        Promise.all(
            groupMembers.map(member => API.get(URLS.USER_COMMIT_DATA(member.username), headers))
        )
            .then(commitLists => {
                const commitsByUsers = commitLists.map(
                    (commitList, index) => ({
                        userId: groupMembers[index].id,
                        commits: commitList
                    })
                );

                dispatch(LeaderboardActions.loadCommitData(commitsByUsers));
                dispatch(LeaderboardActions.endNetworkFetch());
            })
            .catch((error) => dispatch(LeaderboardActions.failNetworkFetch(error.toString())));
    }
};

export default LeaderboardActions;