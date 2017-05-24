/**
 * Created by guoxiangwen on 2017/5/23.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import avatar from './../../imgs/logo.svg'

import './about-me.less';
class AboutMe extends Component {
    render() {
        return (
            <section className="about-me">
                {/*avatar*/}
                <section className="about-me-avatar">
                    <img src={avatar} width="150" height="200" />
                </section>
                {/*baseInfo*/}
                <section className="about-me-baseInfo">
                    <ul>
                        <li>
                            <i></i>
                            <span>24岁</span>
                        </li>
                        <li>
                            <i></i>
                            <span>24岁</span>
                        </li>
                        <li>
                            <i></i>
                            <span>24岁</span>
                        </li>
                        <li>
                            <i></i>
                            <span>24岁</span>
                        </li>
                    </ul>
                </section>
            </section>
        );
    }
}

AboutMe.propTypes = {

};

export default AboutMe;