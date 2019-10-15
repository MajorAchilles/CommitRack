const COLOR_CODES = {
    LIGHT_CORAL: "#EC7CA4",
    POWDER_BLUE: "#ADE4D5",
    POWDER_BLUE_DIMMED: "#E0FFF7",
    OFF_WHITE: "#FBFBFB",
    DIM_GRAY: "#805967",
    DARK_KHAKI: "#B3B064",
    WHITE: "#FFFFFF",
    BLACK: "#000000"
};

const COLORS = {
    BACKGROUNDS: {
        WHITE: COLOR_CODES.OFF_WHITE
    },
    ACTIVE_ELEMENT: {
        BLUE: COLOR_CODES.POWDER_BLUE,
        RED: COLOR_CODES.LIGHT_CORAL
    },
    INACTIVE_ELEMENT: {
        LIGHT_BLUE: COLOR_CODES.POWDER_BLUE_DIMMED,
        GRAY: COLOR_CODES.DIM_GRAY,
        KHAKI: COLOR_CODES.DARK_KHAKI
    },
    FONTS: {
        WHITE: COLOR_CODES.WHITE,
        BLACK: COLOR_CODES.BLACK
    }
};

export default COLORS;