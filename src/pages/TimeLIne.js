import React, { Component } from 'react';
import { TimeLineComponent } from '../components';

class TimeLine extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (<div>
           {this.props.children}
        </div>)
    }
}

export default TimeLine