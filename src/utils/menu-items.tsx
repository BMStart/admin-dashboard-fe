import { userRoles } from "@utils/constants";

// ### MENU ITEMS BY USER ###
export const userMainNavigationLinks = {
  [userRoles.ADMIN]: [
    {
      // icon: <VscGraph />,
      name: "Dashboard",
      route: "/dashboard",
      className: "dashboard",
    },
    {
      // icon: <FaConciergeBell />,
      name: "Recipes",
      route: "/recipes",
      className: "recipes",
    },
    {
      // icon: <FaUsersCog  />,
      name: "Users",
      route: "/users",
      className: "users",
      subRoutes: [
        {
          // icon: <FaUsers />,
          name: "All Users",
          route: "/users/all",
          className: "all-users",
        },
        {
          // icon: <AiOutlineUserAdd />,
          name: "Create User",
          route: "/users/create",
          className: "create-user",
        },
      ],
    }
  ],
} as TUserMainNavigationLinks;

type TBasicMenu = {
  icon: JSX.Element;
  name: string;
  route: string;
  className: string;
};

interface TSubMenu extends TBasicMenu {
  subRoutes: TBasicMenu[];
}

export type TUserMainNavigationLinks = {
  [key in keyof typeof userRoles]: (TBasicMenu | TSubMenu)[];
};