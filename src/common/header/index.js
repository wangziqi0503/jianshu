import React from 'react';
import { connect } from 'react-redux';
// import { dispatch } from 'rxjs/internal/observable/range';
import { CSSTransition } from 'react-transition-group';
import { getInputFocus, getInputBlur } from './store/actionCreators';
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSerach,
    Addition,
    Button,
    SearchWrappper
} from './style'
import { GlobalStyles } from '../../statics/iconfont/iconfont';

const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSerach 
                            className={props.focused ? 'focused' : ''}
                            onFocus = {props.handleInputFocus}
                            onBlur = {props.handleInputBlur}
                        ></NavSerach>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
                    </SearchWrappper>
                </Nav>
                <Addition>
                    <Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
                <GlobalStyles />
        </HeaderWrapper>
    )
}


const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        handleInputFocus(){
            const action = getInputFocus();
            dispatch(action);
        },
        handleInputBlur(){
            const action = getInputBlur();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)