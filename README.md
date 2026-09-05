# Registro-de-Productos-en-Angular-
tarea 2 de taller del bimestre 4

# Registro de Productos en Angular 

Aplicación web desarrollada en **Angular** para el registro y gestión de productos, implementando formularios reactivos, validaciones avanzadas, manejo de estados y arquitectura basada en características (*feature-based*).

---

## Arquitectura del Proyecto
El proyecto sigue una estructura modular por características para mantener el código limpio, escalable y fácil de mantener:

src/
└── app/
    └── feature/
        ├── components/
        │   └── producto-formulario/
        │       ├── producto-formulario.ts
        │       ├── producto-formulario.html
        │       └── producto-formulario.css
        └── services/
            └── producto.ts

# Tecnologías y Características Implementadas

Angular (Standalone Components): Sin módulos tradicionales (AppModule), utilizando la nueva arquitectura moderna de componentes independientes.

Formularios Reactivos (ReactiveFormsModule): Uso de FormGroup y FormBuilder para un control robusto de los datos del formulario.
  
  ---
Validaciones Sincrónicas:

Nombre: Obligatorio, mínimo 3 caracteres.

Descripción: Obligatorio, máximo configurado para descripciones detalladas.

Precio: Obligatorio, valor numérico mayor a 0.

Categoría: Selección obligatoria mediante un menú desplegable.

Stock: Obligatorio, valor numérico entero no negativo.

 ---

Manejo de Estados y UX: Uso de propiedades como touched e invalid combinadas con directivas *ngIf para mostrar mensajes de error dinámicos en tiempo real.

Inyección de Dependencias y Servicios: El componente se comunica con un ProductoService utilizando Observables para simular el almacenamiento y el envío de datos hacia un backend.

# Flujo del Formulario y Pruebas
Estado Inicial: Los campos del formulario inician vacíos. Al intentar enviar sin datos, el método markAllAsTouched() activa las validaciones y muestra los mensajes de error en rojo.

Validación de Datos (Inválidos): Si escribes menos de 3 caracteres en el nombre, dejas campos obligatorios vacíos o pones un precio negativo, el formulario bloquea el envío exitoso y avisa al usuario.

Registro Exitoso (Válidos): Al rellenar correctamente todos los campos y hacer clic en "Registrar Producto", los datos se empaquetan en el modelo, se envían al servicio a través de un Observable, se limpian los campos, se muestra una alerta verde de éxito y se listan de inmediato en la tabla inferior.

# Instrucciones de Ejecución
Asegúrate de tener instalado Node.js y el gestor de paquetes pnpm.

Clona el repositorio o abre la carpeta del proyecto en tu terminal.

> Instala las dependencias ejecutando:

pnpm install

> Inicia el servidor de desarrollo:

ng serve

> Abre tu navegador y accede a:

http://localhost:4200