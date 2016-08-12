import axios from 'axios';
// import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};


// const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const ROOT_URL = 'https://sydniblog.herokuapp.com/api';
const API_KEY = '?key=s_topper';

// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    browserHistory.push('/');
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}


export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${API_KEY}`).then(response => {
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: 'FETCH_POST', payload: response.data });
    }).catch(error => {
      console.log(error);
    });
  };
}


export function createPost(post) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } })
    .then(response => {
      dispatch({ type: 'CREATE_POST', payload: response.data });
      browserHistory.push('/');
    }).catch(error => {
      console.log(error);
    });
  };
}

// kept original url instead of blahb alhb
// axios.post(`${ROOT_URL}/posts/${API_KEY}`, post)

export function updatePost(id, post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: 'UPDATE_POST', payload: response.data });
      browserHistory.push('/');
    }).catch(error => {
      console.log(error);
    });
  };
}


export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({ type: 'DELETE_POST', payload: response.data });
      browserHistory.push('/');
    }).catch(error => {
      console.log(error);
    });
  };
}


export function signinUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}


export function signupUser({ username, email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { username, email, password })
    .then(response => {
      dispatch({ type: ActionTypes.AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    }).catch(error => {
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}
