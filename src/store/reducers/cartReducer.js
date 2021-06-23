import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems"

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
      case ADD_TO_CART:
            let jobAdvertisement = state.cartItems.find(c => c.jobAdvertisement.id == payload.id)
            if (jobAdvertisement) {
                jobAdvertisement.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, jobAdvertisement: payload }]
                }
            }


        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.jobAdvertisement.id !== payload.id)
            }

        default:
            return state;
    }
}