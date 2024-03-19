import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import {
  IDeletePhotoResponse,
  IGetPhotoByIdResponse,
  IUpdatePhotoPayload,
  IUpdatePhotoResponse,
} from "./Types";

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPhotosById: builder.query<IGetPhotoByIdResponse, number>({
      query: (photo_id = 0) => `photo?photo_id=${photo_id}`,
    }),
    //TODO: add types for update photo payload
    updatePhoto: builder.mutation<IUpdatePhotoResponse, IUpdatePhotoPayload>({
      query: (body) => ({
        url: "photo",
        method: "PUT",
        body,
      }),
    }),
    deletePhoto: builder.mutation<IDeletePhotoResponse, number>({
      query: (photo_id) => ({
        url: `photo?photo_id=${photo_id}`,
        method: "DELETE",
      }),
    }),
    // TODO: add photo post method
  }),
});

export const { useGetPhotosByIdQuery } = photosApi;
