import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../utils/baseUrl'


export const photoApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPhotosById: builder.query<response, number>({
      query: (photo_id) => `photo?photo_id=${photo_id}`,
    }),
  }),
})


export const {  } = photosApi