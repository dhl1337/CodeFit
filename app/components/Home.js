import React, { Component } from 'react';

class Home extends Component {

    render() {

        return (
            <div>
                <section className="intro">
                    <div className="ui.container" id="intro-container">
                        <h1 className="ui header" id="intro-header">CODE FIT</h1>
                        <h2 className="ui header" id="intro-description">Give your brain a code workout</h2>
                        <div className="ui teal medium button" id="login-btn">Lets get started</div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home

