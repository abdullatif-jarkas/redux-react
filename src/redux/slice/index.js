import { createSlice } from "@reduxjs/toolkit";
import { cardContent } from "../../data";

const initialState = {
  cards: cardContent,
  firstThreeCards: [],
  lastTenCards: [],
  lastFourBlogs: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    getLastFourCards: (state) => {
      state.lastFourBlogs = state.cards.slice(-4).reverse();
    },
    getFirstThreeCards: (state) => {
      state.firstThreeCards = state.cards.slice(0, 3);
    },
    updateLastTenCards: (state, action) => {
      const selectedCardId = action.payload;
      state.lastTenCards = state.cards
        .filter((card) => card.id !== selectedCardId)
        .slice(-10)
        .reverse();
    },
  },
});

export const {
  updateLastTenCards,
  getFirstThreeCards,
  getAllCards,
  setCurrentPage,
  getLastFourCards,
} = cardSlice.actions;

export default cardSlice.reducer;
