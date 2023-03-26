import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import CircleIcon from "@mui/icons-material/Circle";

const ItemNonDrop = props => {
    return (
        <Link className={styles.itemHeaderLink} to={props.url}>
            {props.name}
            <CircleIcon style={{ fontSize: 3, marginLeft: 5 }} />
        </Link>
    );
};

export default ItemNonDrop;
