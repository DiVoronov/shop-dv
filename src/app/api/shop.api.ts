import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProductsObject } from "./shop.types";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com"}),
  endpoints: (builder) => ({
    getAllItems: builder.query<IProductsObject[], string>({
      query: (globalQuery: string) => `/${globalQuery}`
    }),
    getListCategories: builder.query<string[], string>({
      query: (category: string) => `/${category}`
    }),
    getMenClothes: builder.query<IProductsObject[], string>({
      query: () => `/products/category/men's clothing`
    }),
    getWomenClothes: builder.query<IProductsObject[], string>({
      query: () => `/products/category/women's clothing`
    }),
    getJewelry: builder.query<IProductsObject[], string>({
      query: () => `/products/category/jewelery`
    }),
    getElectronics: builder.query<IProductsObject[], string>({
      query: () => `/products/category/electronics`
    }),
  })
});

export const { 
  useGetAllItemsQuery, 
  useGetElectronicsQuery,
  useGetListCategoriesQuery,
  useGetMenClothesQuery, 
  useGetWomenClothesQuery, 
  useGetJewelryQuery, 
} = shopApi;

