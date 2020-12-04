import React, { Component } from 'react';

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
          <div>
            {/* currentUser={this.props.currentUser}
            id={comment.id}
            content={comment.content}
            key={index} */}
            <p>{comment.content}</p>
          </div>
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