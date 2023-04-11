import { authApi } from "../../../api/auth";

export const loginThunk = async (userDetails, { rejectWithValue }) => {
  try {
    const response = await authApi.login(userDetails);
    window.localStorage.setItem("token", response.data.user.token);
    return response.data.user;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
};
