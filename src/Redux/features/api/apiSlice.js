import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://ren-roll-scooter-bicycle-resell-server.vercel.app/"
    }),
    endpoints : (builder) => ({
        
    })
})

export default apiSlice