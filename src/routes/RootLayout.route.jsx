import { Outlet } from "react-router-dom";

import MainHeader from "src/components/MainHeader";

export const RootLayout = () => (
  <>
    <MainHeader />
    <Outlet />
  </>
)