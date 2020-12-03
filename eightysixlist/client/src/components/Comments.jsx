import React from 'react';

function Comments(props) {
  return (
    <div>
      {props.post.comment}
    </div>
  );
}

export default Comments;