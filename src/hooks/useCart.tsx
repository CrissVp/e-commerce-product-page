import CartContext, { CartContextType } from '../contexts/cartContext';
import { Product } from '../product';
import { useContext } from 'react';

const useCart = () => {
	const { cartItems, setCartItems } = useContext(CartContext) as CartContextType;

	const addToCart = (product: Product, quantity: number) => {
		if (cartItems.find((item) => item.name === product.name)) return;
		setCartItems((data) => data.concat({ ...product, quantity }));
	};

	const removeItem = (name: Product['name']) => {
		setCartItems((data) => data.filter((item) => item.name !== name));
	};

	return { cartItems, addToCart, removeItem };
};

export default useCart;
