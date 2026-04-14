import { AdminLayout } from "@/ui/layouts";
import { useFetchServices } from "@/ui/pages/admin/ServiceManager/hooks/useFetchServices";
import { useEffect, useState, type ChangeEvent } from "react";
import type { Service } from "@/core/interfaces";
import { ServiceMobileList } from "./components/ServiceMobileList";
import { ServiceDesktopTable } from "./components/ServiceDesktopTable";
import { CreateServiceDrawer } from "./components/CreateServiceDrawer";
import { API_URL } from "@/core/config/environment";
import { ServiceFabButton } from "./components/ServiceFabButton";
export function ServiceManager() {
  const { services, execute } = useFetchServices();
  const [servicesIds, setServicesIds] = useState<string[]>([]);
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isViewMode, setIsViewMode] = useState(false);

  const handleViewDetails = (service: Service) => {
    setSelectedService(service);
    setIsViewMode(true);
    setIsCreateDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsCreateDrawerOpen(false);
    setTimeout(() => {
      setSelectedService(null);
      setIsViewMode(false);
    }, 300);
  };

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
      <ServiceDesktopTable
        data={services}
        isChecked={isChecked}
        onViewDetails={handleViewDetails}
      />

      {/* ===== Vista móvil: cards ===== */}
      <ServiceMobileList services={services} isChecked={isChecked} />

      <CreateServiceDrawer
        reload={execute}
        isOpen={isCreateDrawerOpen}
        onClose={handleCloseDrawer}
        service={selectedService}
        readOnly={isViewMode}
      />

      <ServiceFabButton
        onAdd={() => {
          setSelectedService(null);
          setIsViewMode(false);
          setIsCreateDrawerOpen(true);
        }}
        onDelete={() => handleDeletes(servicesIds)}
        disabledDelete={servicesIds.length === 0}
      />
    </AdminLayout>
  );
}
