import axios from 'axios';
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
  } from '../constants/userConstants';

// Login Action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_LOGIN_REQUEST' });
    const { data } = await axios.post('/api/users/login', { email, password });
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAIL',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: 'USER_LOGOUT' });
};

// Get User Profile Action
export const getUserProfile = () => async (dispatch, getState) => {
  try {
    dispatch({ type: 'USER_PROFILE_REQUEST' });
    const { userInfo } = getState().user;
    const { data } = await axios.get('/api/users/profile', {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: 'USER_PROFILE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'USER_PROFILE_FAIL',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Update User Profile Action
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'USER_UPDATE_PROFILE_REQUEST' });
    const { userInfo } = getState().user;
    const { data } = await axios.put('/api/users/profile', user, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: 'USER_UPDATE_PROFILE_SUCCESS', payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_UPDATE_PROFILE_FAIL',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};