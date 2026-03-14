interface Props {
    title: string;
    placeholder: string;
    type?: "text" | "number" | "url";
    isTextArea?: boolean;
}
{/* Por si al kevin le da por cambiar el tipo de dato de X cosa */ }

export function Input({ title, placeholder, type = "text", isTextArea = false }: Props) {
    return (
        <fieldset className="fieldset w-full">
            <legend className="fieldset-legend font-semibold">{title}</legend>
            {isTextArea ? (
                <textarea
                    placeholder={placeholder}
                    className="textarea w-full textarea-bordered"
                    rows={3}
                />
            ) : (
                <input
                    type={type}
                    className="input w-full input-bordered"
                    placeholder={placeholder}
                />
            )}
        </fieldset>
    );
}