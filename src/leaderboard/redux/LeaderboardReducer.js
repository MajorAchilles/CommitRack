import LeaderboardActionTypes from "./LeaderboardActionTypes";
import { NETWORK_STATES } from "../../common/enums";

const initialState = {
    groupMembers: [],
    allRankings: [],
    dayRankings: [],
    weekRankings: [],
    monthRankings: [],
    errorMessage: "",
    dayLoaded: false,
    weekLoaded: false,
    monthLoaded: false,
    networkStatus: NETWORK_STATES.READY
};

const leaderboardReducer = (state = initialState, action) => {
    switch(action.type) {
        case LeaderboardActionTypes.START_COMMIT_DATA_FETCH: 
            return {
                ...state,
                networkStatus: NETWORK_STATES.FETCHING
            };
        case LeaderboardActionTypes.END_COMMIT_DATA_FETCH: 
            return {
                ...state,
                networkStatus: NETWORK_STATES.FETCHING,
                errorMessage: ""
            };
        case LeaderboardActionTypes.FAIL_COMMIT_DATA_FETCH: 
            return {
                ...state,
                networkStatus: NETWORK_STATES.READY,
                errorMessage: action.payload
            };
        case LeaderboardActionTypes.LOAD_MEMBERS: 
            return {
                ...state,
                groupMembers: action.payload,
                dayLoaded: false,
                weekLoaded: false,
                monthLoaded: false
            };
        case LeaderboardActionTypes.LOAD_DAY_RANKINGS:
            return {
                ...state,
                dayRankings: action.payload,
                dayLoaded: true
            };
        case LeaderboardActionTypes.LOAD_WEEK_RANKINGS:
            return {
                ...state,
                weekRankings: action.payload,
                weekLoaded: true
            };
        case LeaderboardActionTypes.LOAD_MONTH_RANKINGS:
            return {
                ...state,
                monthRankings: action.payload,
                monthLoaded: true
            };
        default:
            return state;
    }
};

export default leaderboardReducer;