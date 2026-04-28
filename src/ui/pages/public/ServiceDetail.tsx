import { API_URL } from "@/core/config/environment";
import type { Appointment } from "@/core/interfaces/Appointment";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Service } from "@/core/interfaces";
import { DayPicker } from "react-day-picker";
import { type Employee } from "@/core/interfaces/Employee";

export function ServiceDetail() {
  const params = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [busyDate, setBusyDate] = useState<Date>(new Date(2026, 3, 9));
  const [time, setTime] = useState<string>("");
  const [busyTimeBef, setBusyTimeBef] = useState<string>("");
  const [busyTimeAft, setBusyTimeAft] = useState<string>("");
  const [busyTime, setBusyTime] = useState<string>("10:00");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );
  const [warningMsg, setWarningMsg] = useState<string>("");

  function handleEmployeeSelected(appointment: Appointment) {
    setSelectedEmployee(appointment.employee);
    let dateTest = new Date(appointment.Customer[0].ingress);
    const currentHour = dateTest.getHours();
    const currentMinutes = dateTest.getMinutes();

    const timeb = currentHour - 2;
    const timea = currentHour + 2;
    const before = `${timeb < 10 ? (timeb < 0 ? timeb : "0" + timeb) : timeb}:${currentMinutes < 10 ? "0" + currentMinutes : currentMinutes}`;
    const after = `${timea < 10 ? "0" + timea : timea}:${currentMinutes < 10 ? "0" + currentMinutes : currentMinutes}`;
    const timeArmed = `${currentHour < 10 ? "0" + currentHour : currentHour}:${currentMinutes < 10 ? "0" + currentMinutes : currentMinutes}`;
    dateTest.setHours(0, 0, 0, 0);
    setBusyDate(dateTest);
    setBusyTime(timeArmed);
    setBusyTimeBef(before);
    setBusyTimeAft(after);
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
    console.log({ time, busyTime, date, busyDate, busyTimeBef, busyTimeAft });
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
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="avatar">
                <div
                  className={`w-16 rounded-lg ${selectedEmployee?.id === appointment.employee.id ? "ring-primary ring-offset-base-100 ring-2 ring-offset-2" : null}  cursor-pointer`}
                >
                  <img
                    src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                    alt={appointment.employee.fullName}
                    onClick={() => handleEmployeeSelected(appointment)}
                  />
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
        footer={
          date
            ? `${selectedEmployee?.fullName} -- Seleccionado: ${date.toLocaleDateString()}`
            : "Pick a day."
        }
      />

      <input
        type="time"
        className="input"
        onChange={(e) => setTime(e.target.value)}
      />
      {date?.getTime() === busyDate.getTime() &&
      time >= busyTimeBef &&
      busyTimeAft >= time ? (
        <p>Ocupado!</p>
      ) : null}
    </div>
  );
}
