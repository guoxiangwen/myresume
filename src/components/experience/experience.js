import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './experience.less';
import hat from './../../imgs/hat.svg';

class Experience extends Component {
    render() {
        return (
            <main>
                <section className="base-container">
                    <dl>
                        <dt className="base-container-header">
                            <img src={hat} alt="" />
                            <span className="base-container-title">教育背景</span>
                        </dt>
                        <dd>
                            <div className="base-container-body">
                                <div className="base-body-title">
                                    <span>2008.09-2012.07</span>
                                    <span>北京大学</span>
                                    <span>计算机科学技术</span>
                                </div>

                                <div className="">
                                    <p>主修课程:</p>
                                    <ul>
                                        <li>java,c++</li>
                                        <li>java,c++</li>
                                        <li>java,c++</li>
                                    </ul>
                                </div>
                            </div>
                        </dd>
                    </dl>
                </section>
            </main>
        );
    }
}

Experience.propTypes = {

};

export default Experience;