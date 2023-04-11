import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/Routes";
import { AsyncThunks } from "../store/actions";
import { userActions } from "../store/reducers/slices/userSlice";
import { getUser, getUserError, getUserLoading } from "../store/selectors";

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const error = useSelector(getUserError);
  const loading = useSelector(getUserLoading);

  const fetchMyProfile = async () => {
    await dispatch(AsyncThunks.getMyProfile());
  };

  const logout = () => {
    dispatch(userActions.logout());
    navigate(ROUTES.LOGIN);
  };

  useEffect(() => {
    fetchMyProfile();
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <div>
      {error && <p>{error.message}</p>}
      <h1>{user.username}</h1>
      <h3>{user.phoneNumber}</h3>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default UserPage;
