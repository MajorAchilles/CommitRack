import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/config/Store";
import LeaderboardNavigator from "./src/navigator/NavigatorWrapper";
import { COLORS } from "./src/common/enums";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StatusBar backgroundColor={COLORS.BACKGROUNDS.WHITE} barStyle={"dark-content"}/>
      <LeaderboardNavigator/>
    </PersistGate>
  </Provider>
);

export default App;
