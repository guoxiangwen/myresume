import React, {Component} from 'react';
import Header from './header/index';
import AboutMe from './about-me/index';
import Experience from './experience/index';

import './app.less';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-container">
                {/*left*/}
                <section className="app-left">
                    <AboutMe/>
                </section>
                {/*right*/}
                <section className="app-right">
                   <Experience /> 
                </section>
            </div>
        );
    }
}


export default App
