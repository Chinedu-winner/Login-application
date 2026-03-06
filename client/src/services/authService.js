import axiosInstance from '../api/axiosInstance';

export const loginUser = async (email, password) => {
    return axiosInstance.post('/users/login', { email, password });
};

export const signupUser = async (username, email, password) => {
    return axiosInstance.post('/users/signup', { name: username, email, password });
};
