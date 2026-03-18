import { AdminLayout } from "@/ui/layouts";
import { useEffect } from "react";
import { AuthContext } from "@/ui/contexts/auth/AuthContext";

export function DashboardPage() {
  const context = AuthContext();

  useEffect(() => {
    context
      .refreshSession()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">
        Aqui saldra la info de la dashboard
      </h1>
    </AdminLayout>
  );
}
