export const GetContactList = state => state.contacts.items;
export const GetFilter = state => state.contacts.filter;

export const GetFilteredContactList = state => {
    const contacts = GetContactList(state);
    const filter = GetFilter(state);
   return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => a.name > b.name ? 1 : -1);
}