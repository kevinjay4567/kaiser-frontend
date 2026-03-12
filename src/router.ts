import { createBrowserRouter } from "react-router";
import { HomePage, BookingPage, LoginPage, AdminPage, DashboardPage, ManagerPage } from "./pages";
import { ServiceDetail } from "./pages/ServiceDetail";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/booking",
      children: [
            {
                index: true,
                Component: BookingPage,
            },
            {
                path: ":id",
                Component: ServiceDetail,
            }
        ]
    },
    {
        path: "/login",
        Component: LoginPage,
    },
    {
        path: "/admin",
        Component: AdminPage,
    },
    {
        path: "/dashboard",
        Component: DashboardPage,
    },
    {
        path: "/manager",
        Component: ManagerPage,
    }
]);

export default router;