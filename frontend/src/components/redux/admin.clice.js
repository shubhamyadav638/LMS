import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  checkmail,
  deleteUser,
  getAllUsers,
  login,
  updateUser,
} from "../apis/callApi";
import { toast } from "react-hot-toast";

export const createThunk = createAsyncThunk(
  "create",
  async (formData, { rejectWithValue }) => {
    try {
      const result = await checkmail(formData);
      if (result) {
        toast.success("data sent successfully");
        // console.log(result)
        return result;
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// login thunk.............................

export const loginThunk = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);
      return result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

/// get user thunk....................

export const getUserThunk = createAsyncThunk("getuser", async () => {
  try {
    const result = await getAllUsers();
    return result;
  } catch (e) {
    throw new Error(e.message);
  }
});

//// delete user admin thunk...........
export const deleteUserThunk = createAsyncThunk(
  "deleteuser",
  async (id, { rejectWithValue }) => {
    try {
      const result = await deleteUser(id);
      return result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//////////// updateUser admin thunk...........

export const updateUserThunk = createAsyncThunk(
  "updateuser",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const result = await updateUser({ id, formData });
      return result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);



const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    users: [],
    error: null,
  },
  // reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(createThunk.rejected, (state, action) => {
      state.loading = true;
    });

    // login builder........................

    builder.addCase(loginThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
    });

    // get user builder.......
    builder.addCase(getUserThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUserThunk.rejected, (state, action) => {
      state.loading = false;
    });

    // delete user builder.........

    builder.addCase(deleteUserThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(deleteUserThunk.rejected, (state, action) => {
      state.loading = false;
    });

    // update user builder.........

    builder.addCase(updateUserThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(updateUserThunk.rejected, (state, action) => {
      state.loading = false;
    });

    
  },
});

export default adminSlice.reducer;
