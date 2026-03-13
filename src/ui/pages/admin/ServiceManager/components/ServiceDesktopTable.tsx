import { ServiceDesktopCard } from "./ServiceDesktopTableBody"
import type { Service } from "@/interfaces"

interface Props {
    services: Service[]
}

export function ServiceDesktopTable({ services }: Props) {
    return (
        <div className="hidden md:block overflow-x-auto">
            <table className="table">
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
                {services.map((service: Service) => (
                    <ServiceDesktopCard key={service.id} service={service} />
                ))}
            </table>
        </div>
    )
}