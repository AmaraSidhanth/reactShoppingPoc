export const searchProduct = (searchInputValue) =>  {
    return {
        type: 'SEARCH_PRODUCT',
        payload: searchInputValue
    }
}

export const getUserList = (userList) =>  {
    return {
        type: 'GET_USER_LIST',
        payload: userList
    }
}

export const getFilteredList = (filteredList) => {
    return {
        type: 'GET_FILTERED_LIST',
        payload: filteredList
    }
}

export const addToCartList = (myCartList) => {
    return {
        type: 'MY_CART_LIST',
        payload: myCartList
    }
}
// export const viewProductList = (viewProductList) => {
//     return {
//         type: 'VIEW_PRODUCT_LIST',
//         payload: viewProductList
//     }
// }
export const viewProductList = (viewProductList) => {
    return {
        
        type: 'VIEW_PRODUCT_LIST',
        payload: viewProductList
    }
}
export const clearCartList = () => {
    return {
        type: 'CLEAR_CART_LIST',
    }
}