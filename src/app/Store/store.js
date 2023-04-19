import { configureStore } from "@reduxjs/toolkit";
import gitUser from "../Slice/gitUser";

export const store = configureStore({
    reducer: {
        gitUser,
    },
});