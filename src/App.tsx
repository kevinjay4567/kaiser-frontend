import { useEffect, useState } from "react"

interface Service {
  id: string;
  name: string;
  price: string;
  state: boolean;
  duration: number;
  discount: string;
}

function App() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/services')
      .then(async (res) => {
        const json = await res.json();
        setServices(json);
      })
      .catch((err) => console.log(err))
  }, [])

  const getEmployees = (id: string) => {
    fetch(`http://localhost:3000/api/employees/service/${id}`)
      .then(async (res) => {
        const json = await res.json();

        return json;
      })
  }

  return (
    <>
      <ul>
        {
          services.map((service) => <li onClick={() => getEmployees(service.id)} key={service.id}>
            {service.name} - {service.price}
          </li>)
        }
      </ul>
    </>
  )
}

export default App
