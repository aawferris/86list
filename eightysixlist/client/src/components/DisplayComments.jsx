import React, { Component } from 'react';
import DisplayCard from './DisplayCard'

class DisplayComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  render() {
    const COMMENTCARDS = this.props.comments
      .map((comment, index) =>
        index < 8 ? (
          <DisplayCard
            currentUser={this.props.currentUser}
            id={comment.id}
            content={comment.content}
            user={comment.user}
            key={index}
          />
        ) : null
      );

    return (
      <div className="comment-cards-box">
        <div className="comment-cards">{COMMENTCARDS}</div>
      </div>
    );
  }
}

export default DisplayComments;