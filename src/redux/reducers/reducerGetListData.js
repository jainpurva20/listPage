const INITIAL_STATE = {
    content: {
        listData: [],
        totalItems: '',
        currentPage: '',
        pageSizeRequested: '',
        pageSizeReturned: '',

    },
    searchData: {
        searchString: "",
        searchList: []
    },
    searchStatus: false,
    
}

const getListData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_LIST_DATA':
            let actionData = action.data;
            let content = state.content;

            content.listData = state.content.listData.concat({ ...actionData['content-items'] }.content);
            content.totalItems = actionData['total-content-items'];
            content.currentPage = actionData['page-num-requested'];
            content.pageSizeRequested = actionData['page-size-requested'];
            content.pageSizeReturned = actionData['page-size-returned'];

            return {
                ...state,
                content
            }
        case 'SEARCH_STATUS':
            state.searchStatus = action.status;
            action.status ? state.searchData.searchList = state.content.listData : state.searchData.searchList = [];

            return {
                ...state
            }
        case 'SEARCH_DATA':
            
            state.searchData.searchString = action.keywords;
            state.searchData.searchList = state.content.listData;
            if(action.keywords){
                state.searchData.searchList = state.content.listData.filter((val) =>(val.name).toLowerCase().includes(action.keywords.toLowerCase()));
            }

            return {
                ...state
            }
        default:
            return state
    }
}

export default getListData;