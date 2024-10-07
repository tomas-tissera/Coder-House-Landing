// cartContext.js
import { createContext, useContext } from "react";

const cartContext = createContext();

// Hook personalizado para usar el contexto
export const useCartContext = () => {
    return useContext(cartContext);
}

export default cartContext;
    