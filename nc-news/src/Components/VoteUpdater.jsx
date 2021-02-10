import React, { Component } from 'react';

import * as api from '../api'

class VoteUpdater extends Component {

state={
    voteChange: 0
}

render() {
const {votes} = this.props
const {voteChange} = this.state;


return (
    <div>
        <button onClick={() => {this.handleClick(1)}}>Up</button>
        <p>Votes: {votes + voteChange}</p>
        <button onClick={() => {this.handleClick(-1)}}>Down</button>
    </div>
)
}
handleClick = (voteDifference) => {
    const { article_id } = this.props;
    this.setState((currentState) => {
        return {voteChange: currentState.voteChange + voteDifference}
    })
    api.patchArticleVotes(article_id, voteDifference)
    
    .catch(console.log)
    console.log(voteDifference)
}

}

export default VoteUpdater;