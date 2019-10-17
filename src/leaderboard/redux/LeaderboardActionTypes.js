const LeaderboardActionTypes = {
    START_COMMIT_DATA_FETCH: "Leaderboard:StartCommitDataFetch",
    END_COMMIT_DATA_FETCH: "Leaderboard:EndCommitDataFetch",
    FAIL_COMMIT_DATA_FETCH: "Leaderboard::FailCommitDataFetch",
    SET_ERROR_MESSAGE: "Leaderboard::SetErrorMessage",
    CLEAR_ERROR_MESSAGE: "Leaderboad::ClearErrorMessage",
    LOAD_DAY_RANKINGS: "Leaderboard::DayRankingsLoaded",
    LOAD_WEEK_RANKINGS: "Leaderboard::WeekRankingsLoaded",
    LOAD_MONTH_RANKINGS: "Leaderboard::MonthRankingsLoaded",
    LOAD_MEMBERS: "Leaderboard::LoadMembers",
    LOAD_COMMIT_DATA: "Leaderboard::LoadCommitData",
};

export default LeaderboardActionTypes;