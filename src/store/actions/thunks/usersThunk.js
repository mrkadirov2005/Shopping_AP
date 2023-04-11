import { api } from "../../../api/axios";
import endpoints from "../../../api/endpoints";

export const getMyProfileThunk = async (userDetails, { rejectWithValue }) => {
  try {
    const response = await api.get(endpoints.users.profile);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
};
