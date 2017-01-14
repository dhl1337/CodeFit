import React from 'react';
import CodeMirror from 'react-codemirror'

class Home extends React.Component {

    constructor() {
        super();

        this.state = {
            code: "// Code",
        }
    }

    getInitialState() {
        return {
            code: "// Code",
        };
    }

    updateCode(newCode) {
        this.setState({
            code: newCode,
        });
    }

    render() {
        var options = {
            lineNumbers: true
        };
        return (
            <div className="ui container">
                <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options}/>
                <div className="ui button">Submit</div>
            </div>
        )


    }
}

export default Home

