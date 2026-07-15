import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { RootLayout, Main } from "./routes";
import NewPost from "src/components/NewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [{ path: "create-post", element: <NewPost /> }],
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
