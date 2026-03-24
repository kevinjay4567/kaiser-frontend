import { API_URL } from "@/core/config/environment";
import { BaseAlert } from "@/ui/components/base/BaseAlert";
import { useState, type ChangeEvent, type SubmitEvent } from "react";

interface Props {
  reload?: () => Promise<void>;
}

export function CreateServiceDrawer({ reload }: Readonly<Props>) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  const [discount, setDiscount] = useState<string>("0");
  const [description, setDescription] = useState<string>("");
  const [state, setState] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [successMessage, setSuccesMessage] = useState<string>("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") {
      setDuration(0);
    }

    setDuration(Number(e.target.value));
  };

  const getInputDuration = () => {
    if (duration === 0) {
      return "";
    }

    return duration.toString();
  };

  const handleDiscountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDiscount(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleStateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.checked);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setImage(e.target.files[0]);
  };

  const handleSendImage = () => {
    if (!image) return;

    const formData = new FormData();

    formData.append("image", image);

    fetch(`${API_URL}/resources/images`, {
      method: "POST",
      body: formData,
    })
      .then(async (res) => {
        const json = await res.json();
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSendService = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    handleSendImage();

    fetch(`${API_URL}/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        duration,
        state,
        discount,
        description,
        urlImage: image?.name,
      }),
    })
      .then(async (res) => {
        await res.json();
        if (res.status === 201) {
          if (reload) {
            await reload();
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setIsOpen(false);
        setName("");
        setPrice("");
        setDuration(0);
        setDiscount("0");
        setDescription("");
        setState(true);
        setSuccesMessage("Servicio creado exitosamente");
        setTimeout(() => setSuccesMessage(""), 5000);
      });
  };

  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-5"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
      />
      <div className="drawer-content flex flex-col items-center justify-center p-8">
        <label
          htmlFor="my-drawer-5"
          className="btn btn-primary shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          Crear Nuevo Servicio
        </label>
      </div>

      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-5"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-100 min-h-full w-full md:w-150 flex flex-col shadow-2xl">
          <div className="flex justify-between items-center p-6 border-b border-base-200">
            <h2 className="text-2xl font-bold text-base-content">
              Crear Nuevo Servicio
            </h2>
            <label
              htmlFor="my-drawer-5"
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </label>
          </div>
          <div className="p-6 flex-1 overflow-y-auto overflow-x-hidden">
            <form className="flex flex-col gap-6" onSubmit={handleSendService}>
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend font-semibold">
                  Nombre
                </legend>
                <input
                  type="text"
                  className="input w-full input-bordered"
                  placeholder="Ingrese nombre del servicio"
                  value={name}
                  onChange={(e) => handleNameChange(e)}
                />
              </fieldset>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend font-semibold">
                    Precio
                  </legend>
                  <input
                    type="text"
                    className="input w-full input-bordered"
                    placeholder="Ingrese precio del servicio"
                    value={price}
                    onChange={(e) => handlePriceChange(e)}
                  />
                </fieldset>
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend font-semibold">
                    Duración (minutos)
                  </legend>
                  <input
                    type="number"
                    className="input w-full input-bordered"
                    placeholder="Ingrese duración del servicio"
                    value={getInputDuration()}
                    onChange={(e) => handleDurationChange(e)}
                  />
                </fieldset>
              </div>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend font-semibold">
                  Descuento
                </legend>
                <input
                  type="text"
                  className="input w-full input-bordered"
                  placeholder="Ingrese descuento del servicio"
                  value={discount}
                  onChange={(e) => handleDiscountChange(e)}
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend font-semibold">
                  Descripción
                </legend>
                <input
                  type="text"
                  className="input w-full input-bordered"
                  placeholder="Ingrese descripción del servicio"
                  value={description}
                  onChange={(e) => handleDescriptionChange(e)}
                />
              </fieldset>

              <div className="grid grid-cols-1 gap-4 items-start mt-2">
                <fieldset className="fieldset w-full p-4 rounded-xl">
                  <legend className="fieldset-legend font-semibold px-2">
                    Imagen del Servicio
                  </legend>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-error w-full bg-base-100"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <label className="fieldset-label text-xs mt-2 opacity-70">
                    Tamaño máximo 10MB
                  </label>
                </fieldset>

                <fieldset className="fieldset w-full h-full flex justify-start">
                  <legend className="fieldset-legend font-semibold px-2">
                    Estado del Servicio
                  </legend>
                  <label className="label cursor-pointer flex justify-between w-full mt-2">
                    <span className="label-text font-medium">
                      Activo (Visible para clientes)
                    </span>
                    <input
                      type="checkbox"
                      className="toggle toggle-success"
                      checked={state}
                      onChange={handleStateChange}
                    />
                  </label>
                </fieldset>
              </div>
              <div className="flex justify-end gap-3 mt-0 pt-6 border-t border-base-200 sticky bottom-0 bg-base-100 pb-4">
                <label
                  htmlFor="my-drawer-5"
                  className="btn btn-ghost"
                  onClick={() => setIsOpen(false)}
                >
                  Cancelar
                </label>
                <button type="submit" className="btn btn-primary">
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : null}
                  Guardar Servicio
                </button>
              </div>
            </form>
          </div>
        </div>

        {successMessage.trim() !== "" ? (
          <BaseAlert label={successMessage} variant="success" />
        ) : null}
      </div>
    </div>
  );
}
