import { Link } from '@reach/router';
import React, { Component } from 'react';
import * as api from '../api'
import ErrorDisplayer from './ErrorDisplayer';
import TopicsByQuery from './TopicsByQuery';

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
                <h4>Please see all the topics below, and click on a topic to view all articles relating to that topic</h4>
                {/* <TopicsByQuery /> */}
                {console.log(topics, 'in render of topics list')}
                {topics.map((topic) => {
                    return (
                        <li key={topic.slug}>
                            <Link to={`/topics/${topic.slug}`}>
                            <h4>{topic.slug}</h4>
                            
                            </Link>
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