"use client";

import { BaseIcon } from "@/ui/components/base/BaseIcon";
import { useState } from "react";

interface LoginFormProps {
  onSubmit?: (username: string, password: string) => void;
  onGoogleSignIn?: () => void;
}

export function LoginForm({ onSubmit, onGoogleSignIn }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-lg border border-zinc-700 dark:border-zinc-700 border-zinc-300 
            bg-zinc-800/50 dark:bg-zinc-800/50 bg-white/80 
            px-4 py-3 text-sm 
            text-white dark:text-white text-zinc-900
            placeholder:text-zinc-500 dark:placeholder:text-zinc-500 placeholder:text-zinc-400
            focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500
            transition-colors"
          required
        />
      </div>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-zinc-700 dark:border-zinc-700 border-zinc-300 
            bg-zinc-800/50 dark:bg-zinc-800/50 bg-white/80 
            px-4 py-3 pr-12 text-sm 
            text-white dark:text-white text-zinc-900
            placeholder:text-zinc-500 dark:placeholder:text-zinc-500 placeholder:text-zinc-400
            focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500
            transition-colors"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          {showPassword ? (
            <BaseIcon icon="eyeOff" size={24} color="currentColor" viewBox="0 0 24 24" className="h-5 w-5" />
          ) : (
            <BaseIcon icon="eye" size={24} color="currentColor" viewBox="0 0 24 24" className="h-5 w-5" />

          )}
        </button>
      </div>

      {/* login boton */}
      <button
        type="submit"
        className="w-full rounded-lg 
          bg-zinc-700 dark:bg-zinc-700 bg-zinc-200
          py-3 text-sm font-medium 
          text-zinc-300 dark:text-zinc-300 text-zinc-600
          hover:bg-zinc-600 dark:hover:bg-zinc-600 hover:bg-zinc-300
          transition-colors"
      >
        Iniciar Sesión
      </button>

      {/* login google boton */}
      <button
        type="button"
        onClick={onGoogleSignIn}
        className="flex w-full items-center justify-center gap-3 rounded-lg 
          bg-white dark:bg-white bg-zinc-100
          py-3 text-sm font-medium 
          text-zinc-900 
          hover:bg-zinc-100 dark:hover:bg-zinc-100 hover:bg-zinc-200
          transition-colors"
      >
        <BaseIcon icon="google" size={24} color="currentColor" viewBox="0 0 24 24" className="h-5 w-5" />
        Entrar con Google
      </button>

      {/* registrarse/crear cuenta 
        ocultare este boton despues, lo dejare para mostrarselo al kevin
      */}
      <p className="text-center text-sm text-zinc-400 dark:text-zinc-400 text-zinc-600">
        {"¿No tienes una cuenta? "}
        <a
          href="#"
          className="font-medium text-white dark:text-white text-zinc-900 hover:underline"
        >
          Registrarse
        </a>
      </p>
    </form>
  );
}

