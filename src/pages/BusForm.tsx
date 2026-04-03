import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { BusRequest } from "../types";

function BusForm() {
  const [numBus, setNumBus] = useState<string>("");
  const [placa, setPlaca] = useState<string>("");
  const [caracteristicas, setCaracteristicas] = useState<string>("");
  const [marca, setMarca] = useState<string>("");
  const [activo, setActivo] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const busData: BusRequest = {
      numeroBus: numBus,
      placa,
      caracteristicas,
      idMarca: marca === "" ? null : Number(marca),
      activo: activo === "" ? null : activo === "true",
    };

    try {
      const response = await fetch("http://localhost:8080/api/bus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(busData),
      });

      if (response.ok) {
        navigate("/");
        return;
      }

      const data = await response.json();
      setErrors(data);
      console.log("Errores recibidos:", data);
    } catch (error) {
      console.error("Error al registrar el bus:", error);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="p-10 w-full max-w-2xl">
        <h3 className="bg-slate-900 text-white px-3 py-2 rounded-xl text-4xl font-bold text-center mx-auto mb-5 max-w-md ring-1 ring-gray-700">
          Registrar Bus
        </h3>
        <form
          onSubmit={onSubmit}
          className="bg-slate-900 p-5 rounded-xl shadow-lg max-w-md mx-auto ring-1 ring-gray-700"
        >
          {errors.numeroBus && (
            <p className="text-red-100 text-sm font-semibold mb-2 rounded-md p-2 bg-red-500/40">
              {errors.numeroBus}
            </p>
          )}
          <label
            htmlFor="numBus"
            className="block font-bold text-xl text-white mb-2"
          >
            Numero de Bus
          </label>
          <input
            id="numBus"
            type="text"
            className="w-full bg-gray-200 text-black border-gray-100 rounded-sm p-2 mb-4 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => {
              setNumBus(e.target.value);
              setErrors((prev) => ({ ...prev, numeroBus: "" }));
            }}
            value={numBus}
          />

          {errors.placa && (
            <p className="text-red-100 text-sm font-semibold mb-2 rounded-md p-2 bg-red-500/40">
              {errors.placa}
            </p>
          )}

          <label
            htmlFor="numPlaca"
            className="block font-bold text-xl text-white mb-2"
          >
            Numero de Placa
          </label>
          <input
            id="numPlaca"
            type="text"
            className="w-full bg-gray-200 text-black border-gray-100 rounded-sm p-2 mb-4 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => {
              setPlaca(e.target.value);
              setErrors((prev) => ({ ...prev, placa: "" }));
            }}
            value={placa}
          />
          <label
            htmlFor="caracteristicas"
            className="block font-bold text-xl text-white mb-2"
          >
            Caracteristicas
          </label>
          <textarea
            id="caracteristicas"
            className="w-full bg-gray-200 border border-gray-300 rounded-md p-2 mb-4 focus:ring-2 focus:ring-blue-500 outline-none h-32"
            onChange={(e) => setCaracteristicas(e.target.value)}
            value={caracteristicas}
          ></textarea>

          {errors.idMarca && (
            <p className="text-red-100 text-sm font-semibold mb-2 rounded-md p-2 bg-red-500/40">
              {errors.idMarca}
            </p>
          )}
          <label
            htmlFor="marca"
            className="block font-bold text-xl text-white mb-2"
          >
            Marca
          </label>
          <select
            id="marca"
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value);
              setErrors((prev) => ({ ...prev, idMarca: "" }));
            }}
            className="w-full bg-gray-200 border border-gray-300 rounded-md p-2 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Selecciona una marca</option>
            <option value="1">Volvo</option>
            <option value="2">Mercedez Benz</option>
            <option value="3">Scania</option>
          </select>
          {errors.activo && (
            <p className="text-red-100 text-sm font-semibold mb-2 rounded-md p-2 bg-red-500/40">
              {errors.activo}
            </p>
          )}
          <label
            htmlFor="activo"
            className="block font-bold text-xl text-white mb-2"
          >
            Seleccione el Estado
          </label>
          <select
            id="activo"
            value={activo}
            onChange={(e) => {
              setActivo(e.target.value);
              setErrors((prev) => ({ ...prev, activo: "" }));
            }}
            className="w-full bg-gray-200 border border-gray-300 rounded-md p-2 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Seleccione un estado</option>
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>
          <button
            type="submit"
            className="bg-green-500 block mx-auto text-white px-5 py-2 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Guardar
          </button>
        </form>
      </div>
    </section>
  );
}

export default BusForm;
