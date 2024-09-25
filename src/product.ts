export const product: Product = {
	name: 'Fall Limited Edition Sneakers',
	vendor: 'SNEAKER COMPANY',
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
	price: 250,
	discount: 0.5,
	images: {
		big: [
			'images/image-product-1.jpg',
			'images/image-product-2.jpg',
			'images/image-product-3.jpg',
			'images/image-product-4.jpg'
		],
		thumbnails: [
			'images/image-product-1-thumbnail.jpg',
			'images/image-product-2-thumbnail.jpg',
			'images/image-product-3-thumbnail.jpg',
			'images/image-product-4-thumbnail.jpg'
		]
	}
};

export interface Product {
	name: string;
	vendor: string;
	description: string;
	price: number;
	discount: number;
	images: {
		thumbnails: string[];
		big: string[];
	};
}
