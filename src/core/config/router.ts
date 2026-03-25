import { createBrowserRouter } from "react-router";
import { BookingPage, HomePage, LoginPage } from "@/ui/pages/public";
import { DashboardPage } from "@/ui/pages/admin/Dashboard/DashboardPage";
import { ServiceDetail } from "@/ui/pages/public/ServiceDetail";
import { ServiceManager } from "@/ui/pages/admin/ServiceManager";
import { AppointmentManager } from "@/ui/pages/admin/AppointmentManager";
import { EmployeeManager } from "@/ui/pages/admin/EmployeeManager/EmployeeManager";
import { AuthContext } from "@/ui/contexts/auth/AuthContext";
import { redirect } from "react-router";
import { NotifyProvider } from "@/ui/contexts/notify/NotifyProvider";

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
    loader: authLoader,
    Component: NotifyProvider,
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

async function authLoader() {
  const context = AuthContext();

  const response = await context.refreshSession();

  if (response.status !== 200) {
    throw redirect("/login");
  }

  return await response.json();
}

export default router;
