import { AdminLayout } from "@/ui/layouts";
import { useFecthServices } from "@/ui/pages/admin/ServiceManager/hooks/useFetchServices";
import { useEffect } from "react";
import { ServiceMobileList } from "./components/ServiceMobileList";
import { ServiceDesktopTable } from "./components/ServiceDesktopTable";
import { CreateServiceDrawer } from "./components/CreateServiceDrawer";

export function ServiceManager() {
  const { services, execute } = useFecthServices();

  useEffect(() => {
    execute();
  }, [execute]);

  return (
    <AdminLayout>
      {/* ===== Vista desktop: table ===== */}
      <ServiceDesktopTable data={services} />

      {/* ===== Vista móvil: cards ===== */}
      <ServiceMobileList services={services} />

      <CreateServiceDrawer />
    </AdminLayout>
  );
}
