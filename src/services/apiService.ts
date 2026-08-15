import { Paciente, Turno, EstadoTurno, NivelCuidado } from "../types";

const mockPacientes: Paciente[] = [
  { id: "p1", nombre: "María González", rut: "12.345.678-9", habitacion: 101, nivelCuidado: NivelCuidado.Medio },
  { id: "p2", nombre: "Carlos Rojas", rut: "9.876.543-2", habitacion: 102, nivelCuidado: NivelCuidado.Critico },
  { id: "p3", nombre: "Ana Sepúlveda", rut: "15.432.109-8", habitacion: 104, nivelCuidado: NivelCuidado.Bajo }
];

const mockTurno: Turno = {
  id: "t-101",
  fecha: new Date().toISOString().split("T")[0],
  estado: EstadoTurno.EnCurso,
  enfermero: { id: "e1", nombre: "Laura Morales", especialidad: "Cuidados Intensivos" },
  pacientesAsignados: mockPacientes
};

export const apiService = {
  async obtenerPacientes(): Promise<Paciente[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockPacientes), 400);
    });
  },

  async obtenerTurnoActual(): Promise<Turno> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockTurno), 400);
    });
  }
};