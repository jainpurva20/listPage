import {getData} from './../../helper/apiUtils';

export const getListData = (url) => {
    return async dispatch => {
        let listData = await getData(`/API/${url}`)
        if(listData && listData.page){
            dispatch({ type: 'GET_LIST_DATA',data: listData.page})
        }
    }    
}


export const searchData = (keywords) => {
    return async dispatch => {
            dispatch({ type: 'SEARCH_DATA', keywords})
    }    
}

export const searchStatus = (status) => {
    return async dispatch => {
            dispatch({ type: 'SEARCH_STATUS', status})
    }    
}




