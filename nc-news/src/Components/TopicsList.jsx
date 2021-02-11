import React, { Component } from 'react';
import * as api from '../api'
import ErrorDisplayer from './ErrorDisplayer';

class TopicsList extends Component {
    state={
        topics: [],
        isLoading: true,
        errMessage: ''
    }

    componentDidMount() {
        this.fetchTopics()
    }

    render() {
        const { topics, errMessage } = this.state;
        if (this.state.isLoading) return <p>Loading...</p>
        if (errMessage) return <ErrorDisplayer msg={errMessage}/>
        return (
            <div>
                {console.log(topics, 'in render of topics list')}
                {topics.map((topic) => {
                    return (
                        <li key={topic.slug}>
                            <h4>{topic.slug}</h4>
                            
                        </li>
                    )
                })}
            </div>
        )
    }

    fetchTopics = () => {
        api.getTopics().then((topics) => {
            this.setState({ topics, isLoading: false })
        })
    }

}

export default TopicsList;