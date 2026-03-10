import { useState } from "react"
import type { Service } from "../interfaces";

export const useFecthServices = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [query, setQuery] = useState('');

    async function execute() {
        try {
            const res = await fetch('http://localhost:3000/api/services');
            const json = await res.json();
            setServices(json);
        } catch (err) {
            console.log(err);
        }
    }

    return { query, services, execute, setQuery, setServices }
}