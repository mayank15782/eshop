import * as actions from './actions';

const initialState = {
    products: []
};

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case actions.change_products: {
            return {
                ...state,
                products: action.payload,
            };
        }
        default :
            return state;
    }
};

export default appReducer;