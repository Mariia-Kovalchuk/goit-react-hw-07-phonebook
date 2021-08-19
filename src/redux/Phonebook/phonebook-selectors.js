import { createSelector } from '@reduxjs/toolkit';

export const GetContactList = state => state.contacts.items;
export const GetFilter = state => state.contacts.filter;

export const GetFilteredContactList = createSelector([GetContactList, GetFilter],
    (contacts, filter) => {
        return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => a.name > b.name ? 1 : -1);
    });