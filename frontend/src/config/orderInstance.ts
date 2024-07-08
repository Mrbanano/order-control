import axios from "axios";
import { env } from "./env";

const baseURL = env.baseURL;

const orderIntances = axios.create({
  baseURL,
  headers: {
    AccessControlAllowOrigin: "*",
    AccessControlAllowMethods: "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    AccessControlAllowHeaders: "Content-Type, application/json",
  },
});

export default orderIntances;
