import axios from 'axios';

const host = "http://localhost:3000";

export const attemptLogin = (username, password) => {
  return axios.get(host + '/login', {
    params: {
      username: username,
      password: password
    }
  }).then((response) => {
    console.log(response);
    return response.data[0];
  }).catch((error) => {
    return -1;
  });
};

export const getUser = (id) => {
  return axios.get(host + '/users/' + id).then((response) => {
    return response.data;
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
    return response.data.id;
  }).catch((error) => {
    return -1;
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
    return response.data;
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

export const deleteEvent = (id, event) => {
  return axios.delete(host + '/users/' + id + '/events/' + event).then((response) => {
    return true;
  }).catch((error) => {
    return false;
  });
};

export const addFriend = (id, friendId) => {
  return axios.post(host + '/users/' + id + '/newFriend', {
    friend_id: friendId
  }).then((response) => {
    return true;
  }).catch((error) => {
    return false;
  });
};

export const getFriends = (id) => {
  return axios.get(host + '/users/' + id + '/friendships').then((response) => {
    return response.data;
  }).catch((err) => {
    return [];
  });
};

export const findUsers = (id, username) => {
  return axios.get(host + '/users/' + id + '/findUsers', {
    params: {
      username: username
    }
  }).then((response) => {
    return response.data;
  }).catch(() => {
    return [];
  });
};
