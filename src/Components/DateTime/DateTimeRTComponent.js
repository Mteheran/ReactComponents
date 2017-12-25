import React, { Component } from 'react';

class DateTimeRTComponent extends Component {

    constructor() {
        super();     

        this.state = { date : '' }
    }
    
    componentDidMount() {

        this.interval = setInterval(() => this.setState({ date: (new Date().toLocaleTimeString()) }), 1);

    } 

    render() {
            return(
                <div>
                    <h2 className="App">Using Interval - DateTime real time</h2>
                    <h4>src\Components\DateTime\DateTimeRTComponent.js</h4>
                    <h4>{this.state.date}</h4>
                </div>
            );
    }
}
export default DateTimeRTComponent;