import type { Service } from "@/core/interfaces"
import { TableRow } from "./TableRow"

interface Props {
    data: Service[]
}

export function ServiceDesktopTable({ data }: Readonly<Props>) {
    return (
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
                    {data.map((service: Service) => (
                        <TableRow key={service.id} service={service} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}