import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { type Todo } from '@types';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo, undefined>({
      query: () => 'todos',
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
