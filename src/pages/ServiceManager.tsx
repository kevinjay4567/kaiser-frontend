import { AdminLayout } from "../layouts/AdminLayout";
import type { Service } from "../interfaces";
import { useFecthServices } from "../hooks/useFetchServices";
import { useEffect } from "react";

export function ServiceManager() {
  const { services, execute } = useFecthServices();

  useEffect(() => {
    execute();
  }, [execute]);

  return (
    <AdminLayout>
      {/* ===== Vista Desktop: tabla ===== */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>
                <label className="sr-only" htmlFor="select-all">
                  Seleccionar todos los servicios
                </label>
                <input id="select-all" type="checkbox" className="checkbox" />
              </th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Duración</th>
              <th>
                <span className="sr-only">Acciones</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service: Service) => (
              <tr key={service.id}>
                <td>
                  <label className="sr-only" htmlFor={`service-${service.id}`}>
                    Seleccionar {service.name}
                  </label>
                  <input
                    id={`service-${service.id}`}
                    type="checkbox"
                    className="checkbox"
                  />
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={`http://localhost:3000/api/resources/images/${service.urlImage}`}
                          alt={`Imagen de ${service.name}`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service.name}</div>
                      <div className="text-sm opacity-60">${service.price}</div>
                    </div>
                  </div>
                </td>

                <td className="max-w-xs truncate" title={service.description}>
                  {service.description}
                </td>

                <td>{service.duration} min</td>

                <td>
                  <button className="btn btn-ghost btn-sm">Detalle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== Vista móvil: cards ===== */}
      <ul className="md:hidden space-y-3">
        {services.map((service: Service) => (
          <li key={service.id}>
            <div className="card bg-base-100 w96 shadow-sm">
              <div className="flex justify-between items-center px-4 pt-4">
                <input
                  type="checkbox"
                  className="checkbox self-start"
                  aria-label={`Seleccionar ${service.name}`}
                />
                <p>
                  <div
                    className={
                      service.state
                        ? "status status-success animate-bounce mr-2"
                        : "status status-error animate-bounce mr-2"
                    }
                  ></div>
                  ${service.price} - {service.duration} min
                </p>
              </div>
              <figure className="px-10 pt-4">
                <img
                  src={`http://localhost:3000/api/resources/images/${service.urlImage}`}
                  alt={`Imagen de ${service.name}`}
                  className="rounded-xl size-48"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
}
