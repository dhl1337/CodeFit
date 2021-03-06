import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                <a className="active item">
                    Home
                </a>
                <a className="item">
                    Messages
                </a>
                <a className="item">
                    Friends
                </a>
                <div className="right menu">
                    <a className="ui item">
                        Logout
                    </a>
                </div>
            </div>
        )
    }
}

export default Navigation