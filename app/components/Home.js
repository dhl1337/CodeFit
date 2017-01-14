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

    handleSubmit() {
        console.log(this.state.code);
    }

    render() {
        var options = {
            lineNumbers: true,
            mode: 'javascript'
        };
        return (
            <div className="ui container">
                <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options}/>
                <div className="ui button" onClick={() => this.handleSubmit()}>Submit</div>
            </div>
        )


    }
}

export default Home

