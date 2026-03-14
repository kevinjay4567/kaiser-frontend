import { createBrowserRouter } from "react-router";
import { BookingPage, HomePage, LoginPage } from "@/ui/pages/public";
import { DashboardPage } from "@/ui/pages/admin/Dashboard/DashboardPage";
import { ServiceDetail } from "@/ui/pages/public/ServiceDetail";
import { ServiceManager } from "@/ui/pages/admin/ServiceManager";
import { AppointmentManager } from "@/ui/pages/admin/AppointmentManager";
import { EmployeeManager } from "@/ui/pages/admin/EmployeeManager/EmployeeManager";

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
