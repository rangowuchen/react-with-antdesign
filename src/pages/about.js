/*
 * @Author: wuchen
 * @Date: 2019-10-21 11:14:04
 * @LastEditors: wuchen
 * @LastEditTime: 2019-10-21 11:32:58
 * @Description: 
 * @Email: rangowu@163.com
 */
import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (<h1>
      欢迎，这里是About
      {this.props.children}
    </h1>)
  }
}