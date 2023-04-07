import React from "react";
import PropTypes from "prop-types";
import {
    Alert,
    AppBar,
    Box,
    Button,
    IconButton,
    Snackbar,
    Tab,
    Tabs,
    ThemeProvider,
    Typography,
    useTheme,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import theme2 from "../../materialThemes";
import styles from "./styles.module.scss";
import SmallGallery from "./SmallGallery/SmallGallery";
import { FaComment } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { VscOpenPreview } from "react-icons/vsc";
import PreviewTab from "./PreviewTab/PreviewTab";
import CommentsTab from "./CommentsTab/CommentsTab";
import { numberWithCommas } from "../../myModules";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { BasketContext } from "../../Context/UserContext";
import urls from "../../apis";
import CloseIcon from "@mui/icons-material/Close";

const Product = props => {
    let data =
        "این محصول دارای 12 ماه گارانتی و 7 روز مهلت تست می باشد    رنگ : مشکلی نوع اتصال : بی سیم ( دانگل USB ) قابل استفاده بر روی تمامی پلتفرم ها مشخصات کامل در ادامه صفحه خرید هدست گیمینگ ریزر Razer Nari Ultimate";
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [pinAppBar, setPinAppBar] = React.useState(false);
    const [snackStates, setSnakeStates] = React.useState({
        isOpen: false,
        message: "",
        severity: "success",
    });
    const [currentProduct, setCurrentProduct] = React.useState({
        id: 0,
        images: ["", ""],
        mainImage: "",
        title: "",
        cost: 0,
        description: "",
        preview: "",
        comments: [{ name: "", email: "", description: "" }],
        specification: [{ title: "", description: "" }],
    });
    const [searchParams, setSearchParams] = useSearchParams();
    const { basketList, setBasketList } = React.useContext(BasketContext);
    const navigate = useNavigate();

    const handleChange = React.useCallback((event, newValue) => {
        setValue(newValue);
    }, []);

    const handleChangeIndex = React.useCallback(index => {
        setValue(index);
    }, []);

    const handleAddToBasketBtn = React.useCallback(() => {
        let isValid = true;
        for (const item of basketList) {
            if (item.id === currentProduct.id) {
                isValid = false;
                break;
            }
        }

        if (!isValid) {
            setSnakeStates({
                isOpen: true,
                severity: "warning",
                message: "قبلا به سبد خرید شما اضافه شده است"
            })
            return;
        }

        let newBasketList = [
            ...basketList,
            {
                id: currentProduct.id,
                imgSrc: currentProduct.mainImage,
                title: currentProduct.title,
                count: 1,
                cost: currentProduct.cost,
            },
        ];
        setBasketList(newBasketList);
        setSnakeStates({
            isOpen: true,
            message: "با موفقیت به سبد خرید اضافه شد.",
            severity: "success"
        });
    }, [
        basketList,
        currentProduct.cost,
        currentProduct.id,
        currentProduct.mainImage,
        currentProduct.title,
        setBasketList,
    ]);
    
    console.log(currentProduct);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setSnakeStates(false);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", e => {
            if (window.scrollY > 430.0) {
                setPinAppBar(true);
            } else if (window.scrollY < 430) setPinAppBar(false);
        });
    }, []);

    React.useEffect(() => {
        const productId = searchParams.get("id");
        console.log(`product id = ${productId}`);
        (async function () {
            const result = await getProductById(productId);
            if (result.length === 0) {
                navigate("/404NotFound");
            } else {
                setCurrentProduct(result[0]);
            }
        })();
    }, [navigate, searchParams]);
    return (
        <div>
            <ScrollToTop />
            <Snackbar
                open={snackStates.isOpen}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity={snackStates.severity}>
                    {snackStates.message}
                </Alert>
            </Snackbar>
            <div className={styles.MainCarder}>
                <div className={styles.top}>
                    <div className={styles.littleDetails}>
                        <h1 className={styles.title}> نام کالا مورد نظر</h1>
                        <h2 className={styles.cost}>
                            <strong>{numberWithCommas(12000000)}</strong> تومان{" "}
                        </h2>
                        <div className={styles.actions}>
                            <Button
                                onClick={handleAddToBasketBtn}
                                variant="contained"
                            >
                                اضافه به سبد خرید{" "}
                                <ShoppingBasketIcon style={{ marginLeft: 5 }} />
                            </Button>
                        </div>
                        <h3>:مشخصات</h3>
                        <p>{data}</p>
                    </div>
                    <SmallGallery />
                </div>
                <ThemeProvider theme={theme2}>
                    <Box className={styles.box}>
                        <AppBar
                            position="static"
                            className={
                                pinAppBar ? styles.pinnedAppBar : styles.appBar
                            }
                        >
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="secondary"
                                textColor="inherit"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                <Tab
                                    style={{ minHeight: 50 }}
                                    label="مشخصات"
                                    iconPosition="end"
                                    icon={<IoMdListBox fontSize={20} />}
                                    {...a11yProps(0)}
                                />
                                <Tab
                                    style={{ minHeight: 50 }}
                                    label="دیدگاه ها"
                                    iconPosition="end"
                                    icon={<FaComment fontSize={20} />}
                                    {...a11yProps(1)}
                                />
                                <Tab
                                    style={{ minHeight: 50 }}
                                    label="معرفی محصول"
                                    iconPosition="end"
                                    icon={<VscOpenPreview fontSize={20} />}
                                    {...a11yProps(1)}
                                />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            className={styles.swipeableViews}
                            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel
                                value={value}
                                index={0}
                                dir={theme.direction}
                            >
                                <PreviewTab />
                            </TabPanel>
                            <TabPanel
                                value={value}
                                index={1}
                                dir={theme.direction}
                            >
                                <CommentsTab />
                            </TabPanel>
                            <TabPanel
                                value={value}
                                index={2}
                                dir={theme.direction}
                            >
                                Item Three
                            </TabPanel>
                        </SwipeableViews>
                    </Box>
                </ThemeProvider>
            </div>
        </div>
    );
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

/**
 *
 * @param {string | number} id
 */
async function getProductById(id) {
    const res = await fetch(urls.baseUrl + urls.products + "/?id=" + id);
    // console.log(urls.baseUrl + urls.products + "?id=" + id);
    const data = res.json();

    return data;
}

export default Product;
