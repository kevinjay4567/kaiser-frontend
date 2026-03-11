import type { Service } from "../interfaces";
import { ServiceListItem } from "../components/ServiceListItem";
import { useEffect } from "react";
import { useFecthServices } from "../hooks/useFetchServices";

export function BookingPage() {

  const { execute, services, query: servicesQuery, setQuery: setServicesQuery, setServices } = useFecthServices();

  useEffect(() => {
    execute();
  }, [execute]);

  const handleSearch = async () => {
    if (!servicesQuery.trim()) {
      execute();
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/search?q=${encodeURIComponent(servicesQuery)}`);
      const json = await res.json();

      const searchResults: Service[] = json.results.map((result: any) => ({
        id: result.id,
        name: result.label,
        price: result.meta.price,
        state: true,
        duration: result.meta.duration,
        discount: result.meta.discount,
        urlImage: result.meta.urlImage
      }));

      setServices(searchResults);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleSearch()
  }, [servicesQuery])

  return (
    <div className="flex flex-col items-center min-h-screen gap-5">
      <h1 className="pl-5 mt-5 text-2xl">Servicios</h1>

      <div>
        <label className="input" htmlFor="search">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" id="search" placeholder="Busqueda" value={servicesQuery} onChange={(e) => setServicesQuery(e.target.value)} />
        </label>
      </div>

      <ul className="list bg-base-100 rounded-box shadow-md">
        {
          services.map(ServiceListItem)
        }
      </ul>

    </div>
  )
}
