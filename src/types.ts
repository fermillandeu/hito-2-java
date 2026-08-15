export enum EstadoTurno {
  Planificado = "PLANIFICADO",
  EnCurso = "EN_CURSO",
  Completado = "COMPLETADO",
}

export enum NivelCuidado {
  Bajo = "BAJO",
  Medio = "MEDIO",
  Alto = "ALTO",
  Critico = "CRITICO",
}

export interface Paciente {
  id: string;
  nombre: string;
  rut: string;
  habitacion: number;
  nivelCuidado: NivelCuidado;
}

export interface Enfermero {
  id: string;
  nombre: string;
  especialidad: string;
}

export interface Turno {
  id: string;
  fecha: string;
  estado: EstadoTurno;
  enfermero: Enfermero;
  pacientesAsignados: Paciente[];
}