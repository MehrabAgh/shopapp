import { createTheme } from "@mui/material/styles";
import shabnamFont from "./Assets/fonts/Shabnam-FD.woff";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#4470c3",
        },
        secondary: {
            main: "#0075f5",
        },
        typography: {
            fontFamily: "Shabnam",
        },
    },
});

console.log(shabnamFont);

export default theme;
