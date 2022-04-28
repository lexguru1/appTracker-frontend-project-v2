import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectUserId } from "../user/selectors";
export const APPLICATIONS_LOADING = "APPLICATIONS_LOADING";
export const APPLICATIONS_DONE_LOADING = "APPLICATIONS_DONE_LOADING";
export const LOG_OUT = "LOG_OUT";

export const applicationsLoading = () => ({ type: APPLICATIONS_LOADING });
export const applicationsDoneLoading = (applications) => ({
  type: APPLICATIONS_DONE_LOADING,
  payload: applications,
});

export const fetchApplications = () => {
  return async (dispatch, getState) => {
    dispatch(applicationsLoading());
    const userId = selectUserId(getState());
    // console.log(userId);
    try {
      const response = await axios.get(`${apiUrl}/lists/one/${userId}`);
      dispatch(applicationsDoneLoading(response.data));
    } catch (e) {
      return e.message;
    }
  };
};

export const createApplication = (company, position, status, jd, appListId) => {
  return async (dispatch, getState) => {
    dispatch(applicationsLoading());
    try {
      const response = await axios.post(`${apiUrl}/applications`, {
        company,
        position,
        status,
        jd,
        appListId,
      });
      dispatch(applicationsDoneLoading(response.data));
      dispatch(fetchApplications());
    } catch (e) {
      return e.message;
    }
  };
};

export const deleteApplication = (id) => {
  return async (dispatch, getState) => {
    dispatch(applicationsLoading());
    try {
      const response = await axios.delete(`${apiUrl}/applications/${id}`);
      dispatch(applicationsDoneLoading(response.data));
      dispatch(fetchApplications());
    } catch (e) {
      return e.message;
    }
  };
};

export const updateApplication = (id, status) => {
  return async (dispatch, getState) => {
    dispatch(applicationsLoading());
    try {
      const response = await axios.patch(`${apiUrl}/applications/${id}`, {
        status,
      });
      dispatch(applicationsDoneLoading(response.data));
      dispatch(fetchApplications());
    } catch (e) {
      return e.message;
    }
  };
};

export const clearApplications = () => ({ type: LOG_OUT });
