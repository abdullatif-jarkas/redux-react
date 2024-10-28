import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./../slice";
// state is the initial value,, array of object in the store + the action that i need to apply on the state
const store = configureStore({ reducer: { cards: cardReducer } });

export default store;

