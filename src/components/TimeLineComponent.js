import React, { Component } from 'react';

class TimeLineComponent extends Component {
   
    render() {
        return (<div className="p-2" >
            <div>{this.props.createdAt}</div>
            <div>{this.props.title}</div>
            <div className="p-1  bg-white">
                {this.props.children}
            </div>
        </div>)
    }
}

export default TimeLineComponent;