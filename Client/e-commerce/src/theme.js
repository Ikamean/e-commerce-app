import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        black: '000',
        white: 'fff',
        blue: '#4285f4'
    },
    google: {
        color : '#4285f4',
        shadow : '#0000004d',
        active: '#dddddd'
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;