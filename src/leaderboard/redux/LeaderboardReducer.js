const initialState = {
    allRankings: [],
    dayRankings: [],
    weekRankings: [],
    monthRankings: [],
    errorMessage: ""
};

const leaderboardReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default leaderboardReducer;