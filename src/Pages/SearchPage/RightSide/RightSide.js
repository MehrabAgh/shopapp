import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    FormControlLabel,
    FormLabel,
    IconButton,
    Radio,
    RadioGroup,
    Slider,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./styles.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SortIcon from "@mui/icons-material/Sort";
import CloseIcon from "@mui/icons-material/Close";
import { numberWithCommas } from "../../../myModules";
import Loading from "../../../Components/Loading/Loading";

function valuetext(value) {
    return `${value}°C`;
}

export default function RightSide() {
    const [limitedPrice, setLimitedPrice] = React.useState([100000, 100000000]);
    const [expanded, setExpanded] = React.useState("panel1");
    const [filterMenuIsVisible, setFilterMenuIsVisible] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const filterMenuRef = React.useRef(null);
    const filterMenuBtnRef = React.useRef(null);

    const handleChangePanel = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleLimitedPriceSliderChange = (event, newValue) => {
        setLimitedPrice(newValue);
    };

    const handleFromTextFiledChange = React.useCallback(event => {
        // Remove all character Except numbers from textFieldValue
        const currentValue = event.target.value.replaceAll(/\D/g, "");
        setLimitedPrice(prev => {
            const newLimitedPrice = [Number(currentValue), prev[1]];
            console.log(newLimitedPrice);
            return newLimitedPrice;
        });
    }, []);

    const handleToTextFiledChange = React.useCallback(event => {
        // Remove all character Except numbers from textFieldValue
        const currentValue = event.target.value.replaceAll(/\D/g, "");
        setLimitedPrice(prev => {
            const newLimitedPrice = [prev[0], Number(currentValue)];
            console.log(newLimitedPrice);
            return newLimitedPrice;
        });
    }, []);

    const handleClickFilterMenuBtn = React.useCallback(() => {
        setFilterMenuIsVisible(prev => !prev);
    }, []);

    const handleCloseBtnClick = React.useCallback(() => {
        setFilterMenuIsVisible(false);
    }, []);

    const handleClickSubmitChangesBtn = React.useCallback(()=>{
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    },[])

    React.useEffect(() => {
        if (limitedPrice[0] >= limitedPrice[1]) {
            setLimitedPrice([100000, limitedPrice[0] + 1]);
        }
    }, [limitedPrice]);

    React.useEffect(() => {
        const documentClick = e => {
            if (
                filterMenuIsVisible &&
                filterMenuRef.current &&
                filterMenuBtnRef.current &&
                !filterMenuRef.current.contains(e.target)&&
                !filterMenuBtnRef.current.contains(e.target)
            ) {
                setFilterMenuIsVisible(false);
            }
        };

        document.addEventListener("click", documentClick);

        return ()=>{
        document.removeEventListener("click", documentClick)
        }
    }, [filterMenuIsVisible]);

    return (
        <>
        <Loading open={isLoading} />
            {filterMenuIsVisible ? (
                ""
            ) : (
                <div
                    variant="contained"
                    className={styles.filterMenuBtn}
                    onClick={handleClickFilterMenuBtn}
                >
                    <SortIcon />
                    فیلتر کردن
                </div>
            )}
            <div
                className={styles.rootContainer}
                ref={filterMenuRef}
                style={{
                    right:
                        filterMenuIsVisible && window.innerWidth < 1270
                            ? 0
                            : "-100%",
                }}
            >
                <IconButton
                    className={styles.closeBtn}
                    onClick={handleCloseBtnClick}
                    ref={filterMenuBtnRef}
                >
                    <CloseIcon />
                </IconButton>

                <div className={styles.into}>
                    <h2>فیلتر ها</h2>

                    <div>
                        <FormControlLabel
                            control={<Switch />}
                            label="فقط کالاهای موجود "
                        />
                    </div>
                    {/* 
                        // * panel 1
                                    */}
                    <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChangePanel("panel1")}
                        style={{ background: "transparent" }}
                    >
                        <AccordionSummary
                            dir="rtl"
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                            <Typography> مرتب سازی</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ margin: "auto" }}>
                                <RadioGroup
                                    style={{
                                        marginRight: 50,
                                        marginTop: 20,
                                        marginBottom: 10,
                                    }}
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="newer"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="newer"
                                        labelPlacement="start"
                                        control={<Radio />}
                                        label="جدید ترین ها"
                                    />
                                    <FormControlLabel
                                        value="orderer"
                                        labelPlacement="start"
                                        control={<Radio />}
                                        label="پرفروش ترین ها"
                                    />
                                    <FormControlLabel
                                        value="seener"
                                        labelPlacement="start"
                                        control={<Radio />}
                                        label="پربازدید ترین ها"
                                    />
                                    <FormControlLabel
                                        value="cheaper"
                                        labelPlacement="start"
                                        control={<Radio />}
                                        label="ارزان ترین ها"
                                    />
                                    <FormControlLabel
                                        value="costlyer"
                                        labelPlacement="start"
                                        control={<Radio />}
                                        label="گران ترین ها"
                                    />
                                </RadioGroup>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === "panel2"}
                        onChange={handleChangePanel("panel2")}
                        style={{ background: "transparent" }}
                    >
                        <AccordionSummary
                            dir="rtl"
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                        >
                            <Typography>محدوده قیمت</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.limitPrice}>
                                <div className={styles.priceFiledBox}>
                                    <div>تومان</div>
                                    <TextField
                                        variant="standard"
                                        dir="auto"
                                        value={numberWithCommas(
                                            limitedPrice[0]
                                        )}
                                        onChange={handleFromTextFiledChange}
                                        // style={{textAlign:"right"}}
                                    />
                                    <div>از</div>
                                </div>
                                <div className={styles.priceFiledBox}>
                                    <div>تومان</div>
                                    <TextField
                                        variant="standard"
                                        dir="auto"
                                        value={numberWithCommas(
                                            limitedPrice[1]
                                        )}
                                        onChange={handleToTextFiledChange}
                                        // style={{textAlign:"right"}}
                                    />
                                    <div>تا</div>
                                </div>
                                <Slider
                                    getAriaLabel={() => "Temperature range"}
                                    value={limitedPrice}
                                    step={100000}
                                    onChange={handleLimitedPriceSliderChange}
                                    // valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    max={100000000}
                                    min={100000}
                                />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <div style={{ padding: 10 }}>
                        <Button variant="contained" style={{ width: "100%" }} onClick={handleClickSubmitChangesBtn}>
                            اعمال تغییرات
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
