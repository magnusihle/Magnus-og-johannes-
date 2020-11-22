import { httpClient } from "./httpClient";

export const getPosts = () => httpClient.get(`/posts`, {});
