import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { RootLayout, Main } from "./routes";
import NewPost from "src/components/NewPost";

import { getPosts } from "./api";
import { addPosts, getPostDetails } from "./api/posts";
import PostDetails from "./components/PostDetails/PostDetails.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
        loader: getPosts,
        children: [
          { path: "create-post", element: <NewPost />, action: addPosts },
          { path: ':postId', element: <PostDetails />, loader: getPostDetails }
        ],
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
