import { useEffect, useState } from "react"

interface Service {
  id: string;
  name: string;
  price: string;
  state: boolean;
  duration: number;
  discount: string;
}

function ServiceListItem(service: Service) {
  return (
    <li className="pb-3 sm:pb-4 px-5 pt-2">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">

        <div className="shrink-0">
          <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-heading truncate">
            {service.name}
          </p>
          <p className="text-sm text-body truncate">
            descripcion del servicio
          </p>
        </div>

        <div className="inline-flex items-center text-base font-semibold text-heading">
          ${Number(service.price).toLocaleString('es-CO')}
        </div>

      </div>
    </li>
  )
}

function App() {
  const [services, setServices] = useState<Service[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchServices = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/services');
      const json = await res.json();
      setServices(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!searchQuery.trim()) {
      fetchServices();
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/search?q=${encodeURIComponent(searchQuery)}`);
      const json = await res.json();

      const searchResults: Service[] = json.results.map((result: any) => ({
        id: result.id,
        name: result.label,
        price: result.meta.price,
        state: true,
        duration: result.meta.duration,
        discount: result.meta.discount
      }));

      setServices(searchResults);
    } catch (err) {
      console.log(err);
    }
  };

  const getEmployees = (id: string) => {
    fetch(`http://localhost:3000/api/employees/service/${id}`)
      .then(async (res) => {
        const json = await res.json();

        return json;
      })
  }

  return (
    <>
      <h1 className="pl-5 mt-5 text-2xl">Servicios</h1>

      <form className="max-w-md mx-auto px-5 mt-5" onSubmit={handleSearch}>
        <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none bg-blue-500">Search</button>
        </div>
      </form>

      <ul className="max-w-md divide-y divide-default mt-5">
        {
          services.map(ServiceListItem)
        }
      </ul>
    </>
  )
}

export default App
