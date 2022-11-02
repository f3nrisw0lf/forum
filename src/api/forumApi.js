import AxiosInstance from 'src/helper/AxiosInstance';

const getPosts = () => AxiosInstance.get('/posts').then((res) => res.data);

const getPost = (postId) =>
  AxiosInstance.get(`/posts/${postId}`).then((res) => res.data);

// const createPost = () =>

export { getPosts, getPost };
