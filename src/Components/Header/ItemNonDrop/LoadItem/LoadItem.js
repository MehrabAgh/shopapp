import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function LoadItem(props) {
    return (
        <div className={styles.rootContainer} style={{ marginBottom: "10px" }}>
            {/* <hr /> */}
            <Link className={styles.link} to={props.url}>
                {props.name}
            </Link>
        </div>
    );
}

export default LoadItem;
