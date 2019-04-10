# React-简书项目知识点记录

## ES6语法知识

1.`import { reducer as headerReducer }from '../common/header/store';`    

引入reducer时将其重新命名为headerReducer   

2.`import * as a from './b';`   

引入b文件中所有属性赋值给a,例如b文件中的c方法，调用时可以写作a.c  

## React语法

### ref

ref可以用来获取DOM的真实节点  


## redux

### redux 常用中间件

#### redux-thunk

<a href="https://www.jianshu.com/p/b1a039feac26" target="_blank">redux-thunk 简书</a>

#### redux-saga
<a href="https://redux-saga-in-chinese.js.org/docs/api/index.html" target="_blank">redux-sage API教程</a>
<a href="https://www.jianshu.com/p/6f96bdaaea22" target="_blank">redux-sage 简书</a>

### combineReducers

主要功能： 将reducer拆分到各个组件中最后再合并  

<a href="https://www.jianshu.com/p/6a041ad8abdb" target="_blank">combineReducers 简书</a>

### immutable

主要功能： 管理redux中的state数据，使其不能被改变，简单化代码处理不需要再拷贝一份state做处理

<a href="https://immutable-js.github.io/immutable-js/" target="_blank">combineReducers 简书</a>

### REDUX_DEVTOOLS

## style-components
1.style-components;区块化CSS  
2.reset-css;标准化CSS格式，进行统一  

## react-transition-group

## icon-font

