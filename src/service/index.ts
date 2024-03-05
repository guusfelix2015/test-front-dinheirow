import axios from "axios";

export const API_URL = "http://gateway.marvel.com/v1/public";

export const api = axios.create({
  baseURL: API_URL,
  params: {
    apikey: process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY,
    ts: 1,
    hash: process.env.NEXT_PUBLIC_MARVEL_API_HASH,
  },
});
