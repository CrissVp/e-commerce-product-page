import React, { createContext, ReactNode, useState } from 'react';
import { Product } from '../product';

interface CartItem extends Product {
	quantity: number;
}

export interface CartContextType {
	cartItems: CartItem[];
	setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>{children}</CartContext.Provider>
	);
};

export default CartContext;
