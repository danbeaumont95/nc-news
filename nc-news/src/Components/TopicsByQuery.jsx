import React, { Component } from 'react';
import * as api from '../api'
import ErrorDisplayer from './ErrorDisplayer';
import { Link } from '@reach/router'

class TopicsByQuery extends Component {
    state = {
        topics: [],
        isLoading: true,
        errMessage: ''
    }

    componentDidMount() {
        const { topic } = this.props
        this.fetchTopics(topic)
    }

    render() {
        const { topics, errMessage } = this.state;
        if (this.state.isLoading) return <p>Loading...</p>
        if (errMessage) return <ErrorDisplayer msg={errMessage}/>
        return (
            <div>
                <Link to="/topics">
                <p>Return to Topics List</p>
                </Link>
                {topics.map((topic) => {
                    
                    return (
                        <li>
                            <h4>{topic.title}</h4>
                     
                     <p>{topic.body}</p>
                     <p>{topic.author}</p>
                        </li>
                    )
                })}
            </div>
        )
    }

    fetchTopics(topic) {
    api.getTopicsByTopic(topic).then((topics) => {
        this.setState({ topics, isLoading: false })
    })
    .catch((err) => {
        console.dir(err)
        this.setState({errMessage: err.response.status, isLoading: false})
    })
    }
}

export default TopicsByQuery;