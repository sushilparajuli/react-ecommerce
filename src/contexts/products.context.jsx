import { createContext, useState } from "react";

import SHOPS from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOPS);
  const value = { products, setProducts };
  return <ProductContext.Provider value={value}>{children} </ProductContext.Provider>;
};
