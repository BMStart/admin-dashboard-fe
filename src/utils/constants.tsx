
// ###########################################
export const userRoles = {
  PUBLIC: "PUBLIC",
  MANAGER: "MANAGER",
  ADMIN: "ADMIN",
} as const;


// ############ BREAKPOINTS ############
// Define the breakpoints object without types
const breakpointsRaw = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

// Define the type TBreakpoints using keyof typeof breakpointsRaw
export type TBreakpoints = keyof typeof breakpointsRaw;

// Use mapped types to create breakpoints with the desired type
export const breakpoints: { [key in TBreakpoints]: number } = breakpointsRaw;

// ############ PAGINATION ############
export const PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [10, 20, 30, 40, 50];