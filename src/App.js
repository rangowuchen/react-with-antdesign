/*
 * @Author: wuchen
 * @Date: 2019-10-18 10:32:09
 * @LastEditors: wuchen
 * @LastEditTime: 2019-10-21 13:51:11
 * @Description: 
 * @Email: rangowu@163.com
 */
import React, { Component, Fragment } from 'react'
import Router from './router'
import { Button } from 'antd';
import './style.less'  //引入less文件

// Components

class App extends Component {
  render(){
    return(
      <Fragment>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Router />
      </Fragment>
    )
  }
}

export default App