import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSerach,
    Addition,
    Button,
    SearchWrappper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'
import { GlobalStyles } from '../../statics/iconfont/iconfont';

class Header extends Component {

    
    getListArea(){

        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        //immutable数组转化为普通JS数组
        const newList = list.toJS();
        const pageList = [];


        //判断数组里面有没有内容，避免ajax还没请求数据时加载组件导致数组内容为空，key变成undefine
        if(newList.length){
            for (let i = (page - 1 ) * 10; i < page * 10; i++){
                //判断数组内容是否有值，避免最后一页条数不足10条时显示undefine
                if(newList[i]){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }   
            }
        }

        

        if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                        <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render() {

        const { focused, handleInputFocus, handleInputBlur, list } = this.props;

        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                    <SearchWrappper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSerach 
                            className={focused ? 'focused' : ''}
                            onFocus = {() => handleInputFocus(list)}
                            onBlur = {handleInputBlur}
                        ></NavSerach>
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62d;</i>
                    {this.getListArea(focused)}
                    </SearchWrappper>
                </Nav>
                <Addition>
                    <Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
                <GlobalStyles />
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage'])
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        handleInputFocus(list){
            if ( list.size === 0 ) dispatch(actionCreators.getList())
            dispatch(actionCreators.getInputFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.getInputBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            //获取spin的transform旋转角度并将非数字（deg）去除
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle + 360 )+'deg)';

            if (page < totalPage ) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
           
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)