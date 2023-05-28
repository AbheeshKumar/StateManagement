//Advantage of use context selector is that it minimizes the rendering for usecontext

import {
  useLogin,
  useLogout,
  useAddToCart,
  useUser,
  useCartCount,
  StoreContextProvider,
} from "./store-context-selector";

const Login = () => {
  const login = useLogin();
  const logout = useLogout();

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const UserSection = () => {
  const user = useUser();
  return <div>User: {user}</div>;
};

const AddtoCart = () => {
  const addToCart = useAddToCart();
  return (
    <div>
      <button onClick={addToCart}>Add to Cart </button>
    </div>
  );
};

const CartCount = () => {
  const cartCount = useCartCount();
  return <div>User: {cartCount}</div>;
};

function ContextPage() {
  return (
    <div>
      <Login />
      <UserSection />
      <AddtoCart />
      <CartCount />
    </div>
  );
}

export default function SelectorContextPageWrapper() {
  return (
    <StoreContextProvider>
      <ContextPage />
    </StoreContextProvider>
  );
}
