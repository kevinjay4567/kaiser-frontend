import { useNavigate } from "react-router";
import { LoginForm } from  "@/ui/pages/public/Login/components/loginForm";
import { AparienceSwitcher } from "@/ui/layouts/components/AparienceSwitcher";
import { BaseIcon } from "@/ui/components/base/BaseIcon";
import { useThemeSync } from "@/ui/pages/public/Login/hooks/useThemeSync";

export function LoginPage() {
    const navigate = useNavigate();
    const isDarkMode = useThemeSync();

    const handleLogin = async (username: string, password: string) => {
        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
                credentials: "include",
            });
            if (!response.ok) {
                throw new Error("Login failed");
            }
            const data = await response.json();
            console.log(data.message);
            // Redirigir a la página de admin en caso de éxito
            navigate("/admin");

        } catch (err) {
            alert(err instanceof Error ? err.message : "ni idea del error brother");

        }
    };

      const handleGoogleSignIn = () => {
    console.log("Kevin carrea");
    // TODO: ni idea de como hacer esto
  };

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-900"}`}>
      <div className="fixed top-4 right-4 z-50 bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md rounded-lg p-3 hover:bg-white/40 dark:hover:bg-zinc-700/40 transition-colors">
        <AparienceSwitcher />
      </div>
      
      {/* efectos de fondo */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/15 dark:bg-indigo-600/10 blur-3xl" />
        
        <div className="absolute inset-0 opacity-50 dark:opacity-100 transition-opacity duration-300">
          {[...Array(500)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* contenedor principal */}
      <div className="relative flex min-h-screen items-center justify-center p-4 md:p-8" >
         <div className="hidden lg:block absolute top-32 bottom-32 left-98 right-98 rounded-3xl border border-zinc-300 dark:border-zinc-800 bg-zinc-200/50 dark:bg-zinc-900/50 backdrop-blur-sm" /> 
        <div className="relative z-10 flex w-full max-w-md flex-col items-center">
          <div className="absolute left-0 right-0 top-1/2 -z-10 hidden md:flex items-center justify-between px-4">
            <div className="h-px w-24 lg:w-40 bg-gradient-to-r from-transparent via-zinc-400 dark:via-zinc-600 to-zinc-400 dark:to-zinc-600" />
            <div className="h-px w-24 lg:w-40 bg-gradient-to-l from-transparent via-zinc-400 dark:via-zinc-600 to-zinc-400 dark:to-zinc-600" />
          </div>

          <div className="w-full rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-8 shadow-2xl">
            <div className="mb-6 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-200 dark:bg-zinc-800 shadow-inner">
                <BaseIcon icon="diamond" size={24} color="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-zinc-600 dark:text-zinc-300" />
              </div>
            </div>

            <h1 className="mb-8 text-center text-2xl font-semibold text-zinc-900 dark:text-white">
              Kaiser
            </h1>

            <LoginForm 
              onSubmit={handleLogin} 
              onGoogleSignIn={handleGoogleSignIn}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
              Unete a mas de <span className="font-semibold text-zinc-700 dark:text-white">2500</span> Clientes satisfechos
            </p>

            <div className="flex justify-center -space-x-3">
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-zinc-100 dark:border-zinc-900 transition-transform hover:scale-110 hover:z-10"
                >
                  <img
                    src={avatar}
                    alt={`User ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// cambiar por imagenes de usuarios reales despues cuando modifiquemos el backend y tengamos usuarios reales XD
const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
];