import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Single RTK Query API slice. Add more endpoints here as your app grows.
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL, // e.g. http://localhost:5000/api
    }),
    endpoints: (builder) => ({
        sendContactMessage: builder.mutation({
            query: (formData) => ({
                url: "/contact",
                method: "POST",
                body: formData,
            }),
        }),
    }),
});

// Auto-generated hook used directly in components
export const { useSendContactMessageMutation } = api;

export default api;
