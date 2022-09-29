import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
export const getData = contactAdaptor.getSelectors(state => state.contactsReducer);

const initialState = contactAdaptor.getInitialState()
export const contactsSlice = createSlice({
    name: "contactsReducer",
    initialState,
    reducers: {
        addContact: contactAdaptor.addOne,
        deleteItem: contactAdaptor.removeOne,
        deleteAll: contactAdaptor.removeAll,
        updateItem: contactAdaptor.updateOne
    }
});
export const { addContact, deleteItem, deleteAll, updateItem } = contactsSlice.actions
export default contactsSlice.reducer;