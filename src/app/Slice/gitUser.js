import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//create action
export const createUser = createAsyncThunk(
    "createUser",
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                "https://643e743cc72fda4a0bf6d553.mockapi.io/crud",
                user,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

//Get all user action
export const getAllUser = createAsyncThunk(
    "getUsers",
    async (aaaa, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                "https://643e743cc72fda4a0bf6d553.mockapi.io/crud"
            );
            return data;
        } catch (err) {
            return rejectWithValue("Opps found an error", err.response.data);
        }
    }
);

// update user
export const updateUser = createAsyncThunk(
    "updateUser",
    async ({ id, name, email, age, gender }, { rejectWithValue }) => {
        console.log("update", id, name, email, age, gender)

        try {
            const { data } = await axios.put(
                `https://643e743cc72fda4a0bf6d553.mockapi.io/crud/${id}`,
                { name, email, age, gender },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

// delete single user
export const deleteUser = createAsyncThunk(
    "deleteUser",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(
                `https://643e743cc72fda4a0bf6d553.mockapi.io/crud/${id}`
            );
            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(err.response.data);
        }
    }
);


export const gitUser = createSlice({
    name: "gitUser",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: builder => {

        // Post //
        builder.addCase(
            createUser.pending, (state) => {
                state.loading = true;
            },
        );
        builder.addCase(
            createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            },
        );
        builder.addCase(
            createUser.rejected, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            },
        );

        //Get//
        builder.addCase(getAllUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        builder.addCase(getAllUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.messages;
        })

        //delete //
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
                state.users = state.users.filter((data) => data.id !== id);
            }
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })

        //update
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.map((data) =>
                data.id === action.payload.id ? action.payload : data
            );
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        });
    },
});

// export const { searchUser } = gitUser.actions;
export default gitUser.reducer;