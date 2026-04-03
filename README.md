# 🚌 Bus Management System - Frontend

Este es el cliente web desarrollado para la gestión y visualización de una flota de buses. La aplicación ha sido construida bajo estándares modernos de desarrollo frontend, enfocándose en la experiencia de usuario (UX), el tipado fuerte y la eficiencia en la comunicación con APIs REST.

## 🚀 Tecnologías y Herramientas

* **React 18**: Biblioteca principal para la construcción de la interfaz.
* **TypeScript**: Implementación de interfaces y tipos para un desarrollo libre de errores en tiempo de ejecución.
* **Vite**: Toolchain de nueva generación para un entorno de desarrollo veloz.
* **Tailwind CSS**: Framework de utilidades para un diseño responsivo y moderno con estética *Dark Mode*.
* **React Router DOM**: Gestión de rutas dinámicas y navegación entre el panel de control y el detalle técnico.

## ✨ Funcionalidades Clave

* **Validación de Formularios**: Sincronización en tiempo real con los errores de validación de Spring Boot (Bean Validation).
* **Navegación Dinámica**: Visualización detallada de cada unidad mediante parámetros de URL (`/bus/:id`).
* **Gestión de Estados**: Manejo centralizado de errores y datos del formulario para una limpieza automática al escribir.
* **UI Premium**: Tarjetas de información con jerarquía visual clara, uso de gradientes y micro-animaciones (Pulse) para indicar estados operativos.



## 📂 Estructura del Proyecto

```text
src/
 ├── components/
 ├── pages/
 ├── types/
 ├── App.tsx
 └── main.tsx
```

## 📦 Instalación y Ejecución

Sigue estos pasos para configurar el entorno de desarrollo localmente:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/FabrizioMn/ManagementBus-Frontend.git](https://github.com/FabrizioMn/ManagementBus-Frontend.git)
cd ManagementBus-Frontend
npm i
npm run dev
```
