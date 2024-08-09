import { api } from "@/store/api/apiConfig";

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getData: build.query({
      query: (id) => {
        return {
          url: `/get-data/${id}`,
          method: "GET",
        };
      },
    }),

    user: build.query<any, void>({
      query: () => ({
        url: '/auth',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetDataQuery, useUserQuery } = usersApi;
