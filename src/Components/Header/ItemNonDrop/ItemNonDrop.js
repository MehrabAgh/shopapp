import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";


const ItemNonDrop = props => {

    return (
            <Link className={styles.itemHeaderLink} to={props.url}>
                {props.name}
            </Link>
    );
};

export default ItemNonDrop;
