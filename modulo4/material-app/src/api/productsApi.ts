// src/api/productsApi.ts
import axios from 'axios'
import type { Product } from '../types/product'

const http = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
})

interface GetProductsParams {
  page: number
  pageSize: number
  search?: string
}

export async function getProducts(params: GetProductsParams) {
  const { page, pageSize, search } = params

  const res = await http.get<Product[]>('/products', {
    params: {
      limit: pageSize,
      ...(search ? { title: search } : {}),
    },
  })

  const items = Array.isArray(res.data) ? res.data : []
  const start = (page - 1) * pageSize
  const results = items.slice(start, start + pageSize)

  return {
    count: items.length,
    next: start + pageSize < items.length ? 'next' : null,
    previous: page > 1 ? 'previous' : null,
    results,
  }
}