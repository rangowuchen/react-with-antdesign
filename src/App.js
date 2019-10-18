/*
 * @Author: wuchen
 * @Date: 2019-10-18 10:32:09
 * @LastEditors: wuchen
 * @LastEditTime: 2019-10-18 11:13:39
 * @Description: 
 * @Email: rangowu@163.com
 */
import React, { Component, Fragment } from 'react'
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
      </Fragment>
    )
  }
}

export default App