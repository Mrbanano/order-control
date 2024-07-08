import dotenv from "dotenv";

export const env = {
  baseURL: process.env.ORDER_SERVICES || "http://backend:8000/api/v1",
};
