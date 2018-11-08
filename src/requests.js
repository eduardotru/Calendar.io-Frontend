import axios from 'axios';

const host = "http://localhost:3000";

export const getUser = (id) => {
  return axios.get(host + '/users/' + id).then((response) => {
    return response;
  }).catch((error) => {
    return null;
  });
};

export const addUser = (username, firstname, lastname, email, phone, password) => {
  return axios.post(host + '/users', {
    username: username,
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    password: password
  }).then((response) => {
    console.log(response);
    return true;
  }).catch((error) => {
    console.log(error);
    return false;
  });
};

export const updateUser = (id, username, firstname, lastname, email, phone, password) => {
  return axios.put(host + '/users/' + id, {
    username: username,
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    password: password
  }).then((response) => {
    return true;
  }).catch((error) => {
    return false;
  });
};

export const getEvents = (id) => {
  return axios.get(host + '/users/' + id + '/events').then((response) => {
    return response;
  }).catch((error) => {
    return [];
  });
};

export const addEvent = (id, dueDate, duration, staticEvent) => {
  return axios.post(host + '/users/' + id + '/events', {
    duration: duration,
    dueDate: dueDate,
    static: staticEvent
  }).then((response) => {
    return true;
  }).catch((error) => {
    return false;
  });
};
