import axios from 'axios';
// import thunk from 'redux-thunk';


export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // CREATE_POST: 'CREATE_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=s_topper';


export function fetchPosts() {
 /* axios get */
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${API_KEY}`).then(response => {
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
      // navigate the browser
    }).catch(error => {
    // hit an error do something else!
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: 'FETCH_POST', payload: response.data });
      // change the url with browserhistory
    }).catch(error => {
    // hit an error do something else!
    });
  };
}


export function createPost(post) {
 /* axios post */
  const fields = { title: '', contents: '', tags: '' };
  axios.post(`${ROOT_URL}/posts/${API_KEY}`, fields);
}

export function updatePost(post) {
  /* axios put */
  axios.put(`${ROOT_URL}/posts/${API_KEY}`, post);
}


export function deletePost(id) {
  /* axios delete */
  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
}