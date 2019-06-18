import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    float: left
    width: 625px;
    .banner-img{
        width: 625px;
        height: 240px;
    }
`;

export const TopicWrapper = styled.div`
    margin-top: 20px;
    padding: '20px 0 10px 0';
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    margin-left: 18px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-bottom: 18px;
    .topic-pic {
        width: 32px;
        height: 32px;
        float: left;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
    }
    .desc {
        line-height: 24px;
        color: #999;
    }
`;

export const RecommentWrapper = styled.div`
    margin:30px 0;
    width: 280px;
`;

export const RecommentItem = styled.div`
    display: block;
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl}) no-repeat;
    background-size: cover;
`;


export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5;
    color: #fff;
    margin: 30px 0;
    border-radius: 20px;
    cursor: pointer;
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const BackTop = styled.div`
    position: fixed;
    width:60px;
    height:60px;
    text-align:center;
    line-height:60px;
    right:100px;
    bottom:100px;
`;

