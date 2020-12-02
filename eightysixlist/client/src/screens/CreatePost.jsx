import React from 'react';
import { postPost } from '../services/posts'

function CreatePost(props) {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image_url: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCreate = async (postData) => {
    const newPost = await postPost(postData);
    setPosts(prevState => [...prevState, newPost]);
    history.push('/posts');
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleCreate(formData);
    }}>
      <h3>Create Post</h3>
      <div id="create-title-box">
        <label>Title:</label>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
          />
      </div>
      <div id="create-content-box">
        <label>Content:</label>
        <input
          type='text'
          name='content'
          value={formData.content}
          onChange={handleChange}
          />
      </div>
      <div id="create-image-box">
        <label>Link a photo:</label>
        <input
          type='text'
          name='image'
          value={formData.image_url}
          onChange={handleChange}
          />
        </div>
      <button>Submit</button>
    </form>
  )
}

export default CreatePost;