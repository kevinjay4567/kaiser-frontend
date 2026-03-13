import type { Service } from "@/interfaces";
import { ServiceMobileImage } from "./ServiceMobileImage";

interface Props {
    services: Service[];
}

export function ServiceMobileCard({ services }: Props) {
    return (
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
                            <ServiceMobileImage slug={service.urlImage} alt={`Imagen de ${service.name}`} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{service.name}</h2>
                            <p>{service.description}</p>
                        </div>
                    </div>
                </li >
            ))
            }
        </ul >
    )
}