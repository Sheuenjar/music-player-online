import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', 'fe5d12e640msh4bd83b54d6df128p17aee1jsn13eccdb6297c');

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world' }),
        }),
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;