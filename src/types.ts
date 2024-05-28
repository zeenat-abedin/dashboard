// src/types.ts

// Define a type for a user
export interface User {
  id: string;
  name: string;
  email: string;
  age?: number; // Optional field
}

// Define a type for a product
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

// Define a type for a response object
export interface ApiResponse<T> {
  data: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

// Define a type for a storage key
export type StorageKey = string;

// Define an enum for status codes
export enum StatusCode {
  OK = 200,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}