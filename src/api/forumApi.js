import AxiosInstance from 'src/helper/AxiosInstance';

const getPosts = () => AxiosInstance.get('/posts').then((res) => res.data);

const getPost = (postId) =>
  AxiosInstance.get(`/posts/${postId}`).then((res) => res.data);

const createPost = (post) => AxiosInstance.post('/posts/', post);

const createComment = (comment) => AxiosInstance.post('/comments/', comment);

const createReport = (report) => AxiosInstance.post('/reports/', report);

const checkUsernameExists = (data) => AxiosInstance.post('/user/unique', data);

export {
  getPosts,
  getPost,
  createPost,
  createComment,
  createReport,
  checkUsernameExists,
};
