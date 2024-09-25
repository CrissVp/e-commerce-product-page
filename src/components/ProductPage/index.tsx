import useCart from '../../hooks/useCart';
import { Product } from '../../product';
import { useState } from 'react';

import Icon from '../Icon';
import ProductImages from '../ProductImages';
import styles from './styles.module.css';

const ProductPage = ({ product }: { product: Product }) => {
	const { addToCart } = useCart();
	const [quantity, setQuantity] = useState(0);

	const handleAddToCart = () => {
		if (quantity !== 0) addToCart(product, quantity);
	};

	return (
		<article className={styles.product_view}>
			<section className={styles.images_section}>
				<ProductImages images={product.images} />
			</section>
			<section className={styles.details_section}>
				<h4>{product.vendor}</h4>
				<h1>{product.name}</h1>
				<p>{product.description}</p>

				<div className={styles.details_price}>
					<h2>
						${(product.price - product.price * product.discount).toFixed(2)}
						<span>{product.discount * 100}%</span>
					</h2>
					<span>${product.price.toFixed(2)}</span>
				</div>

				<div className={styles.section_buttons}>
					<div className={styles.quantity_button}>
						<button
							aria-label='minus_icon_button'
							onClick={() => quantity > 0 && setQuantity((prev) => prev - 1)}
						>
							<Icon variant={'minus'} size={12} />
						</button>
						<span>{quantity}</span>
						<button aria-label='plus_icon_button' onClick={() => setQuantity((prev) => prev + 1)}>
							<Icon variant={'plus'} size={12} />
						</button>
					</div>
					<div className={styles.add_button}>
						<button aria-label='cart_icon_button' onClick={handleAddToCart}>
							<Icon variant={'cart'} size={16} />
							<span>Add To Cart</span>
						</button>
					</div>
				</div>
			</section>
		</article>
	);
};

export default ProductPage;
