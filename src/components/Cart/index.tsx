import useCart from '../../hooks/useCart';
import { useState } from 'react';

import Icon from '../Icon';
import styles from './styles.module.css';

const Cart = () => {
	const { cartItems, removeItem } = useCart();
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.cart}>
			{cartItems.length !== 0 && <span>{cartItems.length}</span>}
			<button aria-label='cart_icon_button' onClick={() => setOpen(!open)} className={styles.cart_icon}>
				<Icon variant={'cart'} size={24} />
			</button>

			{open && (
				<div className={styles.cart_box}>
					<h4>Cart</h4>
					{cartItems.length !== 0 ? (
						<>
							<ul>
								{cartItems.map((cartItem) => (
									<li key={cartItem.name}>
										<div className={styles.cart_image}>
											<img src={cartItem.images.thumbnails[0]} alt='Cart Item Image' />
										</div>
										<div className={styles.cart_details}>
											<span>{cartItem.name}</span>
											<p>
												$
												{`${(cartItem.price * cartItem.discount).toFixed(2)} x ${
													cartItem.quantity
												}`}{' '}
												<strong>
													$
													{(
														(cartItem.price - cartItem.price * cartItem.discount) *
														cartItem.quantity
													).toFixed(2)}
												</strong>
											</p>
										</div>
										<div className={styles.remove_button}>
											<button aria-label='delete_icon_button' onClick={() => removeItem(cartItem.name)}>
												<Icon variant={'delete'} size={16} />
											</button>
										</div>
									</li>
								))}
							</ul>
							<button className={styles.checkout_button}>Checkout</button>
						</>
					) : (
						<div className={styles.empty_message}>
							<p>Your cart is empty.</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Cart;
