import { apiService } from "./services/apiService";
import { Paciente, Turno } from "./types";

function esPaciente(objeto: unknown): objeto is Paciente {
  return (
    typeof objeto === "object" &&
    objeto !== null &&
    "rut" in objeto &&
    "habitacion" in objeto
  );
}

function esTurno(objeto: unknown): objeto is Turno {
  return (
    typeof objeto === "object" &&
    objeto !== null &&
    "estado" in objeto &&
    "pacientesAsignados" in objeto
  );
}

const displayContainer = document.getElementById("content-display");
const loadPatientsBtn = document.getElementById("load-patients-btn");
const loadShiftBtn = document.getElementById("load-shift-btn");

function renderPacientes(pacientes: Paciente[]): void {
  if (!displayContainer) return;

  if (!pacientes.length) {
    displayContainer.innerHTML = "<p>No hay pacientes registrados.</p>";
    return;
  }

  const listItems = pacientes
    .map((p) => {
      if (!esPaciente(p)) return "";
      return `
        <div class="card">
          <h3>${p.nombre}</h3>
          <p><strong>RUT:</strong> ${p.rut}</p>
          <p><strong>Habitación:</strong> ${p.habitacion}</p>
          <p><strong>Nivel de Cuidado:</strong> ${p.nivelCuidado}</p>
        </div>
      `;
    })
    .join("");

  displayContainer.innerHTML = `<div class="grid">${listItems}</div>`;
}

function renderTurno(turno: Turno): void {
  if (!displayContainer) return;

  if (!esTurno(turno)) {
    displayContainer.innerHTML = "<p>Error al cargar la información del turno.</p>";
    return;
  }

  displayContainer.innerHTML = `
    <div class="card header-card">
      <h2>Turno #${turno.id} - ${turno.fecha}</h2>
      <p><strong>Enfermero/a a Cargo:</strong> ${turno.enfermero.nombre} (${turno.enfermero.especialidad})</p>
      <p><strong>Estado:</strong> ${turno.estado}</p>
    </div>
  `;

  renderPacientes(turno.pacientesAsignados);
}

loadPatientsBtn?.addEventListener("click", async () => {
  if (displayContainer) displayContainer.innerHTML = "<p>Cargando pacientes...</p>";
  const pacientes = await apiService.obtenerPacientes();
  renderPacientes(pacientes);
});

loadShiftBtn?.addEventListener("click", async () => {
  if (displayContainer) displayContainer.innerHTML = "<p>Cargando turno...</p>";
  const turno = await apiService.obtenerTurnoActual();
  renderTurno(turno);
});