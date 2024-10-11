// cartContext.js
import { createContext, useContext } from "react";

const cartContext = createContext();

export const useCartContext = () => {
    return useContext(cartContext);
}

export default cartContext;
