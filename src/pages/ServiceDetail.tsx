import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface Service {
    id: string;
    name: string;
    duration: number;
    price: string;
    discount: string;
    state: boolean;
    urlImage: string;
    appointments: Array<Appointment>;
}

interface Appointment {
    id: string;
    serviceId: string;
    employee: Employee
}

interface Employee {
    id: string;
    fullName: string;
    state: boolean;
    phone: string;
}

export function ServiceDetail() {
    const params = useParams();
    const [service, setService] = useState<Service | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/services/${params.id}`)
            .then(async (res) => {
                const json = await res.json();

                setService(json);
            })
            .catch((err) => console.log(err))
    }, [params.id])

    return (
        <div className="flex flex-col min-h-screen gap-5">
            <h1>Detalle del servicio <strong>{service?.name}</strong></h1>

            <div>
                <p>Empleados</p>
                <ul className="list bg-base-100 rounded-box shadow-md">
                    {
                        service?.appointments.map((appointment, index) => (
                            <li className="list-row">
                                <div className="text-4xl font-thin opacity-30 tabular-nums">{index + 1}</div>
                                <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                                <div className="list-col-grow">
                                    <div>{appointment.employee.fullName}</div>
                                    <div className="text-xs uppercase font-semibold opacity-60">{appointment.employee.phone}</div>
                                </div>
                                <button className="btn btn-square btn-ghost">
                                    <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}