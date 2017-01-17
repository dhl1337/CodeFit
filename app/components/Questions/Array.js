import React from 'react';
import CodeMirror from 'react-codemirror';
import Navigation from '../Navigation';

class Array extends React.Component {

    constructor() {
        super();

        this.state = {
            code: `(function () {
     // ------------ INSERT CODE HERE! ----------------
            
            
    return studentArray
})()`,

        }
    }

    getInitialState() {
        return {
            code: "",
        };
    }

    updateCode(newCode) {
        this.setState({
            code: newCode,
        });
    }

    handleSubmit() {

        if (!Array.isArray) {
            Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }

        try {
            var success = true;
            try {
                eval(this.state.code);
            } catch (e) {
                success = false;
                alert(e);
            }
            if (success) {
                var a = eval(this.state.code);

                if (Array.isArray(a)) {

                    console.log(typeof a[0], typeof a[1]);
                    if (typeof a[0] !== 'string') {
                        console.log('please make sure name is a string');
                    }

                    if (typeof a[1] !== 'number') {
                        console.log('please enter a number');
                    }
                } else {
                    console.log('please assign the studentArray to an array.');
                }

            }
        } catch(e) {
            alert(e)
        }
    }


    render() {
        var options = {
            lineNumbers: true,
            mode: 'javascript'
        };
        return (
            <div>
                <div className="ui container">
                    <Navigation/>
                    <div className="ui stackable grid">
                        <div className="five wide column">
                            <header>
                                <h1 className="ui header">Array</h1>
                                <div className="ui divider"></div>
                                <div className="ui circular labels">
                                    <a className="ui label">
                                        1
                                    </a>
                                    <a className="ui label">
                                        2
                                    </a>
                                    <a className="ui label">
                                        3
                                    </a>
                                    <a className="ui label">
                                        4
                                    </a>
                                    <a className="ui label">
                                        5
                                    </a>
                                </div>
                                <div className="ui segment">
                                    <p>Declare an array named <strong>studentArray</strong> and add two string to it. One is your full name and the second is github username.</p>
                                </div>
                            </header>
                        </div>
                        <div className="eleven wide column">
                            <div className="ui tabular menu">
                                <a className="item active">
                                    Application.js
                                </a>
                            </div>
                            <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)}
                                        options={options}/>
                            <div className="ui right floated button" onClick={() => this.handleSubmit()}>Submit</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Array


