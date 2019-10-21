/*
 * @Author: wuchen
 * @Date: 2019-10-21 11:08:43
 * @LastEditors: wuchen
 * @LastEditTime: 2019-10-21 14:11:16
 * @Description: 
 * @Email: rangowu@163.com
 */
//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件 
import Home from './pages/home';
import About from './pages/about';
import Other from './pages/other';
//引入一些模块
import { BrowserRouter as Router, Route } from "react-router-dom";
// 重定向
import {Redirect} from "react-router-dom";
function router() {
    return (
        <Router>
            <Route path="/home" component={Home} />
            {/* 嵌套路由:
            当我们需要页面的局部变换的时候，就需要用到这个了。比如说标题栏不变，内容根据路由地址引入不同的模块~
            {this.props.children} //这里是嵌套路由展示的地方
             */}
            <Route path="/about" render={() => (
                <About>
                    <Route path="/about/other" component={Other} />
                </About>
            )}>
            </Route>
            <Route path="/" render={
                ()=> (
                <Redirect to="/home"/>)}> 
            </Route>
        </Router>);
}
export default router;