import { ActionType } from "./types";

const initialState = {
    products: [],
};

export const reducer = (
    state = initialState,
    action: ActionType
) => {
    switch (action.type) {
        case "UPDATE_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        default: state;
    }
};
