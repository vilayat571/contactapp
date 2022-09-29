import contactsSlice from "./slices/contactsSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        contactsReducer: contactsSlice
    }
});