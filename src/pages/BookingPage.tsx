import type { Service } from "../interfaces";
import { ServiceListItem } from "../components/ServiceListItem";
import { useEffect, useState } from "react";
import { useFecthServices } from "../hooks/useFetchServices";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { ServiceSearchTool } from "../components/ServiceSearchTool";

export function BookingPage() {
  const { execute, services, query: servicesQuery, setQuery: setServicesQuery, setServices } = useFecthServices();
  const [selected, setSelected] = useState<Date>();
  const [time, setTime] = useState<string>();

  useEffect(() => {
    execute();
  }, [execute]);

  useEffect(() => {
    const timeSplit = time?.split(':');

    if (timeSplit === undefined) return;

    const date = selected?.setHours(Number(timeSplit[0]), Number(timeSplit[1]));

    if (!date) return;

    console.log(new Date(date))
  }, [selected, time])

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

      <ServiceSearchTool query={servicesQuery} setQuery={setServicesQuery} />
      
      <ul className="list bg-base-100 rounded-box shadow-md">
        {
          services.map(service => (
            <ServiceListItem key={service.id} {...service} />
          ))
        }
      </ul>

      <button popoverTarget="rdp-popover" className="input input-border" style={{ anchorName: "--rdp" } as React.CSSProperties}>
        {selected ? selected.toLocaleDateString() : "Pick a date"}
      </button>
      <div popover="auto" id="rdp-popover" className="dropdown" style={{ positionAnchor: "--rdp" } as React.CSSProperties}>
        <DayPicker className="react-day-picker" mode="single" selected={selected} onSelect={setSelected} disabled={[new Date(2026, 0, 9)]} />
      </div>

      <input type="time" className="input" onChange={(e) => setTime(e.target.value)} />
    </div>
  )
}
