import { useState } from "react";
import { useNavigate } from "react-router";

export function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
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

    return <div className="flex justify-center items-center h-screen">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Login</legend>

            <label className="label">Username</label>
            <input type="text" className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>
        </fieldset>
    </div>
}