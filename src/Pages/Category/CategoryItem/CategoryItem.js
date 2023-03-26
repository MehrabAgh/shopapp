import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";



/**
 *
 * @param {{state: number, img: string, title: string, overlayColor: string}} props
 * @returns
 */
export default function CategoryItem(props) {
    
    return (
        <Link to={"/Searchbar"} state={props.state} className={styles.link}>
            <div
                style={{
                    backgroundImage: `url(${props.img})`,
                }}
                className={styles.img}
            >
                <div
                    className={styles.overlay}
                    style={{ backgroundColor: props.overlayColor }}
                ></div>
            </div>
            <h2 className={styles.title}>{props.title}</h2>
        </Link>
    );
}
