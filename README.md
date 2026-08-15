# 🏥 Sistema de Gestión de Enfermería - Hito 2

Aplicación web desarrollada con **TypeScript** y **Vite** para la gestión de turnos del personal de enfermería, asignación de pacientes y control de niveles de cuidado sanitario.

---

## 🚀 Características

* **Gestión de Turnos:** Visualización del estado del turno en tiempo real y el enfermero a cargo.
* **Módulo de Pacientes:** Lista detallada de pacientes asignados con su número de habitación, RUT y nivel de cuidado (*Bajo, Medio, Alto, Crítico*).
* **Tipado Estricto:** Implementación de interfaces, *enums* y *type guards* en TypeScript para mayor seguridad en el manejo de datos.
* **Simulación Asíncrona:** Consumo de datos mediante un servicio simulado (`apiService`) utilizando Promesas de JavaScript.

---

## 🛠️ Tecnologías Utilizadas

* **Lenguaje:** TypeScript / HTML5 / CSS3
* **Bundler:** Vite
* **Control de Versiones:** Git & GitHub

---

## 📁 Estructura del Proyecto

```text
enfermeria-gestion/
├── index.html              # Estructura principal de la interfaz
├── tsconfig.json           # Configuración del compilador de TypeScript
├── package.json            # Dependencias y scripts del proyecto
└── src/
    ├── main.ts             # Renderizado del DOM y lógica de eventos
    ├── style.css           # Estilos visuales de la aplicación
    ├── types.ts            # Interfaces y enumeraciones del dominio
    └── services/
        └── apiService.ts   # Servicio simulado de obtención de datos
