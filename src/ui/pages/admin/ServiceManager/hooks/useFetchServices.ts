import { useState } from "react"
import type { Service } from "@/core/interfaces";
import { API_URL } from "@/core/config/environment";

export const useFecthServices = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [query, setQuery] = useState('');

    async function execute() {
        try {
            const res = await fetch(`${API_URL}/services`);
            const json = await res.json();
            setServices(json);
        } catch (err) {
            console.log(err);
        }
    }

    return { query, services, execute, setQuery, setServices }
}