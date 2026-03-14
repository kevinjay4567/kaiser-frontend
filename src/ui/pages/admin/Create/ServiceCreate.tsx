import { AdminLayout } from "@/layouts/AdminLayout";
import { Input } from "./Input";

export function ServiceCreate() {

    return (
        <AdminLayout>

            <div className="drawer drawer-end">
                <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center p-8">
                    <label htmlFor="my-drawer-5" className="btn btn-primary shadow-lg">
                        Crear Nuevo Servicio
                    </label>
                </div>

                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="bg-base-100 min-h-full w-full sm:w-[500px] md:w-[600px] flex flex-col shadow-2xl">

                        <div className="flex justify-between items-center p-6 border-b border-base-200">
                            <h2 className="text-2xl font-bold text-base-content">Crear Nuevo Servicio</h2>
                            <label htmlFor="my-drawer-5" className="btn btn-sm btn-circle btn-ghost">✕</label>
                        </div>
                        <div className="p-6 flex-1 overflow-y-auto overflow-x-hidden">
                            <form className="flex flex-col gap-6">

                                <Input title="Nombre" placeholder="Ej: Corte fachero" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input title="Precio" placeholder="Ej: 15.000$" type="text" />
                                    <Input title="Duración (minutos)" placeholder="Ej: 60" type="text" />
                                </div>

                                <Input title="Descuento" placeholder="Ejemplo: 20%" />

                                <Input
                                    title="Descripción"
                                    placeholder="Detalles de lo que incluye el servicio..."
                                    isTextArea={true}
                                />

                                <div className="grid grid-cols-1 gap-4 items-start mt-2">
                                    <fieldset className="fieldset w-full p-4 rounded-xl">
                                        <legend className="fieldset-legend font-semibold px-2">Imagen del Servicio</legend>
                                        <input type="file" className="file-input file-input-bordered file-input-error w-full bg-base-100" accept="image/*" />
                                        <label className="fieldset-label text-xs mt-2 opacity-70">Tamaño máximo 10MB</label>
                                    </fieldset>

                                    <fieldset className="fieldset w-full h-full flex justify-start">
                                        <legend className="fieldset-legend font-semibold px-2">Estado del Servicio</legend>
                                        <label className="label cursor-pointer flex justify-between w-full mt-2">
                                            <span className="label-text font-medium">Activo (Visible para clientes)</span>
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-success"
                                                defaultChecked
                                            />
                                        </label>
                                    </fieldset>
                                </div>
                                <div className="flex justify-end gap-3 mt-0 pt-6 border-t border-base-200 sticky bottom-0 bg-base-100 pb-4">
                                    <label htmlFor="my-drawer-5" className="btn btn-ghost">Cancelar</label>
                                    <button type="submit" className="btn btn-primary">Guardar Servicio</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </AdminLayout>
    );
}