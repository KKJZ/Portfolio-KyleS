export const BURGER = "BURGER";
export const setBurger = burger => ({
    type: BURGER,
    burger
})

export const BURGER_OPEN = "BURGER_OPEN";
export const openBurger = () => ({
    type: BURGER_OPEN
})

export const BURGER_CLOSE = "BURGER_CLOSE";
export const closeBurger = () => ({
    type: BURGER_CLOSE
})