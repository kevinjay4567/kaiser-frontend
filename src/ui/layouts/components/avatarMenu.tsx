import { useNavigate } from "react-router";
import { API_URL } from "@/core/config/environment";
import { AparienceSwitcher } from "./AparienceSwitcher";

export function AvatarMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch(`${API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const json = await res.json();
        console.log(json);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="avatar block">
        <div className="w-12 rounded cursor-pointer">
          <img
            src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
            alt="Avatar"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content mt-1 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow"
      >
        <li>
          <a>Mi Perfil</a>
        </li>
        <li>
          <div className="flex flex-row items-center justify-between">
            <p> Apariencia </p> <AparienceSwitcher />
          </div>
        </li>
        <li>
          <button className="btn btn-error mt-2" onClick={() => handleLogout()}>
            Cerrar sesión
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-log-out-icon lucide-log-out"
            >
              <path d="m16 17 5-5-5-5" />
              <path d="M21 12H9" />
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
