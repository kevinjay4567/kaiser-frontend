import { useNavigate } from "react-router";



export function AdminPage() {

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (!response.ok) {
                throw new Error("Logout failed");
            }
            const data = await response.json();
            console.log(data.message);
            navigate("/login");

        } catch (err) {
            alert(err instanceof Error ? err.message : "ni idea del error brother");

        }
    };

    return <div className="flex flex-col items-center justify-center h-screen gap-4">
        <button className="btn btn-wide btn-primary" onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button className="btn btn-wide btn-info" onClick={() => navigate("/manager")}>Manager</button>
        <button className="btn btn-wide btn-error" onClick={handleLogout}>Logout</button>
    </div>
}