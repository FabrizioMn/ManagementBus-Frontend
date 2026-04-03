export interface BusResponse {
  idBus: number;
  numeroBus: string;
  placa: string;
  caracteristicas: string;
  marca: string;
  activo: boolean;
  createdAt: string;
};


export interface BusRequest {
  numeroBus: string;
  placa: string;
  caracteristicas: string;
  idMarca: number | null;
  activo: boolean | null;
}