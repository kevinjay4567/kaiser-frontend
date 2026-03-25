import { AdminLayout } from "@/ui/layouts";
import { useFecthServices } from "@/ui/pages/admin/ServiceManager/hooks/useFetchServices";
import { useEffect, useState, type ChangeEvent } from "react";
import { ServiceMobileList } from "./components/ServiceMobileList";
import { ServiceDesktopTable } from "./components/ServiceDesktopTable";
import { CreateServiceDrawer } from "./components/CreateServiceDrawer";
import { API_URL } from "@/core/config/environment";
import { BaseIcon } from "@/ui/components/base/BaseIcon";
export function ServiceManager() {
  const { services, execute } = useFecthServices();
  const [servicesIds, setServicesIds] = useState<string[]>([]);

  const handleDeletes = (servicesIds: string[]) => {
    fetch(`${API_URL}/services`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: servicesIds }),
    })
      .then(async (res) => {
        const json = await res.json();
        console.log(json);
        setServicesIds([]);
        execute();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isChecked = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setServicesIds((val) => [...val, id]);
    } else {
      const result = servicesIds.filter((serviceId) => serviceId !== id);
      setServicesIds(result);
    }
  };

  useEffect(() => {
    execute();
  }, [execute]);

  return (
    <AdminLayout>
      {/* ===== Vista desktop: table ===== */}
      <ServiceDesktopTable data={services} isChecked={isChecked} />

      {/* ===== Vista móvil: cards ===== */}
      <ServiceMobileList services={services} isChecked={isChecked} />

      <CreateServiceDrawer reload={execute} />

      <div className="fab fab-flower">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
        <div tabIndex={0} role="button" className="btn btn-circle btn-lg">
          <BaseIcon
            icon="settings"
            size={24}
            color="currentColor"
            viewBox="0 0 24 24"
          />
        </div>

        {/* Main Action button replaces the original button when FAB is open */}
        <button className="fab-main-action btn btn-circle btn-lg btn-primary">
          <BaseIcon
            icon="close"
            size={24}
            color="currentColor"
            viewBox="0 0 24 24"
          />
        </button>

        {/* buttons that show up when FAB is open */}
        <button
          className="btn btn-circle btn-lg btn-success"
          onClick={() => handleDeletes(servicesIds)}
        >
          <BaseIcon icon="plus" size={24} color="currentColor" />
        </button>
        <button className="btn btn-circle btn-lg btn-warning">
          <BaseIcon icon="edit" size={24} color="currentColor" />
        </button>
        <button className="btn btn-circle btn-lg btn-error">
          <BaseIcon
            icon="trash"
            size={24}
            color="currentColor"
            viewBox="0 0 24 24"
          />
        </button>
      </div>
    </AdminLayout>
  );
}
