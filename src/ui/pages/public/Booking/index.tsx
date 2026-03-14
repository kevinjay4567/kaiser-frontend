import type { Service, ServiceQueryResponse } from "@/core/interfaces";
import { ServiceListItem } from "@/ui/components/ServiceListItem";
import { useFecthServices } from "@/ui/pages/admin/ServiceManager/hooks/useFetchServices";
import { ServiceSearchTool } from "./components/ServiceSearchTool";
import { useEffect } from "react";
import { API_URL } from "@/core/config/environment";

export function BookingPage() {
  const { execute, services, query: servicesQuery, setQuery: setServicesQuery, setServices } = useFecthServices();

  const handleSearch = async () => {
    if (!servicesQuery.trim()) {
      execute();
      return;
    }

    try {
      const res = await fetch(`${API_URL}/search?q=${encodeURIComponent(servicesQuery)}`);
      const json = await res.json() as ServiceQueryResponse;

      const searchResults: Service[] = json.results.map((result) => ({
        id: result.id,
        name: result.label,
        price: result.meta.price,
        state: true,
        duration: result.meta.duration,
        discount: result.meta.discount,
        urlImage: result.meta.urlImage,
        description: result.label,
        appointments: []
      }));

      setServices(searchResults);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    execute();
  }, [execute]);

  useEffect(() => {
    handleSearch()
  }, [servicesQuery])

  return (
    <div className="flex flex-col items-center min-h-screen gap-5">
      <h1 className="pl-5 mt-5 text-2xl">Servicios</h1>

      <ServiceSearchTool query={servicesQuery} setQuery={setServicesQuery} />

      <ul className="list bg-base-100 rounded-box shadow-md">
        {
          services.map(service => (
            <ServiceListItem key={service.id} {...service} />
          ))
        }
      </ul>
    </div>
  )
}
