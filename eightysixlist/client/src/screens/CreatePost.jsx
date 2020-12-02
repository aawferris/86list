import React, {useState} from 'react';
import { useHistory} from 'react-router-dom'
import { postPost } from '../services/posts'

import './CreatePost.css'

function CreatePost(props) {
  const [post, setPost] = useState({
    title: '',
    content: '',
    image_url: ''
  });
  const [isCreated, setCreated] = useState(false)
  const history = useHistory();
  // const [formData, setFormData] = useState({
  //   title: '',
  //   content: '',
  //   image_url: ''
  // })

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }

  // const handleCreate = async (postData) => { //do I need this post data parameter or can I do this like in p3 with Express?
  //   const newPost = await postPost(postData);
  //   setPosts(prevState => [...prevState, newPost]);
  //   history.push('/posts');
  // }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await postPost(post)
    setCreated({ created })
    history.push('/posts')
  }

  return (
    <div id="create-post-main-container">
      <form onSubmit={(e) => {
        // e.preventDefault();
        // props.handleCreate(formData);
        handleSubmit();
      }}>
        <div id="create-post-sub-container">
          <h3 id="create-post-title">Create Post</h3>
          <div id="create-post-details-box">
            <div id="create-title-box">
              <input
                className="create-post-input"
                type='text'
                placeholder='Title'
                name='title'
                value={post.title}
                onChange={handleChange}
                />
            </div>
            <div id="create-content-box">
              <input
                className="create-post-input"
                id="create-content-input"
                type='textarea'
                placeholder='Whactha wanna say?'
                name='content'
                value={post.content}
                onChange={handleChange}
                />
            </div>
            <div id="create-image-box">
              <input
                className="create-post-input"
                type='text'
                placeholder='Image URL'
                name='image'
                value={post.image_url}
                onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" id="create-post-submit-button">Submit</button>
          </div>
        </form>
      </div>
  )
}

export default CreatePost;