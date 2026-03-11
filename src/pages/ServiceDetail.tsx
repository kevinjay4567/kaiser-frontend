import {useParams} from "react-router";

export function ServiceDetail() {
    const params = useParams();

    return <h1>Detalle del servicio {params.id}</h1>
}