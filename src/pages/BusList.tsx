import { useEffect, useState } from "react";
import type { BusResponse } from "../types/index";
import { Link } from "react-router-dom";

function BusList() {
  const [buses, setBuses] = useState<BusResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/bus")
      .then((res) => res.json())
      .then((data) => {
        setBuses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando Buses...</p>;

  return (
    <div className="min-h-screen">
      <h1>Listado de Buses</h1>
      <div className="container mx-auto p-4 flex flex-col gap-4">
        {buses.map((bus: BusResponse) => (
          <Link
            to={`/bus/${bus.idBus}`}
            key={bus.idBus}
            className=" flex justify-between items-center p-4  rounded-lg shadow-sm bg-slate-900 border border-gray-700 hover:bg-slate-700 transition-colors"
          >
            <div>
              <span className="font-semibold text-white">
                Nro: {bus.numeroBus}
              </span>
              <span className="ml-4 text-gray-300">Placa: {bus.placa}</span>
              <span className="ml-4 badge bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {bus.marca}
              </span>
            </div>
            <div>
              <span className={`${bus.activo ? "bg-green-500/50" : "bg-red-500/50"} ml-4 badge px-2 py-1 rounded text-sm`}>{bus.activo ? "🟢" : "🔴"}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BusList;
