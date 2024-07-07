import {apiSlice} from './apiSlice'

const USER_URL = `/api`

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data)=>({
                url: `${USER_URL}`,
                method: 'POST',
                body: data,
            })
        }),

        register: builder.mutation({
            query: (data) => ({
              url: `${USER_URL}/register`,
              method: 'POST',
              body: data,
            }),
          }),

          setImg: builder.mutation({
            query: (data) => ({
              url: `${USER_URL}/addProfile`,
              method: 'POST', // Corrected method to POST
              body: data,
            }), 
          }),
          
    })
})

export const {useLoginMutation, useRegisterMutation,useSetImgMutation} = userApiSlice