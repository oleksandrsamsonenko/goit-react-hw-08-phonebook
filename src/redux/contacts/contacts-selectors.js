export const getContacts = state => state.contacts.items;

export const getFilteredContacts = state => {
  const { filter, contacts } = state;
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });
  return result;
};

export const getStatus = state => state.contacts.isLoading;
