import type { Service } from "@/core/interfaces";
import placeholder from "@/assets/placeholder-image.webp";
import { useEffect, useState } from "react";
import { API_URL } from "@/core/config/environment";

interface Props {
  service: Service;
  isChecked: (id: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TableRow({ service, isChecked }: Readonly<Props>) {
  const [isValid, setIsValid] = useState(false);

  const getImage = () => {
    if (!isValid || !service.urlImage) {
      return placeholder;
    }

    return `${API_URL}/resources/images/${service.urlImage}`;
  };

  useEffect(() => {
    fetch(`${API_URL}/resources/images/${service.urlImage}`)
      .then(async (res) => {
        if (res.status !== 200) {
          setIsValid(false);
        }

        setIsValid(true);
      })
      .catch(() => {
        setIsValid(false);
      });
  }, [service.urlImage]);
  return (
    <tr key={service.id}>
      <td>
        <label className="sr-only" htmlFor={`service-${service.id}`}>
          Seleccionar {service.name}
        </label>
        <input
          id={`service-${service.id}`}
          type="checkbox"
          className="checkbox"
          onChange={(e) => isChecked(service.id, e)}
        />
      </td>

      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={getImage()} alt={`Imagen de ${service.name}`} />
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
  );
}
