import React, {useState, useEffect} from 'react';
import { useHistory, useParams} from 'react-router-dom'
import { getOnePosts, putPost } from '../services/posts'

import './EditPost.css'

function EditPost(props) {
  const [post, setPost] = useState({
    title: '',
    content: '',
    iamge_url: ''
  });
  const history = useHistory();

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePosts(id);
      setPost(post);
    }
    fetchPost();
  }, [id]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await putPost(id, post);
    setUpdated(updated);
    history.push('/posts')
  }

  return (
    <div id="edit-post-main-container">
      <form onSubmit={handleSubmit}>
        <div id="edit-post-sub-container">
          <h3 id="edit-post-title">Edit Post</h3>
          <div id="edit-post-details-box">
            <div id="edit-title-box">
              <input
                className="edit-post-input"
                type='text'
                name='title'
                value={post.title}
                onChange={handleChange}
                />
            </div>
            <div id="edit-content-box">
              <input
                className="edit-post-input"
                id="edit-content-input"
                type='textarea'
                name='content'
                value={post.content}
                onChange={handleChange}
                />
            </div>
            <div id="edit-image-box">
              <input
                className="edit-post-input"
                type='text'
                name='image_url'
                value={post.image_url}
                onChange={handleChange}
                />
            </div>
            <div id="edit-restaurant-box">
              <input
                className="edit-post-input"
                type='number'
                name='restaurant_id'
                value={post.restaurant_id}
                onChange={handleChange}
                />
            </div>
            </div>
            <button type="submit" id="edit-post-submit-button">Submit</button>
          </div>
        </form>
      </div>
  )
}

export default EditPost;