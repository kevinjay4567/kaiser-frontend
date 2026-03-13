import { useNavigate } from "react-router";

export function ManagerPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <button
        className="btn btn-wide btn-primary"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </button>
      <button
        className="btn btn-wide btn-info"
        onClick={() => navigate("/manager")}
      >
        Manager
      </button>
      <button className="btn btn-wide btn-error">Logout</button>
    </div>
  );
}
