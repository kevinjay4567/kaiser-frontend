import { createBrowserRouter } from "react-router";
import { HomePage, BookingPage, LoginPage, AdminPage, DashboardPage, ManagerPage } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/booking",
        Component: BookingPage,
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