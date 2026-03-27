import { useState } from "react";
import type { Service } from "@/core/interfaces";
import OperationService from "@/core/services/OperationService";
import RuntimeException from "@/core/exceptions/RuntimeException";

export const useFecthServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState<RuntimeException | null>(null);

  async function execute() {
    try {
      const data = await OperationService.all();
      setServices(data);
    } catch (err) {
      if (err instanceof RuntimeException) {
        setError(err);
      }
    }
  }

  return { query, services, execute, setQuery, setServices, error };
};
