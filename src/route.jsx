import { createBrowserRouter } from "react-router";
import PublicView from "./pubilc-view/pages/home";
import ManagementDashboard from "./management-dashboard/pages/home";
import WelcomeComponent from "./components/welocome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeComponent />,
  },
  {
    path: "/dashboard",
    element: <ManagementDashboard />,
  },
  {
    path: "/public-view",
    element: <PublicView />,
  },
  {
    path: "*",
    element: <div>صفحه مورد نشر یافت نشد .</div>,
  },
]);
export default router;
