import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { View, Text } from "react-native";
import { store, persistor } from "./src/config/Store";
import ICONS from "./src/common/enums/Icons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <View>
        <Text>Hello World</Text>
        <MaterialCommunityIcon name={ICONS.CALENDAR_DAY} />
        <MaterialCommunityIcon name={ICONS.CALENDAR_WEEK} />
        <MaterialCommunityIcon name={ICONS.CALENDAR_MONTH} />
      </View>
    </PersistGate>
  </Provider>
);

export default App;
