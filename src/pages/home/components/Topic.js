import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends Component {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => (
                        <TopicItem key={item.get('id')}>
                            <img 
                                src={item.get('imgUrl')} 
                                className="topic-pic"
                                alt= ''
                            />
                            {item.get('title')}
                        </TopicItem>
                    ))
                }
                  
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.get('home').get('topicList')
});

export default connect(mapState, null)(Topic);