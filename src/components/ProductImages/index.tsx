import { Product } from '../../product';
import { useState } from 'react';

import Icon from '../Icon';
import styles from './styles.module.css';

interface ProductImagesProps {
	images: Product['images'];
	isLightbox?: boolean;
}

const ProductImages = ({ images, isLightbox }: ProductImagesProps) => {
	const [imageOnDisplay, setImageOnDisplay] = useState(0);
	const [lightbox, setLightbox] = useState(false);

	const handleShowLightbox = () => {
		if (isLightbox) return;
		setLightbox(true);
	};

	const handlePrevious = () => {
		if (!(imageOnDisplay > 0)) return;
		setImageOnDisplay((prev) => prev - 1);
	};

	const handleNext = () => {
		if (!(imageOnDisplay < images.big.length - 1)) return;
		setImageOnDisplay((prev) => prev + 1);
	};

	return (
		<>
			<div className={styles.images}>
				<div className={styles.images_full}>
					<button
						onClick={handlePrevious}
						aria-label='previous_icon_button'
						className={`${styles.arrow_button} ${isLightbox ? styles.lightbox_arrow_button : ''}`}
					>
						<Icon variant={'previous'} size={16} />
					</button>
					<button aria-label='image_button' onClick={handleShowLightbox}>
						<img src={images.big[imageOnDisplay]} alt='Full Product Image' />
					</button>
					<button
						onClick={handleNext}
						aria-label='next_icon_button'
						className={`${styles.arrow_button} ${isLightbox ? styles.lightbox_arrow_button : ''}`}
					>
						<Icon variant={'next'} size={16} />
					</button>
				</div>
				<div className={styles.images_thumbnails}>
					{images.thumbnails.map((thumbnail, index) => (
						<button
							key={`thumbnail_${index}`}
							aria-label={`thumbnail_${index}_button`}
							onClick={() => setImageOnDisplay(index)}
							className={imageOnDisplay === index ? styles.image_active : ''}
						>
							<img src={thumbnail} alt={`Product Thumbnail ${index}`} />
						</button>
					))}
				</div>
			</div>

			{lightbox && (
				<div className={styles.images_lightbox}>
					<div className={styles.lightbox_container}>
						<button aria-label='close_icon_button' onClick={() => setLightbox(false)}>
							<Icon variant={'close'} size={16} />
						</button>
						<ProductImages images={images} isLightbox />
					</div>
				</div>
			)}
		</>
	);
};

export default ProductImages;
