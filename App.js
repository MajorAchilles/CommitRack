import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/config/Store";
import LeaderboardNavigator from "./src/navigator/LeaderboardNavigator";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <LeaderboardNavigator/>
    </PersistGate>
  </Provider>
);

export default App;
