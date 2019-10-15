import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { FONTS } from "../enums";

const getFamily = style => {
    if (style.fontWeight === "bold" || style.fontWeight === "700") {
        return FONTS.COMFORTAA;
    }

    return FONTS.COMFORTAA;
};

const CommitRackText = props => {
    const { style, children } = props;

    const newStyle = { ...style, fontFamily: getFamily(style) };
    delete newStyle.fontWeight;

    return <Text style={newStyle}>{children}</Text>;
};

CommitRackText.propTypes = {
    style: PropTypes.object,
    children: PropTypes.any
};

CommitRackText.defaultProps = {
    style: {},
    children: ""
};

export default CommitRackText;
