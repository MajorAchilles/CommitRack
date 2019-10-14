import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { View, Text } from "react-native";
import { store, persistor } from "./src/config/Store";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <View>
        <Text>Hello World</Text>
      </View>
    </PersistGate>
  </Provider>
);

export default App;
