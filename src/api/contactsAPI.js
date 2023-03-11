import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6407b25b8ee73db92e2fcfa4.mockapi.io/contacts',
});

export const getAllContacts = () => contactsInstance.get('/');

export const deleteContact = id => {
  return contactsInstance.delete(`/${id}`);
};

export const addContact = data => {
  return contactsInstance.post('/', data);
};
