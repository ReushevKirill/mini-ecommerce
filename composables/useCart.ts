import { useCartStore } from '~/store/cartStore'

export const useCart = () => {
	const cartStore = useCartStore()
	const { cartItems } = storeToRefs(cartStore)
	const { addToCart, deleteFromCart } = cartStore

	const {_getItemBase, _setItemBase, _parseBase} = useLocalStorage()
  const CART_KEY_LS: string = 'cart'

	const getCartLS = _getItemBase(CART_KEY_LS)
	const setCartLS = _setItemBase(CART_KEY_LS)
	const parseCartLS = _parseBase(CART_KEY_LS)

	return {
		cartItems,
		addToCart,
		deleteFromCart,
		getCartLS,
		setCartLS,
		parseCartLS
	}
}
