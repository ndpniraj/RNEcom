import {createContext, FC, ReactNode, useContext} from 'react';

type Product = {
  id: number;
};

type cartItem = {
  product: Product;
  count: number;
};

interface ICartContext {
  items: cartItem[];
  updateCart(product: Product, qty: number): void;
  removeFromCart(product: Product): void;
  clearCart(): void;
  countAllItems(): number;
  countTotalPrice(): string;
}

const CartContext = createContext<ICartContext | null>(null);

interface Props {
  children: ReactNode;
}

const CartProvider: FC<Props> = ({children}) => {
  return <CartContext.Provider value={null}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
export default CartProvider;
