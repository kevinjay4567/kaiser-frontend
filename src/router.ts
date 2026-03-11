import { createBrowserRouter } from "react-router";
import { HomePage, BookingPage } from "./pages";
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
    }
]);

export default router;