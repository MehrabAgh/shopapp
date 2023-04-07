import React from "react";

/**
 * @type {{
        id: number;
        imgSrc: string;
        title: string;
        count: string;
        cost: number;
    }[]}
 */
const initBasketList = [];
export const BasketContext = React.createContext(initBasketList);
