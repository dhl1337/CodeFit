import React from 'react';
import CodeMirror from 'react-codemirror'

class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            code: `(function () {
     
            
            
    return studentArray
})()`,
            colorLabel: red
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

        var a = eval(this.state.code);
        console.log(a);

    }

    render() {
        var options = {
            lineNumbers: true,
            mode: 'javascript'
        };
        return (
            <div className="ui container">
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
                                <div className="description">
                                    <p>Declare an array named studentArray and add two string to it. One is your full name
                                        and the second is github username</p>
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className="eleven wide column">
                        <div className="ui tabular menu">
                            <a className="item active">
                                Application.js
                            </a>
                        </div>
                        <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options}/>
                        <div className="ui code submit button" onClick={() => this.handleSubmit()}>Submit</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home

