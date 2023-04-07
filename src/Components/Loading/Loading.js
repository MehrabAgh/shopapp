import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

/**
 * 
 * @param {{open: boolean}} props 
 * @returns 
 */
export default function Loading(props) {
    const [open, setOpen] = React.useState(props.open);
    const handleClose = () => {
        // setOpen(false);
    };

    React.useEffect(()=>{
        setOpen(props.open)
    },[props.open])
    return (
        <Backdrop
            sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
