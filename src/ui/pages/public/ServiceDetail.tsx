import { API_URL } from "@/core/config/environment";
import type { Appointment } from "@/core/interfaces/Appointment";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Service } from "@/core/interfaces";
import { DayPicker } from "react-day-picker";

export function ServiceDetail() {
  const params = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [busyDate, setBusyDate] = useState<Date>(new Date(2026, 3, 9));
  const [time, setTime] = useState<string>("");
  const [busyTime, setBusyTime] = useState<string>("10:00");
  const [warningMsg, setWarningMsg] = useState<string>("");


  function handleEmployeeSelected(appointment: Appointment) {
    let dateTest = new Date(appointment.Customer[0].ingress)
    const currentHour = dateTest.getHours()
    const currentMinutes = dateTest.getMinutes()
    const timeArmed = `${currentHour < 10 ? '0' + currentHour : currentHour}:${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}`
    dateTest.setHours(0, 0, 0, 0)
    setBusyDate(dateTest)
    setBusyTime(timeArmed)
  }
  useEffect(() => {
    fetch(`${API_URL}/services/${params.id}`)
      .then(async (res) => {
        const json = await res.json();
        setService(json);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  useEffect(() => {
    console.log({ time, busyTime, date, busyDate });
  }, [time, busyTime, date, busyDate]);

  return (
    <div className="flex flex-col min-h-screen gap-5">
      <h1>
        Detalle del servicio <strong>{service?.name}</strong>
      </h1>

      <div>
        <h2 className="text-xl font-bold">Empleados</h2>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {service?.appointments.map((appointment, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="avatar">
                <div className="w-16 rounded-lg">
                  <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt={appointment.employee.fullName} onClick={() => handleEmployeeSelected(appointment)} />
                </div>
              </div>
              <div className="text-center font-medium text-sm text-balance">
                {appointment.employee.fullName}
              </div>
            </div>
          ))}
        </div>
      </div>

      <DayPicker
        className="react-day-picker"
        mode="single"
        selected={date}
        onSelect={setDate}
        footer={date ? `Selected: ${date.toLocaleDateString()}` : "Pick a day."}
      />

      <input
        type="time"
        className="input"
        onChange={(e) => setTime(e.target.value)}
      />
      {date?.getTime() === busyDate.getTime() && time === busyTime ? (
        <p>Ocupado!</p>
      ) : null}
    </div>
  );
}
