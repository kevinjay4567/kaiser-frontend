import { useNavigate } from "react-router";
import type { Service } from "@/core/interfaces";
import { API_URL } from "@/core/config/environment";

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
        <svg
          className="size-[1.2em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </g>
        </svg>
      </button>
    </li>
  );
}
