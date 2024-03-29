import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
    IoBagHandleOutline,
    IoSearch,
    IoPersonOutline,
    IoChevronDown,
} from "react-icons/io5";
import styles from "./styles.module.scss";
import ItemNonDrop from "./ItemNonDrop/ItemNonDrop";
import AccountDropper from "./AccountDropper/AccountDropper";
import { TiThMenu } from "react-icons/ti";
import MenuIcon from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import { BasketContext } from "../../Context/UserContext";

const links = [
    { name: "درباره ما", url: "/about-us" },
    { name: "تخفیف ها و پیشنهاد ها", url: "/Offer" },
    { name: "دسته بندی کالا", url: "/Category", list: true },
    { name: "خانه", url: "/" },
];

/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
    const [isOpenLink, setOpenLink] = React.useState(false);
    const [linksHeight, setLinksHeight] = React.useState(50);
    const headerRef = React.useRef(null);
    const spaceRef = React.useRef(null);
    const intoLinksRef = React.useRef(null);
    const rightRef = React.useRef(null);

    const {basketList, setBasketList} = React.useContext(BasketContext);
    console.log(basketList);

    const handleLinkBtnClick = React.useCallback(() => {
        setOpenLink(prev => !prev);
    }, []);

    const rightAnimationLogic = React.useCallback(() => {
        if (isOpenLink && window.innerWidth < 437) {
            rightRef.current.style.display = "flex";
            setTimeout(() => {
                rightRef.current.style.height = "200px";
                rightRef.current.style.overflow = "visible";
            }, 200);
        } else if (!isOpenLink && window.innerWidth < 437) {
            rightRef.current.style.height = "0";
            rightRef.current.style.overflow = "hidden";
            setTimeout(() => {
                rightRef.current.style.display = "none";
            }, 200);
        }

        if (window.innerWidth > 437) {
            rightRef.current.style.height = "fit-content";
            rightRef.current.style.display = "flex";
            rightRef.current.style.overflow = "visible";
        }
    }, [isOpenLink]);

    React.useEffect(() => {
        spaceRef.current.style.height = headerRef.current.offsetHeight + "px";
        console.log(intoLinksRef.current.clientHeight);
    }, []);

    React.useEffect(() => {
        setLinksHeight(Number(intoLinksRef.current.clientHeight));

        rightAnimationLogic();
        window.addEventListener("resize", rightAnimationLogic);

        return () => {
            window.removeEventListener("resize", rightAnimationLogic);
        };
    }, [isOpenLink, rightAnimationLogic]);

    return (
        <div className={styles.headerMain}>
            <div className={styles.headerOp} ref={headerRef}>
                <a href="/" className={styles.logo}>
                    <img
                        src={require("../../Assets/imgs/logo.png")}
                        alt={"ds"}
                    />
                </a>
                <div
                    className={styles.links}
                    style={isOpenLink ? { height: linksHeight } : {}}
                >
                    <div className={styles.into} ref={intoLinksRef}>
                        {links.map((n, index) => {
                            return (
                                <ItemNonDrop
                                    url={n.url}
                                    name={n.name}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </div>
                {/* 
                // * hided link btn
                */}
                <div className={styles.linksBtn} onClick={handleLinkBtnClick}>
                    <div
                        className={styles.into}
                        style={{
                            transform: isOpenLink
                                ? "rotate(360deg)"
                                : "rotate(0)",
                        }}
                    >
                        {isOpenLink ? <Close /> : <MenuIcon />}
                    </div>
                </div>
                <div className={styles.right} ref={rightRef}>
                    <Link
                        className={styles.searchBtn}
                        style={{ textDecoration: "none", color: "white" }}
                        to={"/SearchBar"}
                    >
                        <IoSearch size={25} />
                    </Link>
                    <div className={`${styles.accountBtn} ${styles.stateUser}`}>
                        <IoPersonOutline
                            size={25}
                            style={{ marginRight: "10px" }}
                        />
                        {/* 
                        //! get account data form api and pass to bellow component
                        */}
                        <AccountDropper
                            isLogin={false}
                            accountData={{ name: "test name" } ?? undefined}
                        />
                    </div>
                    <Link
                        className={styles.stateUser}
                        style={{ textDecoration: "none", color: "white" }}
                        to={"Profile/Basket"}
                    >
                        <IoBagHandleOutline
                            size={25}
                            style={{ marginRight: "10px" }}
                        />
                        <b>{basketList.length}</b>
                    </Link>
                </div>
            </div>
            <div className="space" ref={spaceRef}></div>
            <Outlet />
        </div>
    );
};

export default Header;
