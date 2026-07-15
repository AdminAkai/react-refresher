import { apiUrl } from "./api.utils"

export const postsUrl = `${apiUrl}/posts`

export const getPosts = async () => {
  const response = await fetch(postsUrl)
  const resData = await response.json();
  return resData;
}