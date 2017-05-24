/**
 * Created by guoxiangwen on 2017/5/23.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import avatar from './../../imgs/nanituo.png'

import './about-me.less';
class AboutMe extends Component {
    render() {
        return (
            <section className="about-me">
                {/*avatar*/}
                <section className="about-me-avatar">
                    <img src={avatar} />
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
                            <span>四川省绵阳市</span>
                        </li>
                        <li>
                            <i></i>
                            <span>15008187156</span>
                        </li>
                        <li>
                            <i></i>
                            <span>297236521@qq.com</span>
                        </li>
                    </ul>
                </section>
                {/*professional*/}
                <section>
                    <h3>职业技能</h3>
                    <dl>
                        <dt>java</dt>
                        <dl>33333</dl>
                        <dt>java</dt>
                        <dl>33333</dl>
                        <dt>java</dt>
                        <dl>33333</dl>
                    </dl>
                </section>
                {/*Hobby*/}
                <section>
                    <h3>兴趣爱好</h3>
                    <ul>
                        <li>篮球</li>
                        <li>足球</li>
                        <li>游戏</li>
                        <li>摄影</li>
                    </ul>

                </section>

            </section>
        );
    }
}

AboutMe.propTypes = {

};

export default AboutMe;