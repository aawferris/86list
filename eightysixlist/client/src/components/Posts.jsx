import React from 'react';

function Posts(props) {
  return (
    <div>
      {
        props.posts.map(post => (
          <p key={post.id}>{post.title}</p>
        ))
      }
    </div>
  );
}

export default Posts;