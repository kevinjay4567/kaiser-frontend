import type { Service } from "@/core/interfaces"

interface Props {
    service: Service;
}

export function TableRow({ service }: Readonly<Props>) {
    return <tr key={service.id}>
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
}