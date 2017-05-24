import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './base-section.less';
import hat from './../../../imgs/hat.svg';
class BaseSection extends Component {
    render() {
        return (
                <section className="base-container">
                    <dl style={{width:'100%'}}>
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
                                <div className="base-body-content">
                                    <p className="content-title">主修课程:</p>
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
        );
    }
}

BaseSection.propTypes = {

};

export default BaseSection;