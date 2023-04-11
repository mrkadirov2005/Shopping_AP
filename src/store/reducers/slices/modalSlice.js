import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: [{ isOpen: false, modal: { id: "", modalContent: "" } }],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      console.log(action.payload);
      const isModalExist = state.modals.find(
        (modal) => modal.modal?.id === action.payload?.id
      );

      if (isModalExist) {
      } else {
        state.modals.push({ modal: action.payload, isOpen: true });
      }
    },
  },
});

export const modalActions = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
