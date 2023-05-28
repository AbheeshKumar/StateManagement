import { useState, useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";

const useStore = () => {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return {
    user,
    cartCount,
    login: useCallback(() => setUser("jack"), []),
    logout: useCallback(() => setUser(""), []),
    addtocart: useCallback(() => setCartCount((prev) => prev + 1), []),
  };
};

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => (
  <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
);

export const useLogin = () => useContextSelector(StoreContext, (s) => s.login);
export const useLogout = () =>
  useContextSelector(StoreContext, (s) => s.logout);
export const useUser = () => useContextSelector(StoreContext, (s) => s.user);
export const useAddToCart = () =>
  useContextSelector(StoreContext, (s) => s.addtocart);
export const useCartCount = () =>
  useContextSelector(StoreContext, (s) => s.cartCount);
