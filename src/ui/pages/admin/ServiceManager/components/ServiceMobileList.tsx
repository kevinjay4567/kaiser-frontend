import { type Service } from "@/core/interfaces";
import { ServiceMobileImage } from "./ServiceMobileImage";
import { useRef, useState, type ChangeEvent } from "react";
import { EditServiceModal } from "./EditServiceModal";

interface Props {
  services: Service[];
  isChecked: (id: string, e: ChangeEvent<HTMLInputElement>) => void;
}

export function ServiceMobileList({ services, isChecked }: Props) {
  const modal = useRef<HTMLDialogElement>(null);
  const [currentService, setCurrentService] = useState<Service | null>(null);

  const handleClickService = (service: Service) => {
    modal.current?.showModal();
    setCurrentService(service);
  };

  return (
    <>
      <ul className="md:hidden space-y-3">
        {services.map((service: Service) => (
          <li key={service.id} onClick={() => handleClickService(service)}>
            <div className="card bg-base-100 w96 shadow-sm">
              <div className="flex justify-between items-center px-4 pt-4">
                <input
                  type="checkbox"
                  className="checkbox self-start"
                  aria-label={`Seleccionar ${service.name}`}
                  onChange={(e) => isChecked(service.id, e)}
                />
                <div>
                  <div
                    className={
                      service.state
                        ? "status status-success animate-bounce mr-2"
                        : "status status-error animate-bounce mr-2"
                    }
                  ></div>
                  <span>
                    ${service.price} - {service.duration} min
                  </span>
                </div>
              </div>
              <figure className="px-10 pt-4">
                <ServiceMobileImage
                  slug={service.urlImage}
                  alt={`Imagen de ${service.name}`}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          </li>
        ))}
        <EditServiceModal ref={modal} service={currentService} />
      </ul>
    </>
  );
}
