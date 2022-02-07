export enum ProductActionsTypes{
    GET_ALL_PRODUCTS = "[Product] get all products",
    GET_SELECTED_PRODUCTS = "[Product] get selected products",
    GET_IVAILABLE_PRODUCTS = "[Product] get avaible products",
    SEARCH_PRODUCTS = "[Product] get search products",
    NEW_PRODUCT = "[product] new product",
    SELECT_PRODUCT = "[product] select product",
    EDIT_PRODUCT = "[product] edit product",
    DELECT_PRODUCT = "[product] delect product",
}
export interface ActionEvent{
    type: ProductActionsTypes,
    payload:any
}
export enum DataStateEnum{
    LOADING,
    LOADED,
    ERROR,
}

export interface AppDataState<T>{
    dataState: DataStateEnum;
    data?: T,
    errorMessage?:string
}