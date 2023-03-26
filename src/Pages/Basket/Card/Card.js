import React from "react";
import styles from "./styles.module.scss";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

/**
 *
 * @param {{data:{title: string; imgSrc: string; count: number; cost: number;}} limitCount: number} props
 * @returns
 */
export default function Card(props) {
    const data = props.data;
    const [count, setCount] = React.useState(data.count);
    const [cost, setCost] = React.useState(data.cost);

    const handleClickEditCount = React.useCallback((e, mode) => {
        setCount(prev =>
            mode === "+" ? prev + 1 : mode === "-" ? prev - 1 : prev
        );
    }, []);

    const handleTextFieldChange = React.useCallback(e => {
        setCount(e.target.value);
    }, []);

    React.useEffect(() => {
        if (count > 12) {
            setCount(12);
        }else if (count < 1){
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
        </div>
    );
}
