import React, {Component} from 'react';
import Navigation from './Navigation';

class Dashboard extends Component {
    render() {
        return (
            <div className="ui container">
                <Navigation/>
                <div className="ui middle aligned divided list">
                    <div className="item">
                        <div className="right floated content">
                            <div className="ui green button">Start</div>
                        </div>
                        <div className="content">
                            <div className="ui header">
                                Array
                            </div>
                            <div className="description">
                                example
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;