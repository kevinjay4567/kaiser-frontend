import { API_URL } from "@/core/config/environment";

export function AuthContext() {
  const refreshSession = () => {
    return fetch(`${API_URL}/auth/check`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return { refreshSession };
}
