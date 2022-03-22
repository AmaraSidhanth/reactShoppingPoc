const initialState = {
    userList: [],
    searchInputValue: '',
    filteredList: [],
    myCartList: [],
    viewProductList : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_LIST':
            return {
                ...state,
                userList: action.payload
            }
        case 'GET_FILTERED_LIST':
            return {
                ...state,
                filteredList: action.payload
            }
        case 'SEARCH_PRODUCT':
            return {
                ...state,
                searchInputValue: action.payload
            }
        case 'MY_CART_LIST':
            return {
                ...state,
                myCartList: action.payload
            }
        case 'CLEAR_CART_LIST':
            return   {
                ...state,
                myCartList: []
            }
        case 'VIEW_PRODUCT_LIST':
            return {
                ...state,
                viewProductList: action.payload
            }
        default :
            return state
    }
}