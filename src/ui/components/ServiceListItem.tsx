import { useNavigate } from "react-router";
import type { Service } from "@/core/interfaces";
import { API_URL } from "@/core/config/environment";
import { BaseIcon } from "./base/BaseIcon";

export function ServiceListItem(service: Service) {
  const navigate = useNavigate();

  const formatPrice = (price: string) => {
    return Number(price).toLocaleString("es-CO");
  };

  return (
    <li className="list-row" key={service.id}>
      <div>
        <img
          className="size-16 rounded-box"
          src={`${API_URL}/resources/images/${service.urlImage}`}
        />
      </div>
      <div>
        <div>{service.name}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          Remaining Reason
        </div>
      </div>
      <p className="list-col-wrap text-xs">{service.description}</p>
      <span className="btn btn-square btn-ghost cursor-default w-fit">
        ${formatPrice(service.price)}
      </span>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => navigate(service.id)}
      >
        <BaseIcon size={24} icon="random" color="currentColor" />
      </button>
    </li>
  );
}
