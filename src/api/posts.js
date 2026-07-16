import { redirect } from "react-router-dom"

import { apiUrl } from "./api.utils"

export const postsUrl = `${apiUrl}/posts`

export const getPosts = async () => ({ postsPromise: fetch(postsUrl).then(res => res.json()) })

export const addPosts = async ({ request }) => {
  const formData = request.formData();
  const newPost = Object.fromEntries(formData);
  await fetch(postsUrl, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return redirect('/');
}