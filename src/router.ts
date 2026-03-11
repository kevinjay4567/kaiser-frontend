import { createBrowserRouter } from "react-router";
import { HomePage, BookingPage } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/booking",
        Component: BookingPage,
    }
]);

export default router;