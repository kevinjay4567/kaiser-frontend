import { createBrowserRouter } from "react-router";
import { HomePage, BookingPage, LoginPage, AdminPage } from "./pages";

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
    }
]);

export default router;