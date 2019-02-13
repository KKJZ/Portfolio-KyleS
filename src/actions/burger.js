export const BURGER = "BURGER";
export const setBurger = burger => ({
    type: BURGER,
    burger
})

export const BURGER_OPEN = "BURGER_OPEN";
export const openBurger = burger => ({
    type: BURGER_OPEN,
    burger
})

export const BURGER_CLOSE = "BURGER_CLOSE";
export const closeBurger = burger => ({
    type: BURGER_CLOSE,
    burger
})