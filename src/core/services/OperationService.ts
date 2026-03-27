import { type Service } from "@/core/interfaces";
import { API_URL } from "@/core/config/environment";
import RuntimeException from "../exceptions/RuntimeException";

class OperationService {
  async all(): Promise<Service[]> {
    const response = await fetch(`${API_URL}/services`);

    switch (response.status) {
      case 200:
        return await response.json();
      default:
        throw new RuntimeException("Error al obtener servicios");
    }
  }
}

export default new OperationService();
