import React from "react";
import { IoChevronDown } from "react-icons/io5";
import LoadItem from "../ItemNonDrop/LoadItem/LoadItem";
import styles from "./styles.module.scss";

// * When user was login show bellow item
const userLoggedInItems = [
    { name: "لیست علاقه مندی", url: "/Aboutus" },
    { name: "سفارش ها", url: "/Offer" },
    { name: "خروج از حساب کاربری", url: "/Category" },
];

// * When user not login show bellow item
const userNotLoggedInItems = [
    { name: "ورود", url: "/Login" },
    { name: "ثبت نام", url: "/SignUp" },
];

const AccountDropper = props => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { accountData } = props;

    const dropdownContainerRef = React.useRef(null);
    const dropdownRef = React.useRef(null);
    const dropdownContentRef = React.useRef(null);

    React.useEffect(() => {
        setTimeout(() => {
            if (!isOpen) {
                dropdownContentRef.current.style.visibility = "hidden";
            }
        }, 600);

        if (isOpen) {
            dropdownContentRef.current.style.visibility = "visible";
        }
    }, [dropdownRef, isOpen]);

    const handleDropdownClick = React.useCallback(e => {
        setIsOpen(prev => !prev);
    });

    React.useEffect(() => {
        const documentClick = e => {
            if (
                dropdownContainerRef.current &&
                !dropdownContainerRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", documentClick);

        return () => {
            document.removeEventListener("click", documentClick);
        };
    }, [isOpen]);

    return (
        <div className={styles.dropdown} ref={dropdownContainerRef}>
            <div
                style={{ display: "flex" }}
                ref={dropdownRef}
                onClick={handleDropdownClick}
            >
                <b>
                    {typeof accountData === "undefined"
                        ? "حساب کاربری"
                        : accountData.name}
                </b>
                <IoChevronDown
                    style={{
                        marginTop: "5px",
                        marginLeft: "5px",
                        margin: "4px 5px",
                    }}
                />
            </div>
            <div
                className={styles.dropdownContent}
                // ! this is a complex animation
                style={{
                    height:
                        isOpen && props.isLogin
                            ? 220
                            : isOpen && !props.isLogin
                            ? 240
                            : 0,
                    opacity: isOpen ? 1 : 0,
                    top: isOpen ? 30 : -150,
                    transition: isOpen
                        ? "0.5s opacity, 0.5s height, 0.1s top"
                        : "0.5s opacity, 0.5s height, 2.5s top",
                }}
                ref={dropdownContentRef}
            >
                <div className={styles.into}>
                    {props.isLogin ? (
                        <>
                            <h2 className={styles.title}>{accountData.name}</h2>
                            {userLoggedInItems.map((item, index) => (
                                <LoadItem
                                    url={"#"}
                                    name={item.name}
                                    key={index}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            <h3 className={styles.title}>! شما وارد نشدید !</h3>
                            <hr />
                            {userNotLoggedInItems.map((item, index) => (
                                <LoadItem
                                    url={item.url}
                                    name={item.name}
                                    key={index}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccountDropper;
