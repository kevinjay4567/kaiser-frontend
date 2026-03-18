import { useState, type ChangeEvent, type RefObject } from "react";
import { blankService, type Service } from "@/core/interfaces";
import { API_URL } from "@/core/config/environment";

interface Props {
  ref: RefObject<HTMLDialogElement> | RefObject<null>;
  service: Service | null;
}

export function EditServiceModal({ ref, service }: Readonly<Props>) {
  const [editService, setEditService] = useState<Service>({ ...blankService });

  const handleChangeServiceName = (e: ChangeEvent<HTMLInputElement>) => {
    setEditService((val) => ({ ...val, name: e.target.value }));
  };

  const handleChangeServicePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setEditService((val) => ({ ...val, price: e.target.value }));
  };

  const formatPrice = (price: string | undefined) =>
    Number(price).toLocaleString("es-CO");

  const handleSendEditService = () => {
    fetch(`${API_URL}/services/${service?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: editService.name.trim() === "" ? undefined : editService.name,
        price: editService.price.trim() === "" ? undefined : editService.price,
      }),
    })
      .then(async (res) => {
        const json = await res.json();
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <dialog id="my_modal_1" className="modal" ref={ref}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">{service?.name}</h3>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Editar servicio</legend>

          <label className="label">Nombre del servicio</label>
          <input
            type="text"
            className="input"
            placeholder={service?.name}
            value={editService.name}
            onChange={handleChangeServiceName}
          />

          <label className="label">Precio (peso colombiano)</label>
          <input
            type="number"
            className="input"
            placeholder={formatPrice(service?.price)}
            value={editService.price}
            onChange={handleChangeServicePrice}
          />

          <label className="label">Duracion (en minutos)</label>
          <input
            type="number"
            className="input"
            placeholder={service?.duration.toString()}
            value={editService.duration === 0 ? "" : editService.duration}
          />
        </fieldset>

        <button
          className="btn btn-soft btn-primary mt-4"
          onClick={() => handleSendEditService()}
        >
          Primary
        </button>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
