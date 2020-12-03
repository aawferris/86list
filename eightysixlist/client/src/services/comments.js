import api from "./apiConfig";

export const getAllComments = async () => {
  const resp = await api.get(`/posts/${id}/comments`);
  return resp.data;
};

export const postComment = async (commentData) => {
  const resp = await api.post(`/posts/${id}/comments`, {
    comment: commentData,
  });
  return resp.data;
};

// NOT USING PUT IN ITERATION 1
// export const putPost = async (id, postData) => {
//   const resp = await api.put(`/posts/${id}`, { post: postData });
//   return resp.data;
// };

export const destroyComment = async (id) => {
  const resp = await api.delete(`/posts/${id}/comments`);
  return resp;
};
