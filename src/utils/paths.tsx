import { userRoles } from "@/utils/constants";

// ########### APP REDIRECT PATHS ############
export const ROOT_PATH = '/';
export const ALL_PATH = '*';
export const LOGIN_PATH = '/login';
export const REGISTER_PATH = '/register';
export const DASHBOARD_PATH = '/dashboard';
export const USERS_PATH = '/users';
export const ACCOUNT = '/account';


// ############ REDIRECT PATHS BY ROLES ############
export const redirectPathByRoles = {
  [userRoles.PUBLIC]: ROOT_PATH,
  [userRoles.MANAGER]: DASHBOARD_PATH,
  [userRoles.ADMIN]: DASHBOARD_PATH,
};