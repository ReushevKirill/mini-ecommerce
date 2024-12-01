export type EndpointsType = '/products' | `/products/${number}` | '/users'

export type ProductCategoryType =
	| 'beauty'
	| 'fragrances'
	| 'furniture'
	| 'groceries'
	| 'home-decoration'
	| 'kitchen-accessories'
	| 'laptops'
	| 'mens-shirts'
	| 'mens-shoes'
	| 'mens-watches'
	| 'mobile-accessories'
	| 'motorcycle'
	| 'skin-care'
	| 'smartphones'
	| 'sports-accessories'
	| 'sunglasses'
	| 'tablets'
	| 'tops'
	| 'vehicle'
	| 'womens-bags'
	| 'womens-dresses'
	| 'womens-jewellery'
	| 'womens-shoes'
	| 'womens-watches'

export interface ProductReviewType {
	rating: number
	comment: string
	date: Date
	reviewerName: string
	reviewerEmail: string
}

export interface ProductType {
	id: number
	title: string
	description: string
	category: ProductCategoryType
	price: number
	discountPercentage: number
	rating: number
	stock: number
	tags: string[]
	brand: string
	sku: string
	weight: number
	dimensions: {
		width: number
		height: number
		depth: number
	}
	warrantyInformation: string
	shippingInformation: string
	availabilityStatus: string
	reviews: ProductReviewType[]
	returnPolicy: string
	minimumOrderQuantity: number
	meta: {
		createdAt: Date
		updatedAt: Date
		barcode: number
		qrCode: string
	}
	images: string[]
	thumbnail: string
}
