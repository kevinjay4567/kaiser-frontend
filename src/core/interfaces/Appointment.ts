import type { Employee } from "./Employee";

export interface Appointment {
    id: string;
    serviceId: string;
    employee: Employee
}