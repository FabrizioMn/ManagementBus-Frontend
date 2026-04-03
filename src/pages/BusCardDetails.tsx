import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Bus = {
  idBus: number;
  numeroBus: string;
  placa: string;
  caracteristicas: string;
  marca: string;
  activo: boolean;
  createdAt: string;
};

function BusCardDetails() {
  const { id } = useParams();
  const [bus, setBus] = useState<Bus | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/bus/${id}`)
      .then((res) => res.json())
      .then((data) => setBus(data))
      .catch((err) => console.log(err));
  }, [id]);



  if(!bus) return <div className="min-h-screen flex items-center justify-center p-6">Cargando...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">

      <div className="bg-slate-900 ring-2 ring-gray-700 rounded-xl p-5 mb-5 w-full max-w-md">

        {/*CABECERA DE LA TARJETA*/}
        <div className="bg-blue-600 p-8 text-white rounded-xl mb-5">
          <p className="text-blue-100 text-sm font-medium uppercase tracking-wide mb-1">Unidad de Transporte</p>
          <h1 className="text-4xl font-black">{bus.numeroBus}</h1>
        </div>

        {/*CUERPO DE LA TARJETA*/}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
            <p className="text-slate-400 text-xs font-semibold uppercase mb-1">Placa</p>
            <p className="text-xl font-bold text-white">{bus.placa}</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
            <p className="text-slate-400 text-xs font-semibold uppercase mb-1">Marca</p>
            <p className="text-xl font-bold text-white">{bus.marca}</p>
          </div>
        </div>

        {/*CARACTERISTICAS*/}
        <div>
          <p className="text-slate-400 text-sm pl-1 font-semibold uppercase my-3">Caracteristicas</p>
          <p className="text-slate-300 bg-slate-800/30 p-4 rounded-2xl border border-slate-700">{bus.caracteristicas || "Sin detalles adicionales registrados."}</p>
        </div>

        {/*ESTADO*/}
        <div>
          <p className="text-slate-400 text-sm font-semibold uppercase my-3">Estado:<span className={`${bus.activo ? "bg-green-500/20 text-green-400 border-green-500/50" : "bg-red-500/20 text-red-400 border-red-500/20"} ml-4 badge px-2 py-1 rounded text-xs`}>{bus.activo ? "Activo" : "Inactivo"}</span></p>
        </div>

        {/*FECHA*/}
        <div className=" flex items-center gap-4 rounded-2xl mt-4">
          <p className="text-slate-400 text-sm font-semibold uppercase">Inscripcion:</p>
          <span className="bg-slate-900 w-fit text-blue-400 text-xs font-bold py-1 px-2 rounded border border-blue-500/30">
            {new Intl.DateTimeFormat("es-ES", {
              dateStyle: "medium",
            }).format(new Date(bus.createdAt))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BusCardDetails;
