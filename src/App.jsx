import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { RootLayout, Main } from "./routes";
import NewPost from "src/components/NewPost";
import Loading from "src/components/Loading";

import { getPosts } from "./api";
import { addPosts } from "./api/posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
        loader: getPosts,
        children: [{ path: "create-post", element: <NewPost />, action: addPosts }],
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
