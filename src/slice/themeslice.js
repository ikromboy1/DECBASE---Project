// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     mode: "light",
// }

// const themeSlice = createSlice({
//     name: "theme",
//     initialState,
//     reducers: {
//         toggleTheme: (state) => {
//             state.mode = state.mode === "light" ? "dark" : "light";
//         }
//     },
// })

// export const {toggleTheme} = themeSlice.actions;

// export default themeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// 🔐 Brauzerdan oldindan saqlangan theme ni olamiz
const savedTheme = localStorage.getItem("theme") || "light";

const initialState = {
  mode: savedTheme,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode); // 🔒 Yangi holatni saqlab qo'yamiz
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
