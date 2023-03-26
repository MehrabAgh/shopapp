import React from "react";
import styles from "./styles.module.scss";

export default function PreviewTab() {
    return (
        <div className={styles.container}>
            <div className={styles.sectionRow}>
                <div className={styles.title}>مشخصات کلی</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>بلوتوث</div>
                <div className={styles.desc}>دارد</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>مقاوم در برابر آب</div>
                <div className={styles.desc}>دارد</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>کنترل از راه دور</div>
                <div className={styles.desc}>دارد</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>کنترل از راه دور</div>
                <div className={styles.desc}>دارد</div>
            </div>

            <div className={styles.sectionRow}>
                <div className={styles.title}>مشخصات گیم پد</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>خروجی صدا</div>
                <div className={styles.desc}>ندارد</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>میکروفون</div>
                <div className={styles.desc}>ندارد</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>فیدبک</div>
                <div className={styles.desc}>ندارد</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>چینش آنالوگ‌ها</div>
                <div className={styles.desc}>دو دکمه ZL و ZR</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>دو دکمه ZL و ZR</div>
                <div className={styles.desc}>دو دکمه قابل تنظیم در پشت</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>ماژول‌ها</div>
                <div className={styles.desc}>ندارد</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>نرم افزار</div>
                <div className={styles.desc}>ندارد</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>پلتفرم‌های سازگار</div>
                <div className={styles.desc}>نینتندو سوییچ</div>
            </div>
            <div className={styles.row}>
                <div className={styles.title}>باتری</div>
                <div className={styles.desc}>ندارد</div>
            </div>
        </div>
    );
}
