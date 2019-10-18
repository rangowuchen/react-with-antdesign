/*
 * @Author: wuchen
 * @Date: 2019-10-18 10:45:02
 * @LastEditors: wuchen
 * @LastEditTime: 2019-10-18 11:34:09
 * @Description: 
 * @Email: rangowu@163.com
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { '@primary-color': '#1DA57A' }, # 这里不注释掉，那你的无法修改主题色primary-color 这里很坑的 要注意！
  }),
);