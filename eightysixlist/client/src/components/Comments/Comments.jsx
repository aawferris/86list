import React, {Component} from 'react';
import { getAllComments } from '../../services/comments'

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  async componentDidMount() {
    const comments = await getAllComments();
    this.setState({ comments });
  }

  render() {
    const COMMENTCARDS = this.state.comments
      .filter(comment => this.props.currentUser.post_id === comment.post_id)
      .map((comment, index) =>
        index < 8 ? (
          <div
            id={comment.id}
            content={comment.content}
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

export default Comments;