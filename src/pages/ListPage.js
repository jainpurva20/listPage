
import React from 'react';
import { Card } from './../components/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListData } from './../redux/actions/';
import InfiniteScroll from 'react-infinite-scroll-component';

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            page: 1
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.content !== state.content) {
            return {
                content: props.content,
                searchStatus: props.searchStatus,
                searchData: props.searchData
            }
        }
        return null;
    }
    componentDidMount() {
        this.fetchMoreData();
    }

    /* function used to loadmore data on scroll form the api*/
    fetchMoreData = () => {
        this.props.getListData(`CONTENTLISTINGPAGE-PAGE${this.state.page}.json`);
        this.setState((prevState) => {
            return {
                page: prevState.page + 1
            }
        })
    }

    render() {
        const {content, searchData, searchStatus} = this.state;
        var contentData = "", message = "Loading....";
        if(searchStatus){
            message = "No Data Found......!!!";
            contentData = searchData.searchList;
        } else {
            contentData = content && content.listData;
        }
        if (contentData && contentData.length) {
            let hasMore = true;
            
            /*checking if maximum data length reached then do not load more*/
            if ((content.listData.length >= parseInt(content.totalItems)) || searchStatus) {
                hasMore = false;
            }
            return (
                <InfiniteScroll
                    dataLength={contentData.length}
                    next={this.fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}>
                    <div className="flex flex-wrap">
                        {contentData.map((element, index) => (<Card key={index} data={element} />))}
                    </div>
                </InfiniteScroll>)
        }
        return (
        <div className="text-white text-center p-10 font-bold">{message}</div>
        )
    }
}

const mapStateToProps = (state) => {
    const { getListData } = state;
    return {
        content: Object.assign({}, getListData.content),
        searchStatus:  getListData.searchStatus,
        searchData: getListData.searchData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getListData: bindActionCreators(getListData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);

