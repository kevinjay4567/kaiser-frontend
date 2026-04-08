import { useState, type FormEvent } from "react";
import { Link } from "react-router";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-10">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Contáctanos</h1>
          <Link to="/" className="btn btn-ghost btn-sm">
            Volver
          </Link>
        </div>

        <p className="mb-6 text-base-content/70">
          Cuéntanos en qué te podemos ayudar y te responderemos pronto.
        </p>

        <form
          className="card border border-base-300 bg-base-100 p-6 shadow-sm"
          onSubmit={handleSubmit}
        >
          <label className="mb-2 text-sm font-medium" htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="input input-bordered mb-4 w-full"
            placeholder="Tu nombre"
            required
          />

          <label className="mb-2 text-sm font-medium" htmlFor="email">
            Correo
          </label>
          <input
            id="email"
            type="email"
            className="input input-bordered mb-4 w-full"
            placeholder="tu@correo.com"
            required
          />

          <label className="mb-2 text-sm font-medium" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            className="textarea textarea-bordered mb-6 h-32 w-full"
            placeholder="Escribe tu mensaje"
            required
          />

          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        </form>

        {sent ? (
          <div className="alert alert-success mt-4">
            <span>Mensaje enviado. Te contactaremos pronto.</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
