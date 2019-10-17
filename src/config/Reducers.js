import { combineReducers } from "redux";
import settingsReducer from "../settings/redux/SettingsReducer";
import leaderboardReducer from "../leaderboard/redux/LeaderboardReducer";

export default combineReducers({
    settings: settingsReducer,
    leaderboard: leaderboardReducer
});
