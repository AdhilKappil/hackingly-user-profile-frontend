import {apiSlice} from './apiSlice'

const USER_URL = `/api`

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // user login
        login: builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/login`,
                method: 'POST',
                body: data,
            })
        }),

          // user register
        register: builder.mutation({
            query: (data) => ({
              url: `${USER_URL}/register`,
              method: 'POST',
              body: data,
            }),
          }),

            // user profile and banner image update
          setProfile: builder.mutation({
            query: (data) => ({
              url: `${USER_URL}/addProfile`,
              method: 'PATCH', // Corrected method to POST
              body: data,
            }), 
          }),
          
    })
})

export const {useLoginMutation, useRegisterMutation,useSetProfileMutation} = userApiSlice