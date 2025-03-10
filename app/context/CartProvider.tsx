import {createContext, FC, ReactNode, useContext, useState} from 'react';

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
  const [cartItems, setCartItems] = useState<cartItem[]>([]);

  const updateCart = (product: Product, qty: number) => {
    const finalCartItems = [...cartItems];
    const index = finalCartItems.findIndex(
      item => item.product.id === product.id,
    );

    /* if the given product is not in the cart,
        add this as new with the given qty */
    if (index === -1) {
      finalCartItems.push({count: qty, product});
    } else {
      // if the given product is already in the cart just update the qty
      finalCartItems[index].count += qty;
    }

    // if the given qty is in negative and final qty becomes zero
    // remove that product from the cart
    if (finalCartItems[index]?.count <= 0) {
      removeFromCart(product);
    } else {
      setCartItems(finalCartItems);
    }
  };

  const removeFromCart = (product: Product) => {};

  const clearCart = () => {};

  const countAllItems = () => {
    return cartItems.reduce((acc, cartItem) => (acc += cartItem.count), 0);
  };

  const countTotalPrice = () => {
    return '0';
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        updateCart,
        removeFromCart,
        clearCart,
        countAllItems,
        countTotalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartProvider;
