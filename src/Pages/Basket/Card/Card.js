import React from "react";
import styles from "./styles.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, TextField, Tooltip } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from '@mui/icons-material/Delete';

/**
 *
 * @param {{data:{id:any; title: string; imgSrc: string; count: number; cost: number;} limitCount: number,
 * onClickEditCount: (e, id: any ,newValue: number)=>{},
 * onClickDeleteButton: (e, currentItem)=>{}}} props
 * @returns
 */
export default function Card(props) {
    const data = props.data;
    const [count, setCount] = React.useState(data.count);
    const [cost, setCost] = React.useState(data.cost);

    const handleClickEditCount = React.useCallback((e, mode) => {
        setCount(prev => {
            let newData =
                mode === "+" ? prev + 1 : mode === "-" ? prev - 1 : prev;
            if (typeof props.onClickEditCount !== "undefined") {
                props.onClickEditCount(e, data.id, newData);
            }
            return newData;
        });
    }, []);

    const handleTextFieldChange = React.useCallback(e => {
        setCount(e.target.value);
    }, []);

    const handleClickDeleteBtn = React.useCallback(
        e => {
            if (typeof props.onClickDeleteButton !== "undefined") {
                props.onClickDeleteButton(e, data);
            }
        },
        [data, props]
    );

    React.useEffect(() => {
        if (count > 12) {
            setCount(12);
        } else if (count < 1) {
            setCount(1);
        }
    }, [count]);
    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <div className={styles.img}>
                    <img src={data.imgSrc} alt={data.title} />
                </div>
                <div className={styles.title}>{data.title}</div>
            </div>
            <div className={styles.countSection}>
                <IconButton onClick={e => handleClickEditCount(e, "-")}>
                    <RemoveIcon />
                </IconButton>
                <TextField
                    value={count}
                    className={styles.textField}
                    onChange={handleTextFieldChange}
                />
                <IconButton onClick={e => handleClickEditCount(e, "+")}>
                    <AddIcon />
                </IconButton>
            </div>
            <div className={styles.costSection}>{cost * count} تومان</div>
            <Tooltip title="حذف از سبد خرید">
                <IconButton
                    className={styles.removeBtn}
                    onClick={handleClickDeleteBtn}
                >
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
}
