import { AdminLayout } from "@/layouts/AdminLayout";
import { useFecthServices } from "@/hooks/useFetchServices";
import { useEffect } from "react";
import { ServiceMobileCard } from "./components/ServiceMobileCards";
import { ServiceDesktopTable } from "./components/ServiceDesktopTable";

export function ServiceManager() {
  const { services, execute } = useFecthServices();

  useEffect(() => {
    execute();
  }, [execute]);

  return (
    <AdminLayout>
      {/* ===== Vista desktop: cards ===== */}
      <ServiceDesktopTable services={services} />

      {/* ===== Vista móvil: cards ===== */}
      <ServiceMobileCard services={services} />

    </AdminLayout>
  );
}
