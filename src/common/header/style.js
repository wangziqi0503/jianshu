import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: cover;
`;

export const Nav = styled.div`
    width: 960px;
    padding-right: 70px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a
    }
`;

export const NavSerach = styled.input.attrs({
    placeholder: '搜索'
})`
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder{
        color: #999
    }
    &.focused{
        width: 240px;
    }
    &.slide-enter{
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 60px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    color: #969696;
    font-size：14px;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin{
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transfrom-origin: center center;
    }
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    float: left;
    font-size: 12px;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
`;

export const Addition = styled.div`
    position: absolute;
    height: 56px;
    right: 0;
    top: 0;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding:0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6194;
    font-size: 14px;
    &.reg{
        color:#ec6194;
    }
    &.writting{
        color: #fff;
        background: #ec6149
    }
`;

export const SearchWrappper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused{
            background: #777;
            color: #fff;
        }
    }
`;