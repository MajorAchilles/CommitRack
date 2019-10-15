import React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../styles/TabHeaderStyles";
import { SIZES } from "../../common/enums";

const TabHeader = props => {
    const {
        headerText,
        icon,
        color
    } = props;
    
    return (
        <View
          style={{
              ...styles.container,
              backgroundColor: color
          }}
        >
            <MaterialCommunityIcon name={icon} size={SIZES.MEDIUM}/>
            <Text>{headerText}</Text>
        </View>
    );
};

export default TabHeader;