import React from 'react';

class EasyQuestion extends React.Component {
    render() {
        return (
            <div>
                <div className="ui segment">
                    <p>A <input type="text"/> is a inner function that has access to the variables in the outer (enclosing) function's scope chain. It has access to variables in three scopes; specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope, and (3) global variables.</p>
                </div>
            </div>
        )
    }
};

export default EasyQuestion