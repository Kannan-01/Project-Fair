import { BASE_URL } from "./baseurl";
import { commonAPI } from "./commonAPI";

// register
export const registerAPI = async (user) => {
  return await commonAPI("POST", `${BASE_URL}/user/register`, user, "");
};

// login
export const loginAPI = async (user) => {
  return await commonAPI("POST", `${BASE_URL}/user/login`, user, "");
};

// addProject
export const addProjectAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${BASE_URL}/project/add`, reqBody, reqHeader);
};

// home project
export const homeProjectAPI = async () => {
  return await commonAPI("GET", `${BASE_URL}/projects/home-projects`, "", "");
};

// allProjects
export const allProjectsAPI = async (searchKey, reqHeader) => {
  return await commonAPI(
    "GET",
    `${BASE_URL}/projects/all?search=${searchKey}`,
    "",
    reqHeader
  );
};

// user projects
export const userProjectsAPI = async (reqHeader) => {
  return await commonAPI("GET", `${BASE_URL}/user/all-projects`, "", reqHeader);
};

// edit project
export const editProjectAPI = async (projectId, reqBody, reqHeader) => {
  return await commonAPI(
    "PUT",
    `${BASE_URL}/project/edit/${projectId}`,
    reqBody,
    reqHeader
  );
};

// delete project

export const deleteProjectAPI = async (projectId, reqHeader) => {
  return await commonAPI(
    "DELETE",
    `${BASE_URL}/project/remove/${projectId}`,
    {},
    reqHeader
  );
};
