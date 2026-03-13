import { createBrowserRouter } from "react-router";
import {
    AdminPage,
    BookingPage,
    DashboardPage,
    HomePage,
    LoginPage,
    ManagerPage,
} from "./pages";
import { ServiceDetail } from "./pages/ServiceDetail";
import { ServiceManager } from "./pages/ServiceManager";
import { AppointmentManager } from "./pages/AppointmentManager";
import { EmployeeManager } from "./pages/EmployeeManager";

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
            },
        ],
    },
    {
        path: "/login",
        Component: LoginPage,
    },
    {
        path: "/admin",
        children: [
            {
                index: true,
                Component: DashboardPage,
            },
            {
                path: "dashboard",
                Component: DashboardPage,
            },
            {
                path: "manager",
                Component: ManagerPage,
            },
            {
                path: "services",
                Component: ServiceManager,
            },
            {
                path: "appointment",
                Component: AppointmentManager,
            },
            {
                path: "employee",
                Component: EmployeeManager,
            },
        ],
    },
]);

export default router;
