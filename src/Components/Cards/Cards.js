/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { MdVisibility, MdInsertComment } from "react-icons/md";
import { numberWithCommas } from "../../myModules";

/**
 *
 * @param {{rate: number, haveOff: boolean, img: string, name: string, price: number, commentCount: number, visitCount: number}} props
 * @returns
 */
const Cards = props => {
    const [rating, setRating] = useState(props.rate);
    const handleRating = rate => {
        setRating(rate);
    };
    return (
        <div className={styles.parentCard}>
            <Link
                to={"/Product"}
                style={{ textDecoration: "none", color: "white" }}
            >
                <div className={styles.card}>
                    {props.haveOff && (
                        <div className={styles.haveOff}>
                            !!حــــــــــــــــراج
                        </div>
                    )}
                    <div className={styles.image}>
                        <img
                            style={{ marginTop: "1px", borderRadius: "3px" }}
                            src={props.img}
                            alt={"ds"}
                        />
                    </div>
                    <span className={styles.name}>{props.name}</span>
                    <div className={styles.ratingContainer}>
                        <Rating
                            size={20}
                            fillColor={"#55a1e0"}
                            ratingValue={props.rate} /* Available Props */
                        />
                    </div>
                    <div className="simple-line" style={{ width: "50%" }}></div>
                    <div className={styles.price}>
                        <span>
                            قیمت :
                            {props.off ? (
                                <>
                                    <s style={{ color: "gray" }}>
                                        {props.price}
                                    </s>
                                    <br />
                                    <b style={{ color: "red" }}>
                                        {numberWithCommas((props.price * props.offer) / 100)}
                                    </b>
                                </>
                            ) : (
                                <b style={{ color: "white" }}>{numberWithCommas(props.price)}</b>
                            )}
                            <i> تومان </i>
                        </span>
                    </div>
                    <div
                        className="simple-line"
                        style={{ marginTop: "auto" }}
                    ></div>
                    <div className={styles.others}>
                        <div className={styles.item}>
                            {props.visitCount} بازدید
                            <MdVisibility className={styles.ic} />
                        </div>
                        <div className={styles.item}>
                            {props.commentCount} نظر
                            <MdInsertComment className={styles.ic} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Cards;
